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
    message: "What is the name of your application?",
    name: "appName",
  },
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

  {
    type: "input",
    message: "Please write a short description of your project?",
    name: "appDescription",
  },

  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["Apache 2.0", "MIT", "GPL 3.0", "BSD 3", "NONE"],
  },

  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "commandDep",
    default: "npm i",
  },

  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "commandTest",
    default: "npm test",
  },

  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repoInfo",
  },

  {
    type: "input",
    message: "What does the user need to know about conributing to the repo?",
    name: "repoUsage",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  // ask the user questions
  inquirer
    .prompt(questions)
    .then((data) => {
      // answers
      console.log(data);
      const markdown = generateMarkdown(data);
      console.log("README.md file created successully!");
      return writeToFile("README.md", markdown);
    })
    .catch((error) => {
      console.log("Error:", error);
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
// writeToFile();
// console.log("Hello world");
// var result = init();
