#!/usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk"

console.log(chalk.blueBright.bold(`Wellcome to "Code with KULSUM" - Word Counter`));


let answers:{
    sentence:string
}= await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"Enter your Sentence to Count the Words:"
},
])

const words= answers.sentence.trim().split(" ")

//print the words of array

console.log(words);

console.log(chalk.redBright(`Your Sentence Words Count is ${words.length}`));

