const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#btn');
const outputEl = document.querySelector('#output');

const correctAnswers = ['90°', 'right angled', 'one right angle','12,16,20']; //keep the sequence

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score);
    outputEl.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);