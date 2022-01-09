// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [

    // project title
    {
        'readmeSection': 'Title',
        'type': 'input',
        'name': 'Title',
        'message': "What is the project's name?"
    },

    // project description
    {
        'readmeSection': 'Description',
        'type': 'input',
        'name': 'Description',
        'message': "What is the project's description?"
    },

    // project installation
    {
        'readmeSection': 'Installation',
        'type': 'input',
        'name': 'Installation',
        'message': 'What steps are involved in installing the project?'
    },

    // projects usage
    {
        'readmeSection': 'Usage',
        'type': 'input',
        'name': 'Usage',
        'message': 'Please provide instructions and examples for use'
    },

    // project license
    // TODO: Create a badge for the license selected
    {
        'readmeSection': 'License',
        'type': 'list',
        'name': 'License',
        'message': 'Please select a license for the project',
        'licenseOptions': ['license1', 'license2']
    },

    // project contributing guidelines
    {
        'readmeSection': 'Contributing',
        'type': 'input',
        'name': 'Contributing',
        'message': 'Any guidelines for contributors?'
    },

    // github name
    {
        'readmeSection': 'QuestionsGithub',
        'type': 'input',
        'name': 'QuestionsGithub',
        'message': 'What is your github username?'
    },

    // developer email
    {
        'readmeSection': 'QuestionsEmail',
        'type': 'input',
        'name': 'QuestionsEmail',
        'mesage': 'What is your email address?'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // return a promise and write file
    return new Promise((resolve, reject) =>{
        fs.writeFile(`./dist/${fileName}`, data, err =>{
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
    // iterate through question objects

}

// Function call to initialize app
init();

/*
// test iteration through question object
Object.entries(questions).forEach((entry) =>{
    // array destructure of entry (question parameters)
    const [key, value] = entry;
    console.log(value['type']);
});
*/