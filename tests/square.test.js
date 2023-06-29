const Square = require('../lib/square');

describe('shapes', () => {
  describe('color', () => {
    it('should return square', () => {
      const shape = new Square("blue", "orange", "ABC", "square");
      expect(shape.square).toBe("square");
    });
  });
});
