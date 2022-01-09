// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [

    // project title
    {
        type: 'input',
        name: 'Title',
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
        name: 'Description',
        message: "What is the project's description?"
    },

    // project installation
    {
        type: 'input',
        name: 'Installation',
        message: 'What steps are involved in installing the project?'
    },

    // projects usage
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions and examples for use'
    },

    // project license
    // TODO: Create a badge for the license selected
    {
        type: 'list',
        name: 'License',
        message: 'Please select a license for the project',
        choices: ['license1', 'license2']
    },

    // project contributing guidelines
    {
        type: 'input',
        name: 'Contributing',
        message: 'Any guidelines for contributors?'
    },

    // github name
    {
        type: 'input',
        name: 'QuestionsGithub',
        message: 'What is your github username?'
    },

    // developer email
    {
        type: 'input',
        name: 'QuestionsEmail',
        mesage: 'What is your email address?'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // return a promise and write file
    return new Promise((resolve, reject) =>{
        fs.writeFile(`./dist/${fileName}`, JSON.stringify(data), err =>{
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

// TODO: Create a function to initialize app
function init() {
    console.log('init started');
    let responseArray = [];
    return inquirer.prompt([
        questions[0],
        questions[1],
        questions[2],
        questions[3],
        questions[4],
        questions[5],
        questions[6],
        questions[7]
    ])
    .then(responses => {
        responseArray.push(responses);
        return responseArray;
    });
}

// Function call to initialize app
init()
    .then(results => {
        writeToFile('test', results);
    })
