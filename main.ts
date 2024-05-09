#! /usr/bin/env node

//We import chalk because we want to made a terminal excited.
import chalk from "chalk";

let engMarks : number = 80;
let physicsMarks : number = 75;
let chemistryMarks: number = 82;
let mathMarks : number = 79;
let urduMarks : number = 83;
let totalMarks : number = 500;

let obtainMarks : number = engMarks + physicsMarks + chemistryMarks + mathMarks + urduMarks 
let percentage : number = (obtainMarks / totalMarks)*100;

console.log(chalk.green("English :" , engMarks));
console.log(chalk.yellow("Phsics  :" , physicsMarks));
console.log(chalk.blue("Chemistry :" , chemistryMarks));
console.log(chalk.red("Math    :" , mathMarks));
console.log(chalk.cyan("Urdu    :" , urduMarks));
console.log(chalk.magenta("Total Marks: ", totalMarks));
console.log(chalk.greenBright("Obtain Marks:" , obtainMarks));
console.log(chalk.red("Percentage : " , percentage.toFixed(2) + "%"));

if (percentage >= 80){
    console.log(chalk.yellow("Grade A+"));
}else if(percentage >= 70){
    console.log(chalk.greenBright("Grade A"));
}else if (percentage >= 60){
    console.log(chalk.redBright("Grade B"));
}else if(percentage >= 50){
    console.log(chalk.cyan("Grade C"));
}else{
    console.log(chalk.red("You are Fail"));
};
