// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readmeText = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// to import we will use require key word  ex: const badmath = require('./generateMarkdown.js');
// > use your own word to name the variable (not matching the 'generateMarkdown')
// node index.js will be executed
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your gitHub repo username?",
    name: "github",
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);
  // create the readme
}

// TODO: Create a function to initialize app
function init() {
  // ask the user questions - array
  inquirer.prompt(questions).then((data) => {
    // answers
    console.log(data);
  });
  const markdown = generateMarkdown(data);
  writeToFile("README.md", markdown)
    // create content from the answers
    // call writeToFile
    .catch((error) => {
      console.log(error);
    });
  // store answers as one {}
  // create a content for the readme (function) generate markdown
  // > calling generate markdown function
  // > insert ojects of answers
  // invoke the writeToFile (which created the readme)
  //   console.log("Hello");
}

// Function call to initialize app
//
init();
writeToFile();
// console.log("Hello world");
// var result = init();
