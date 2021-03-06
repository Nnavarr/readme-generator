// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [

    // project title
    {
        type: 'input',
        name: 'title',
        message: "What is the project's name?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the projects name')
                return false;
            }
        }
    },

    // project description
    {
        type: 'input',
        name: 'description',
        message: "What is the project's description?"
    },

    // project installation
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are involved in installing the project?'
    },

    // projects usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use'
    },

    // project license
    // TODO: Create a badge for the license selected
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for the project',
        choices: ['Apache', 'ISC', 'MIT']
    },

    // project contributing guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'Any guidelines for contributors?'
    },

    // project test instructions
    {
        type: 'input',
        name: 'tests',
        message: 'What kind of tests does this project need?'
    },

    // github name
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },

    // developer email
    {
        type: 'input',
        name: 'email',
        mesage: 'What is your email address?'
    }
]

// Function to write README file
function writeToFile(fileName, data) {
    // return a promise and write file
    return new Promise((resolve, reject) =>{
        fs.writeFile(`./Generated-${fileName}.md`, generateMarkdown(data), err =>{
            // if error, reject promise and let the user know
            if(err){
                reject(err);
                return;
            }
            // if no error, resolve and create file
            resolve({
                ok: true,
                message: `${fileName} file created!`
            });
        });
    });
}

// Function to initialize app
function init() {
    let responseArray = [];
    return inquirer.prompt([
        // title
        questions[0],
        // description
        questions[1],
        // installation
        questions[2],
        // usage
        questions[3],
        // license
        questions[4],
        // guidelines
        questions[5],
        // tests
        questions[6],
        // github account
        questions[7],
        // email
        questions[8]
    ])
    .then(responses => {
        responseArray.push(responses);
        return responseArray;
    });
}

// Function call to initialize app
init()
    .then(results => {
        // do something with the inquirer responses. This is what gets paassed into our final write file function
        writeToFile('README', results);
    })
