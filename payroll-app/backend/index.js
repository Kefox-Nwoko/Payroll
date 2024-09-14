const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Add environment variables for PostgreSQL connection
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

// Connect to your PostgreSQL database
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

app.use(cors()); // Enable CORS for development
app.use(express.json()); // Allow the backend to understand JSON data

app.get('/', (req, res) => {
  res.send('Hello from payroll-backend!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});