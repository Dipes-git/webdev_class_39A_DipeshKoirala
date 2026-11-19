let purchaseAmount = 120;
let finalPrice;

if (purchaseAmount >= 100) {
    finalPrice = purchaseAmount - (purchaseAmount * 0.20);
} else if (purchaseAmount >= 50) {
    finalPrice = purchaseAmount - (purchaseAmount * 0.10);
} else {
    finalPrice = purchaseAmount;
}

console.log(finalPrice);
