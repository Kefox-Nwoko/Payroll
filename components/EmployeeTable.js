import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const EmployeeTable = () => {
  const employees = []; // placeholder data

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.role}</TableCell>
              <TableCell>{employee.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;