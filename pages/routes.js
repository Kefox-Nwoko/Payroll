// routes.js
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import EmployeesPage from './EmployeesPage';
import PayrollPage from './PayrollPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/employees" component={EmployeesPage} />
        <Route path="/payroll" component={PayrollPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;