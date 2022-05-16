import { questionsData } from "./questions.js";

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = questionsData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  // console.log(answer);

  if (answer === questionsData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;

  if (currentQuiz < questionsData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>Your Score: 
    <br> 
    ${score}/${questionsData.length}
    <h2>
    
    <onclick="location.reload()"></button>
    `;
  }
});