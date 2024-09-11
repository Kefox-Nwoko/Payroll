import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const PayrollDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Payroll Overview</Typography>
            <Typography variant="body1">Total Employees: 10</Typography>
            <Typography variant="body1">Total Salary: $100,000</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PayrollDashboard;