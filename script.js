const quizData = [
  {
    question: "Full Form of HTML?",
    a: "Hype Tain Malware Language",
    b: "Hyper Training Multi Language",
    c: "Hyper Text Markup Language",
    d: "Haunted Team Multi Language ",
    correct: "c",
  },
  {
    question: "Full Form of CSS?",
    a: "Casecading Style Sheet",
    b: "Cannon Shoot Start",
    c: "Can Salu Shout",
    d: "Canada Shuffer Solid ",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
console.log(questionEl);

let currentQuestionNo = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestionNo];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  currentQuestionNo++;
}
