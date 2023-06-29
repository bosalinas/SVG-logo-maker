const Circle = require('../lib/circle');

describe('shapes', () => {
  describe('color', () => {
    it('should return circle', () => {
      const shape = new Circle("blue", "orange", "ABC", "circle");
      expect(shape.circle).toBe("circle");
    });
  });
});
