const Shape = require("./shape");

class Square extends Shape {
    constructor(shapeColor, textColor, text, square) {
        super(shapeColor, textColor, text);
        this.square = square
    }
    render() { 
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="120" fill="${this.textColor}" font-size="60" text-anchor="middle" >${this.text}</text>
      </svg>`
}
}

module.exports = Square;