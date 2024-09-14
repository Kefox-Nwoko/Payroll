import React from 'react';
import { Grid, TextField, Button } from '@mui/material/Grid';

const SalaryCalculator = () => {
  const [salary, setSalary] = React.useState(0);
  const [role, setRole] = React.useState('');
  const [bonus, setBonus] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [calculatedSalary, setCalculatedSalary] = React.useState(0);

  const calculateSalary = () => {
    const calculatedSalary = salary + bonus - tax;
    setCalculatedSalary(calculatedSalary);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Bonus" value={bonus} onChange={(e) => setBonus(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Tax" value={tax} onChange={(e) => setTax(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={calculateSalary}>
          Calculate Salary
        </Button>
      </Grid>
      <Grid item xs={12}>
        <h2>Calculated Salary: {calculatedSalary}</h2>
      </Grid>
    </Grid>
  );
};

export default SalaryCalculator;