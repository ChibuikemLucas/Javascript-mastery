
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