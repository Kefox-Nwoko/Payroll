const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const employeeRouter = require('./routes/employees');

const app = express();
const port = process.env.PORT || 3000; 

// Connect to your database
mongoose.connect('mongodb://localhost/payroll-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

app.use(cors()); // Enable CORS for development
app.use(express.json()); // Allow the backend to understand JSON data
app.use('/employees', employeeRouter); 

app.get('/', (req, res) => {
  res.send('Hello from payroll-backend!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 