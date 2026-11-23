
const calculateBonus = (salary) => {
  if (salary >= 40000) {
    return salary * 0.10; // 10% bonus
  } else {
    return salary * 0.05; // 5% bonus
  }
};


const calculateTax = (salary) => {
  return salary * 0.05;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  const netSalary = salary + bonus - tax;
  return { bonus, tax, netSalary };
};

const generatePayslip = (name, salary, callback) => {
  const { bonus, tax, netSalary } = callback(salary, calculateBonus, calculateTax);

  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${netSalary}`);
};


generatePayslip("Ram", 50000, calculateNetSalary);
