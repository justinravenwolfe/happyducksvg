//Parent class <- Shape 
//Instances of a class <- object 
//Class<- blueprint for a car
//Object <- actualy car created from that class
//Attributes <- # of wheels, size of fuel tank
//Behavior <- Drive, stop <-functions of a car 
class Shape 
{
    //constructor 
    //This<- refers to the current object 
    constructor(textColor,shapeColor, text)
    {
        this.textColor = textColor;
        this.shapeColor = shapeColor; 
        this.text = text; 
    }
    //XML<- computer graphics <- HTML<-  hypertext markup language, markup language 
    //Not an overrided method 
    getTextElement(){
        //XML String to output the text element <- canvas 
        var text_string = `<text x="120" font-size = "30" y="110" fill="${this.textColor}">${this.text}</text>`;
        return text_string; 
    }

}

//Circle
class Circle extends Shape
{
    constructor(textColor, shapeColor, text, radius)
    {
        //Have shape handle some variables
        super(textColor, shapeColor, text); 
        //Have our Circle class handle the others
        this.radius = radius; 
    }
    //overidded <- a method that is redefined across classes
    draw(){
        //cx<- circle x-cor, circle y-cor,
        //Use backticks ``
        var circle_string = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}"/>
        ${this.getTextElement()}</svg>`;
        return circle_string; 
    }

}
export { Circle };

//Square
class Square extends Shape
{
    constructor(textColor,shapeColor, text, sideLength)
    {
        super(textColor, shapeColor, text);  
        //this keyword <- current object 
        //Set dimension of the square
        this.sideLength = sideLength; 
    }
    getTextElement(){
        //XML String to output the text element <- canvas 
        var text_string = `<text x="10" font-size = "30" y="50" fill="${this.textColor}">${this.text}</text>`;
        return text_string; 
    }
    draw(){
        //XML string for the square drawing
        //`<- backtick used for XML format strings
        var square_string = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect height = "${this.sideLength}" width = "${this.sideLength}" fill = "${this.shapeColor}" />
        ${this.getTextElement()}</svg>`;
        //Send the string back to the user so it can be saved to logo.svg 
        return square_string; 

    }

}
//Makes sure outside files can access this <- app.mjs 
export { Square };

//Triangle 
class Triangle extends Shape{
    constructor(textColor,shapeColor, text, sideLength)
    {
        super(textColor, shapeColor, text);  
        //this keyword <- current object 
        //Set dimension of the square
        this.sideLength = sideLength; 
    }
    getTextElement(){
        //XML String to output the text element <- canvas 
        var text_string = `<text x="10" font-size = "30" y="80" fill="${this.textColor}">${this.text}</text>`;
        return text_string; 
    }
    draw (){
        const triangle_string = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points = "50,10,90,90 10,90" fill = "${this.shapeColor}"/>
        ${this.getTextElement()}</svg>`;
        return triangle_string; 
    }
}
export { Triangle };

