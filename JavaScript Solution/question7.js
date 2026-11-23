

const TRANSACTION_FEE = 25;

const validateWithdrawal = (amount, balance) => {
  if (amount <= 0) {
    return { isValid: false, message: "Withdrawal amount must be greater than zero." };
  }
  if (amount % 500 !== 0) {
    return { isValid: false, message: "Withdrawal amount must be a multiple of 500." };
  }
  if (amount + TRANSACTION_FEE > balance) {
    return { isValid: false, message: "Insufficient balance for withdrawal and transaction fee." };
  }
  return { isValid: true, message: "Withdrawal Successful!" };
};

const withdrawMoney = (amount, balance, callback) => {
  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);
  console.log();

  const validation = callback(amount, balance);

  if (validation.isValid) {
    const remainingBalance = balance - amount - TRANSACTION_FEE;
    console.log(validation.message);
    console.log(`Transaction Fee: Rs. ${TRANSACTION_FEE}`);
    console.log(`Remaining Balance: Rs. ${remainingBalance}`);
  } else {
    console.log(`Transaction Failed: ${validation.message}`);
    console.log(`Remaining Balance: Rs. ${balance}`);
  }
};


withdrawMoney(3000, 10000, validateWithdrawal);
