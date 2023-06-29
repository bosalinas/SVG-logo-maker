const fs = require('fs');
const inquirer = require('inquirer');
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");
const Circle = require("./lib/circle");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'letters',
            message: 'Type up to 3 letters for your logo text.',
            maxLength: 3,
        },
        {
            type: 'input',
            name: 'color',
            message: 'Type in the name or hexadecimal number for the color of your shape',
        },
        {
            type: 'input',
            name: 'text_color',
            message: 'Type in the name or hexadecimal number for the color of your text',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Chose a shape for your logo.',
            choices: ["circle", "square", "triangle"],
        },
    
    ])
//get all the answers and then use them to fill in the readme
    .then((answers) => { 
        let shape;
        if (answers.shape == "circle") {
            shape = new Circle(answers.color, answers.text_color, answers.letters)
        } else if (answers.shape == "square") {
            shape = new Square(answers.color, answers.text_color, answers.letters)
        } else if (answers.shape == "triangle") {
            shape = new Triangle(answers.color, answers.text_color, answers.letters)
        }
        fs.writeFile(`./dist/logo.svg`, shape.render(), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
    );
});