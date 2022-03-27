// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  // Name
  {
    type: "input",
    name: "title",
    massage: "What is the title of the project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the project title!");
        return false;
      }
    },
  },
  // Description
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a project description!");
        return false;
      }
    },
  },
  // Installation
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  // Usage
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide usage information!");
        return false;
      }
    },
  },
  // How To Contribute
  {
    type: "input",
    name: "contribution",
    message: "Provide guidelines for how to contribute to the project:",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please provide guidelines for contributing!");
        return false;
      }
    },
  },
  // Tests
  {
    type: "input",
    name: "tests",
    message: "Provide instructionson how to test this project:",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please provide test instructions!");
        return false;
      }
    },
  },
  // License
  {
    type: "list",
    name: "license",
    message: "Select the license for your project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
      "No license",
    ],
  },
  // Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Enter your email address (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
