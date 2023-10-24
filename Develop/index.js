// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = []; {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username?',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Enter your Github Username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else{
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else{
                    console.log('Please enter the title of your project');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'decription',
            message: 'Write a short description of your project',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;

                } else{
                    console.log('Please provide a short description of your project');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license does your project have?',
            choises: ['MIT', 'GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3','Apache 2.0', 'Mozilla 2.0', 'Boost Software', 'Unlicense', 'None'],
            default: ['MIT']

        },
        {
            type: 'input',
            name: 'install',
            message: 'If applicable, list the steps required to install your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a short description on how to use the app',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What commands should be run to execute tests?'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Provide quidelines for users about contributing to the repo'
        }
    ]);
};







// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
