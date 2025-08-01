
const feedback = document.querySelector('#feedback');
const submitBtn = document.getElementById('submit-answer');
checkAnswer =() => {
const answer = document.querySelector('input[name="quiz"]:checked');
const correctAnswer = "4"
const userAnswer = answer.value

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}
submitBtn.addEventListener("click",(()=>{
    checkAnswer()
}));


