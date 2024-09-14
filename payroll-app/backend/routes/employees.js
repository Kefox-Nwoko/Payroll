const express = require('express');
const router = express.Router();
const { Employee } = require('./models/employee');

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single employee
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Cannot find employee' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new employee
router.post('/', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update an existing employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.update(req.body, { where: { id: req.params.id } });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an employee
router.delete('/:id', async (req, res) => {
  try {
    await Employee.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;