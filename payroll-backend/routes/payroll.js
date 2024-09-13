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

// POST /payroll/calculate
router.post('/calculate', async (req, res) => {
  const employeeId = req.body.employeeId; // Assuming you pass employeeId in the request
  try {
    const result = await pool.query('SELECT * FROM employees WHERE id = $1', [employeeId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Employee not found!' });
    }
    const employee = result.rows[0];
    const calculatedSalary = calculateSalary(employee.salary);
    await pool.query('INSERT INTO payroll_history (employee_id, salary) VALUES ($1, $2)', [employeeId, calculatedSalary]);
    res.json({ message: 'Payroll calculated successfully!', calculatedSalary });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /payroll/history
router.get('/history', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM payroll_history');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Helper function for salary calculation (replace with your actual calculation logic)
function calculateSalary(baseSalary) {
  // Implement your salary calculation logic here
  return baseSalary * 1.1; // Example: 10% bonus
}

module.exports = router;