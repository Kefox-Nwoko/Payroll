// payroll-app/src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // assuming payroll.js server is running on port 3001
});

export const calculatePayroll = (employeeId) => api.get(`/payroll/${employeeId}`);
export const getPayrollHistory = () => api.get('/payroll-history');