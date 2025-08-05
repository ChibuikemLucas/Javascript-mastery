let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

/* STRING AND TEMPLATE LITERALS
const firstName2 = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2023;

const jonas = "I'm " + firstName2 + ", a " + (year - birthYear) + " years old " + job + "!";
const jonasNew = `I'm ${firstName2}, a ${year - birthYear} years old ${job}!`;

//console.log(jonas);
//console.log(jonasNew);

// To create a multiline string
//Without template literals
console.log('String with \n\ multiple \n\ lines');
//With template literals
console.log(`String with
multiple
lines`); 

 IF / ELSE STATEMENTS
const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log("Sarah can start driving license 🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// TYPE CONVERSION AND COERCION
const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

//CHALLENGE 1
// 1) Store Mark's and John's mass and height in variables
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// 2) Calculate both their BMIs using the formula: BMI = mass / height ** 2
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);

// 3) Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);