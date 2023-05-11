import { it, expect } from 'vitest'
import { add } from './math.js'

it(`should summarize all number values in an array`, () => {

    //Arrange
    let numbers = [1, 2, 3];

    //Act
    let result = add(numbers);

    //Assert
    let expectedSum = numbers.reduce((prevVal, curVal) => prevVal + curVal, 0);
    expect(result).toBe(expectedSum);
});


it('should yield NaN if one invalid number is provided', () => {
    //Arrange
    let numbers = ['invalid', 1];

    //Act
    let result = add(numbers);

    //Assert
    expect(result).toBeNaN();
});


it('should yield a correct sum if an array of numeric string values is provided', () => {

    //Arrange
    let numbers = ["1", "2"];

    //Act
    let result = add(numbers);

    //Assert
    let expectedSum = numbers.reduce((prevVal, curVal) => +prevVal + +curVal, 0);
    expect(result).toBe(expectedSum);

})
