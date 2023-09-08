const sides = document.querySelectorAll('.side-input');
const areaBtn = document.querySelector('#btn');
const outputEl = document.querySelector('#output');

function mult(a, b) {
    const result = a * b;
    console.log(result);
    return result;
}

function checkArea() {
    console.log("a");
     const multiplication = mult(Number(sides[0].value), Number(sides[1].value));
     const areaOfTriangle = 0.5*(multiplication);
     outputEl.innerText = "Area of Triangle is "+ areaOfTriangle + " in cm";
}

areaBtn.addEventListener('click', checkArea);