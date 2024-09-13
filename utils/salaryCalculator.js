// salaryCalculator.js
function calculateSalary(grossSalary) {
    // Taxable income
    const taxableIncome = grossSalary - (grossSalary * 0.025); // NHF Deduction
  
    // Pension
    const pension = grossSalary * 0.08;
  
    // Calculate PAYE based on tax bands
    let tax = 0;
    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 600000) {
      tax = (taxableIncome - 300000) * 0.07;
    } else if (taxableIncome <= 1200000) {
      tax = ((taxableIncome - 600000) * 0.11) + 21000; // Tax for the first band
    } else if (taxableIncome <= 3600000) {
      tax = ((taxableIncome - 1200000) * 0.15) + 99000; // Tax for previous bands
    } else if (taxableIncome <= 7200000) {
      tax = ((taxableIncome - 3600000) * 0.19) + 459000; // Tax for previous bands
    } else if (taxableIncome <= 15000000) {
      tax = ((taxableIncome - 7200000) * 0.21) + 1137000; // Tax for previous bands
    } else {
      tax = ((taxableIncome - 15000000) * 0.24) + 2493000; // Tax for previous bands
    }
  
    // Net Salary
    const netSalary = grossSalary - tax - pension - (grossSalary * 0.025);
  
    return {
      grossSalary,
      tax,
      pension,
      netSalary
    };
  }
  
  // Export the calculateSalary function
  module.exports = { calculateSalary };
  