const { Pool } = require('pg');

// Add environment variables for PostgreSQL connection
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

// Employee model
const employee = {
  firstName: "John",
  lastName: "Doe",
  hourlyRate: 15,
  hoursWorked: 40,
  // ... other fields
};

// PostgreSQL connection pool
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

// Function to calculate salary
function calculateSalary(employee) {
  // ... (same as before)
}

// Function to calculate leave allowances and other adjustments
function calculateLeaveAndAdjustments(employee) {
  // ... (same as before)
}

// Create Employee
async function createEmployee(employee) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      'INSERT INTO employees (first_name, last_name, hourly_rate, hours_worked) VALUES ($1, $2, $3, $4) RETURNING *',
      [employee.firstName, employee.lastName, employee.hourlyRate, employee.hoursWorked]
    );
    return rows[0];
  } finally {
    client.release();
  }
}

// Read Employee
async function getEmployee(id) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM employees WHERE id = $1', [id]);
    return rows[0];
  } finally {
    client.release();
  }
}

// Update Employee
async function updateEmployee(id, employee) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      'UPDATE employees SET first_name = $1, last_name = $2, hourly_rate = $3, hours_worked = $4 WHERE id = $5 RETURNING *',
      [employee.firstName, employee.lastName, employee.hourlyRate, employee.hoursWorked, id]
    );
    return rows[0];
  } finally {
    client.release();
  }
}

// Delete Employee
async function deleteEmployee(id) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  } finally {
    client.release();
  }
}

// Export the employee object, functions, and CRUD operations
module.exports = {
  employee,
  calculateSalary,
  calculateLeaveAndAdjustments,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};