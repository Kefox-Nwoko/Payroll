const express = require('express'); // Import the Express library
const router = express.Router();  // Create a new router object
const Employee = require('../models/Employee'); //  Import your Employee model

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees from your database
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
});

// GET a single employee
router.get('/:id', getEmployee, (req, res) => {
  res.json(req.employee); // Send the employee object
});

// POST create a new employee
router.post('/', async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    // ... other employee properties
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee); // Send the new employee object
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update an existing employee
router.put('/:id', getEmployee, async (req, res) => {
  if (req.body.name != null) {
    req.employee.name = req.body.name;
  }
  // ... Update other properties
  try {
    const updatedEmployee = await req.employee.save();
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an employee
router.delete('/:id', getEmployee, async (req, res) => {
  try {
    await req.employee.remove();
    res.json({ message: 'Employee deleted' }); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to find an employee by ID
async function getEmployee(req, res, next) {
  let employee;
  try {
    employee = await Employee.findById(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: 'Cannot find employee' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  req.employee = employee;
  next();
}

module.exports = router;