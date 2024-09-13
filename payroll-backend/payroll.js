const { Pool } = require('pg');
const readline = require('readline');

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
      console.log('Employee not found!');
      return;
    }
    const employee = result.rows[0];
    const calculatedSalary = calculateSalary(employee.salary);
    await pool.query('INSERT INTO payroll_history (employee_id, salary) VALUES ($1, $2)', [employeeId, calculatedSalary]);
    console.log(`Payroll calculated successfully! Salary: ${calculatedSalary}`);
  } catch (error) {
    console.error(error.message);
  }
}

// Function to display payroll history
async function displayPayrollHistory() {
  try {
    const result = await pool.query('SELECT * FROM payroll_history');
    console.log('Payroll History:');
    result.rows.forEach((row) => {
      console.log(`Employee ID: ${row.employee_id}, Salary: ${row.salary}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Interactive command-line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter employee ID: ', (employeeId) => {
  calculatePayroll(employeeId);
  rl.question('Do you want to view payroll history? (y/n): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      displayPayrollHistory();
    }
    rl.close();
  });
});