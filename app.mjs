// Adding dependencies for the project
//ES libraries use import instead of require
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import {Circle, Square, Triangle} from './lib/shapes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//Adding in the name of the current file
const __filename = fileURLToPath(import.meta.url);
//Adding in the name of the current directory we're in <- in this case SVG logo
const __dirname = dirname(__filename); //directory = folder 
//desktop/myhomework.word<- relative linking <- has an address <- path
// Function to take input from the user
function generateSVG(userInput) {
    let shape;
    //Switch case <- if statement
    //if statement <- age, ranges 
    //Switch case <- Heads or Tails 
    switch (userInput.shape) {
      case 'Circle':
        //    constructor(textColor, shapeColor, text, radius)
        shape = new Circle(userInput.textColor, userInput.shapeColor,userInput.text,50);
        break;
      case 'Triangle':
        shape = new Triangle(userInput.textColor, userInput.shapeColor,userInput.text,50); 
        break;
      case 'Square':
        shape = new Square(userInput.textColor, userInput.shapeColor,userInput.text,100); 
        break;
      default:
        console.error('Invalid shape selected');
        return;
    }
  //Creating the path 
  //Selecting the logo file
    const filePath = path.join(__dirname, 'examples', 'logo.svg');
//SVG <- image type png jpeg
//XML <- Extensible markup language <- HTML 
    const svgContent = `<svg width="600" height="600">${shape.draw()}</svg>`;

  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated ${filePath}`);
  }

async function getUserInput() {
    const userInput = await inquirer.prompt([
        { name: 'text', message: 'Please enter up to three characters' },
        { name: 'textColor', message: 'Please say what color the text should be' },
        { name: 'shape', message: 'Choose a shape', type: 'list', choices: ['Circle', 'Triangle', 'Square'] },
        { name: 'shapeColor', message: 'What color do you want your shape to be' }
    ]);
    return userInput;
}

// Function to generate the SVG module
// Function to run all the code
async function run() {
    // This will store a JSON of the answers of the user
    const userInput = await getUserInput();
    // Print out the input in the terminal
    generateSVG(userInput); 
    // Generate the SVG module based on user input
}
// Call to the running function to start the session
run();
