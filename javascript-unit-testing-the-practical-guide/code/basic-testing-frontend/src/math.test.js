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