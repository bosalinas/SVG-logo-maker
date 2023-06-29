const Shape = require('../lib/shape.js');

describe('shapes', () => {
  describe('color', () => {
    it('should return matching color', () => {
      const shape = new Shape("blue", "orange", "ABC");
      expect(shape.shapeColor).toBe("blue");
    });
  });
});
