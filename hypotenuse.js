const sides = document.querySelectorAll('.input-text');
const hypotenuseBtn = document.querySelector('#btn');
const outputEl = document.querySelector('#output');

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
     const sum = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
     const lenOfHypotenuse = Math.sqrt(sum);
     outputEl.innerText = "The lenght of hypotenuse is "+ lenOfHypotenuse;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);
