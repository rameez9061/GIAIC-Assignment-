

let product = (number1: number, number2: number) => {
    return (Math.round(number1 * number2 * 100) / 100);
}

console.log(product(0.4, 0.6));
