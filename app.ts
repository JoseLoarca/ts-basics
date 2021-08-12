const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

type NumOrString = number | string;

function add(number1: NumOrString, number2: NumOrString) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        return number1 + number2;
    } else if (typeof number1 === 'string' && typeof number2 === 'string') {
        return number1 + ' ' + number2;
    }

    return +number1 + +number2;
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;

    const result = add(+num1, +num2);
    console.log(result);
});
