import { extractEnteredNumberValues } from './src/parser.js';
import {
    validateStringNotEmpty,
    validateNumber,
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
    event.preventDefault();

    const numberValues = extractEnteredNumberValues(form);


    let result = '';


    let resultText = '';

    if (result === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
        resultText = 'Result: ' + result;
    }

    output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
