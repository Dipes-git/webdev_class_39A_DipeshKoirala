
const calculateDelivery = (distance) => {
  if (distance <= 2) {
    return 30;
  }
  return 30 + ((distance - 2) * 15);
};

const checkFreeDelivery = (orderAmount) => {
  return orderAmount >= 1000;
};

const getFinalDeliveryCharge = (distance, orderAmount) => {
  if (checkFreeDelivery(orderAmount)) {
    return 0;
  }
  return calculateDelivery(distance);
};


const processOrder = (customer, distance, orderAmount, callback) => {
  const deliveryCharge = callback(distance, orderAmount);

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
};


processOrder("Shyam", 5, 800, getFinalDeliveryCharge);
