const { Pool } = require('pg');
const User = require('../models/user.model');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function createUser(user) {
  // ...
}

async function getUser(id) {
  // ...
}

async function updateUser(id, user) {
  // ...
}

async function deleteUser(id) {
  // ...
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};