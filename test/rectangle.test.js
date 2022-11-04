import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from '../js/rectangle';

test('should get a proper rectangle perimeter', () => {
    const rectanglePerimeter = getRectanglePerimeter(2, 2);
    expect(rectanglePerimeter).toBe(8);
});

test('should get a proper rectangle area', () => {
    const rectangleArea = getRectangleArea(2, 2);
    expect(rectangleArea).toBe(4);
});

it('should get a proper info about the rectangle', () => {
    const getInfo = jest.spyOn(console, 'log');
    getRectangleInfo(4, 4);
    expect(getInfo).toHaveBeenCalledWith('The perimeter of a rectangle is 16 and the area is 16');
});