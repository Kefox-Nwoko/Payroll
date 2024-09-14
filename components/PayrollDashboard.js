// components/PayrollDashboard.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material/Grid';
import PayrollCalculator from './PayrollCalculator';

const PayrollDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Payroll Calculator
            </Typography>
            <PayrollCalculator />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Employee Table
            </Typography>
            {/* Add EmployeeTable component here */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Navbar
            </Typography>
            {/* Add Navbar component here */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PayrollDashboard;