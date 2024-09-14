const express = require('express');
const app = express();
const { Pool } = require('pg');
require('dotenv').config({ path: './backend/.env' });

// Set up PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// ... (rest of the code remains the same)

// Create API endpoint to retrieve all employees
app.get('/api/employees', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving employees' });
  }
});

// Create API endpoint to create a new employee
app.post('/api/employees', async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const result = await pool.query({
      text: 'INSERT INTO employees (name, email, department) VALUES ($1, $2, $3) RETURNING *',
      values: [name, email, department],
    });
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating employee' });
  }
});

// Create API endpoint to update an existing employee
app.put('/api/employees/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, department } = req.body;
    const result = await pool.query({
      text: 'UPDATE employees SET name = $1, email = $2, department = $3 WHERE id = $4 RETURNING *',
      values: [name, email, department, id],
    });
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating employee' });
  }
});

// Create API endpoint to delete an employee
app.delete('/api/employees/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query(`DELETE FROM employees WHERE id = ${id}`);
    res.json({ message: `Employee with ID ${id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting employee' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});