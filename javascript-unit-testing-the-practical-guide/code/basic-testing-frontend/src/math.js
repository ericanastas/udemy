export function add(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += +number;
    }
    return sum;
}

export function calcuateResult(numberValues) {

    try {
        const numbers = [];

        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }


}
