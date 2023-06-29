const Shape = require("./shape");

class Circle extends Shape {
    constructor(shapeColor, textColor, text, circle) {
        super(shapeColor, textColor, text);
        this.circle = circle
    }
    render() { 
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle fill="${this.shapeColor}" cx="50" cy="50" r="50" /> 
        <text fill="${this.textColor}" x="32" y="55">${this.text}</text>
      </svg>`
    }

}

module.exports = Circle;