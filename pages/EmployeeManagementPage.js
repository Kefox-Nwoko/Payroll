import React, { useState } from 'react';
import { Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PayrollCalculator from '../components/PayrollCalculator';

const EmployeeManagementPage = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({});
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleAddEmployee = () => {
    // placeholder add employee logic
    console.log('Employee added!');
  };

  const handleEditEmployee = () => {
    // placeholder edit employee logic
    console.log('Employee edited!');
  };

  const handleDeleteEmployee = () => {
    // placeholder delete employee logic
    console.log('Employee deleted!');
  };

  const handleCalculatePayroll = (employeeId) => {
    // Call the PayrollCalculator component to calculate payroll
    setSelectedEmployee(employeeId);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Payroll</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>{employee.salary}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={handleEditEmployee}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleDeleteEmployee}>
                      Delete
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => handleCalculatePayroll(employee.id)}>
                      Calculate Payroll
                    </Button>
                  </TableCell>
                  <TableCell>
                    {selectedEmployee === employee.id && (
                      <PayrollCalculator employeeId={employee.id} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Role" value={newEmployee.role} onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Salary" value={newEmployee.salary} onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })} />
      </Grid>
    </Grid>
  );
};

export default EmployeeManagementPage;