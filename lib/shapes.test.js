import {Circle, Triangle, Square} from shapes.js; 
//Circle Test
describe('Circle class', () =>{
    test("ensure draw method for circle class is functioning properly", () =>{
        const circle = new Circle('blue', 'green','GO',50);
        const svg = circle.draw(); 
        expect(svg).toContain(`<svg width="600" height="600"><svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="green"/>
        <text x="120" font-size = "30" y="110" fill="blue">GO</text></svg></svg>`); 
    }); 
}); 



//Triangle Test
describe('triangle Class', () =>{
    test("ensure draw method for triangle class is functioning properly", () =>{
        const triangle = new Triangle('orange', 'red','abc',50);
        const svg = triangle.draw(); 
        expect(svg).toContain(`<svg width="600" height="600"><svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points = "50,10,90,90 10,90" fill = "red"/>
        <text x="10" font-size = "30" y="80" fill="orange">abc</text></svg></svg>`); 
    }); 
}); 

//Square Test
//RGB 
//#FF0000
describe('Square class', () =>{
    test("ensure draw method for square class is functioning properly", () =>{
        const sqaure = new Square('#FF0000', 'green','def',50);
        const svg = square.draw(); 
        expect(svg).toContain(`<svg width="600" height="600"><svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect height = "100" width = "100" fill = "green" />
        <text x="10" font-size = "30" y="50" fill="#FF0000">def</text></svg></svg>`); 
    }); 
}); 