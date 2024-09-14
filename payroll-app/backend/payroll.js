const express = require('express');
const { Pool } = require('pg');
const app = express();

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

// Function to calculate payroll
async function calculatePayroll(employeeId) {
  try {
    const result = await pool.query('SELECT * FROM employees WHERE id = $1', [employeeId]);
    if (result.rows.length === 0) {
      throw new Error('Employee not found!');
    }
    const employee = result.rows[0];
    const calculatedSalary = calculateSalary(employee.salary);
    await pool.query('INSERT INTO payroll_history (employee_id, salary) VALUES ($1, $2)', [employeeId, calculatedSalary]);
    return { message: `Payroll calculated successfully! Salary: ${calculatedSalary}` };
  } catch (error) {
    throw error;
  }
}

// Function to display payroll history
async function displayPayrollHistory() {
  try {
    const result = await pool.query('SELECT * FROM payroll_history');
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// API Endpoints
app.get('/api/payroll/:employeeId', async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const result = await calculatePayroll(employeeId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/payroll-history', async (req, res) => {
  try {
    const result = await displayPayrollHistory();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});