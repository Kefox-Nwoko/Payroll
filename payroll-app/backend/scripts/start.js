const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const authRoutes = require('./routes/auth');
const employeesRoutes = require('./routes/employees');
const payrollRoutes = require('./routes/payroll');
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Set up the PostgreSQL connection pool
const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const pool = new Pool(dbConfig);

// Define routes
app.use('/auth', authRoutes);
app.use('/employees', employeesRoutes);
app.use('/payroll', payrollRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});