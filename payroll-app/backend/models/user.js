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

// Create User
async function createUser(user) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
      [user.username, user.password, user.role]
    );
    return rows[0];
  } finally {
    client.release();
  }
}

// Read User
async function getUser(id) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows[0];
  } finally {
    client.release();
  }
}

// Update User
async function updateUser(id, user) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      'UPDATE users SET username = $1, password = $2, role = $3 WHERE id = $4 RETURNING *',
      [user.username, user.password, user.role, id]
    );
    return rows[0];
  } finally {
    client.release();
  }
}

// Delete User
async function deleteUser(id) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  } finally {
    client.release();
  }
}

// Export the User model and CRUD operations
module.exports = {
  User,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};