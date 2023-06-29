const Shape = require("./shape");

class Triangle extends Shape {
    constructor(shapeColor, textColor, text, triangle) {
        super(shapeColor, textColor, text);
        this.triangle = triangle
    }
    render() { 
        return  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 0 244, 150 56, 150" fill="${this.shapeColor}" />
        <text x="150" y="120" fill="${this.textColor}" font-size="60" text-anchor="middle" >${this.text}</text>
        </svg>`
    }
}

module.exports = Triangle;