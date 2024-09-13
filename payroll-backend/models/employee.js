// employee.js
// Example employee object
const employee = {
    firstName: "John",
    lastName: "Doe",
    hourlyRate: 15,
    // Optional fields - can be set during employee updates
    hoursWorked: 40,
    daysWorked: 5, // This should be a multiple of days in a week
    weeksWorked: 2, // This should be a multiple of weeks in a month
    monthsWorked: 1, // This should be a multiple of months in a year
  };
  
  // Function to calculate salary
  function calculateSalary(employee) {
    // Define base salary
    let baseSalary = 0;
    // Calculate salary based on different timeframes
    if (employee.hoursWorked) {
      baseSalary = employee.hourlyRate * employee.hoursWorked;
    } else if (employee.daysWorked) {
      baseSalary = employee.hourlyRate * employee.daysWorked * 8; // Assuming 8 hours per day
    } else if (employee.weeksWorked) {
      baseSalary = employee.hourlyRate * employee.weeksWorked * 40; // Assuming 40 hours per week
    } else if (employee.monthsWorked) {
      baseSalary = employee.hourlyRate * employee.monthsWorked * 160; // Assuming 160 hours per month
    }
  
    // Calculate overtime hours
    const overtimeHours = 
      employee.hoursWorked > 40 
        ? employee.hoursWorked - 40 
        : 0; 
    const overtimeRate = employee.hourlyRate * 1.5; // Assuming 1.5 times the hourly rate for overtime
    const overtimePay = overtimeHours * overtimeRate;
  
    // Calculate total salary
    let totalSalary = baseSalary + overtimePay;
  
    // Apply deductions for taxes and benefits (assuming you have these details)
    // const taxDeduction = calculateTax(totalSalary); // Placeholder for tax calculation
    // const benefitDeduction = calculateBenefits(totalSalary); // Placeholder for benefit calculation
    // totalSalary -= taxDeduction + benefitDeduction;
  
    // Return total salary
    return totalSalary;
  }
  
  // Calculate leave allowances and other adjustments
  function calculateLeaveAndAdjustments(employee) {
    let leaveAllowance = 0;
    // Calculate leave allowance based on employee's leave policy (not included in the example)
    // For instance, if the employee has a certain number of sick leave days per year, you can calculate the leave allowance for the period worked
    // leaveAllowance = calculateLeaveAllowance(employee);
  
    // Calculate other adjustments (e.g., bonuses, deductions)
    // let otherAdjustments = calculateOtherAdjustments(employee);
  
    // Return leave allowance and other adjustments
    return leaveAllowance; //+ otherAdjustments;
  }
  
  // Export the employee object and functions
  module.exports = { employee, calculateSalary, calculateLeaveAndAdjustments };