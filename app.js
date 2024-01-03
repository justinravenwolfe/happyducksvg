// Adding dependencies for project
const inquier = require('inquirer'); 
const fs = require('filestream');
// Go into the file shapes in the library folder and import its definitions for triangle,square an cirlce
const {circle,Triangle, Square} = requirel('./lib.shapes');

//Function to take input from the user
// [{ variable: type, message: text}. {} ]
// [{name: 'shape', message: "Please enter the shape you want for the logo"}]
async function getUserInput(
{
  const userInput = await inquier.createPromptModule()
      {name: 'text', message: "Please enter up to three characters"},
      {name: 'textColor', message: "Please say what color the text should be"},
      {name: 'shape', message: 'Choose a shape', type: 'list', choices: ['Cirlce','Triangle', Square']}
      {name: 'shapeColor', message: 'What color do you want your shape to be'}
]);
return userInput;

async function run(){
  // this will store a j son of the answer of the user
const userInput = await getUserInput():
// print out the input in the terminal
console.log(userInput);
)