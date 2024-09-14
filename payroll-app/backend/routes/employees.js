const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

// Add environment variables for PostgreSQL connection
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

// Create a PostgreSQL pool
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

// GET all employees
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single employee
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cannot find employee' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new employee
router.post('/', async (req, res) => {
  try {
    const { name /*, ... other employee properties */ } = req.body;
    const result = await pool.query('INSERT INTO employees (name /*, ... other columns */) VALUES ($1 /*, ... other values */) RETURNING *', [name /*, ... other values */]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update an existing employee
router.put('/:id', async (req, res) => {
  try {
    const { name /*, ... other employee properties */ } = req.body;
    const result = await pool.query('UPDATE employees SET name = $1 /*, ... other columns */ WHERE id = $2 RETURNING *', [name /*, ... other values */, req.params.id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an employee
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM employees WHERE id = $1', [req.params.id]);
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;