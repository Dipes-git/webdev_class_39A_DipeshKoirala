let age = 25;
let category;

if (age < 13) {
    category = "Child";
} else if (age >= 13 && age <= 19) {
    category = "Teenager";
} else if (age >= 20 && age <= 59) {
    category = "Adult";
} else {
    category = "Senior Citizen";
}

console.log(category);
