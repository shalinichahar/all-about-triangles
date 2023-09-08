const inputs = document.querySelectorAll('.angles');
const trianglebtn = document.querySelector('#btn');
const outputD = document.querySelector("#output");

function calculateSumOfAngles( angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
   return sum;
}

function isTriangle() {
     const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputD.innerText = "Yay, the angles form a triangle 🥳";
    }
    else {
        outputD.innerText = "Oh Oh! the angles don't form a triangle 😓";
    }
}

trianglebtn.addEventListener("click", isTriangle);
