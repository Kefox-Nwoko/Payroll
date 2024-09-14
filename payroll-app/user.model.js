// user.model.js (Backend)

const { Pool } = require('pg');

// Add environment variables for PostgreSQL connection
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

// PostgreSQL connection pool
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

// User model
class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

// Export the User model
module.exports = User;