// call to fs and Inquirier
const generateMarkdown = require('./GenerateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    }, 
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },  
]);
console.log(title);
console.log(description);
console.log(installation);
console.log(usage);
console.log(contribution);
console.log(test);
console.log(license);
// Function call to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Successfully generated README.md');
          }
        });
      });
  }
  
init();


