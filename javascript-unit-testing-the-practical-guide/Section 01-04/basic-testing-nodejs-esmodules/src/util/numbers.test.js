import { it, expect } from 'vitest'

import { transformToNumber } from './numbers';


it('should convert numbers', () => {

    //Arange
    //Act


    let result = transformToNumber("123");


    //Assert
    expect(result).toBeTypeOf('number');
    expect(result).toBe(123);

});

it('should return NaN if provided a on transformable value', () => {

    //Arange
    let input = "invalid";
    //Act

    let result = transformToNumber(input);

    //Assert
    expect(result).toBeNaN();

});

it('should return NaN if provided no arguments', () => {

    //Arange
    //Act


    let result = transformToNumber();


    //Assert
    expect(result).toBeNaN();


});