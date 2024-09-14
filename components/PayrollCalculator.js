import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PayrollCalculator = ({ employeeId }) => {
  const [payrollData, setPayrollData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayrollData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/payroll/${employeeId}`);
        setPayrollData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPayrollData();
  }, [employeeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Payroll Calculation for Employee {employeeId}</h2>
      <p>Net Salary: {payrollData.netSalary}</p>
      <p>Tax: {payrollData.tax}</p>
      <p>Total Salary: {payrollData.totalSalary}</p>
    </div>
  );
};

export default PayrollCalculator;