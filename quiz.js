
const feedback = document.querySelector('#feedback');
const submitBtn = document.querySelector('#submit-answer');
checkAnswer =() => {
const userAnswer = document.querySelector('input[name="quiz"]:checked');
const correctAnswer = "4"
const userAnserValue = userAnswer.value

  if (userAnserValue === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}
submitBtn.addEventListener("click",(()=>{
    checkAnswer()
}));


