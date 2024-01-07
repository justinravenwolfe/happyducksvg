//parent class <- Shape
//instances of a class <- object
// Class <- blueprint for a car
// object <- actually car created from that class
class shape
{
  //constructor
  // This <- refers to the currect object
  constructor( textcolor, shapecolor, text)
  {
    this.textcolor = textcolor;
    this.shapecolor= shapecolor
    this.text = text;
  }
  
  getTextElement
  var text_string = '<text x = '10' y= '20' fill ="${this.color}>&{this.text} </text>'
  return text_string;
}
// cirlce
class Circle extends Shape 
{
  constructor(textcolor, text, radius, shapecolor)
  
  //have shape handle some variables 
  super(textcolor,shapecolor,text);
  // Have our Circle Class handle the others
  this.radius=radius


  draw(){
    //cx<- cirlce x-cor, circle y-cor,
    var circle_string=
  }
}

export {cirlce};
//square
class Square extends shape

constructor(textColor, shapeColor, text, sideLength)
{
  
}
draw(){
    Var square_string = `<svq xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect x = "${150-this.sidLength /2 }" y = "${100-this.sideLength/2}"width = "${this.sideLength}
}