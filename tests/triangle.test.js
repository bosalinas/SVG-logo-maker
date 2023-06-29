const Triangle = require('../lib/triangle');

describe('shapes', () => {
  describe('color', () => {
    it('should return triangle', () => {
      const shape = new Triangle("blue", "orange", "ABC", "triangle");
      expect(shape.triangle).toBe("triangle");
    });
  });
});
