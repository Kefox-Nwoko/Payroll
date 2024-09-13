const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const employeesRoutes = require('./routes/employees');
const payrollRoutes = require('./routes/payroll');
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/payroll') // Replace with your MongoDB connection string
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define routes
app.use('/auth', authRoutes);
app.use('/employees', employeesRoutes);
app.use('/payroll', payrollRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});