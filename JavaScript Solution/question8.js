
const MENU = {
  Burger: 250,
  Pizza: 500,
  Momo: 150,
  Chowmein: 180,
};


const getFoodPrice = (foodName) => {
  return MENU[foodName] ?? 0;
};


const calculateServiceCharge = (total) => {
  return total * 0.05;
};


const calculateOrder = (foodName, quantity, callback) => {
  const unitPrice = callback(foodName);
  return unitPrice * quantity;
};


const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = callback(foodName, quantity, getFoodPrice);

  if (foodAmount === 0) {
    console.log(`Error: Item "${foodName}" is not available on the menu.`);
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};


generateReceipt("Suman", "Burger", 2, calculateOrder);
