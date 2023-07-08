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
  {
    question:
      "Which of the following programming languages is primarily used for front-end web development?",
    a: "JavaScript",
    b: "Python",
    c: "Java",
    d: "c++",
    correct: "a",
  },
  {
    question:
      "Which of the following is a widely used front-end framework/library for building responsive web applications?",
    a: "Django",
    b: "Angular",
    c: "React",
    d: "Ruby on Rails",
    correct: "c",
  },
  {
    question:
      "Which of the following is a commonly used version control system in front-end web development?",
    a: "SVN",
    b: "Git",
    c: "Mercurial",
    d: "Perforce",
    correct: "b",
  },
];

const quizDiv = document.getElementById("quiz");
const allAns = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestionNo = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSlected();

  const currentQuizData = quizData[currentQuestionNo];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answerS = undefined;

  allAns.forEach((ans) => {
    if (ans.checked) {
      answerS = ans.id;
    }
  });

  return answerS;
}

function deSlected() {
  allAns.forEach((ans) => {
    ans.checked = false;
  });
}

submitBtn.addEventListener("click", function () {
  let answer = getSelected();
  if (answer) {
    if (answer == quizData[currentQuestionNo].correct) {
      score++;
    }
    currentQuestionNo++;
    if (currentQuestionNo < quizData.length) {
      loadQuiz();
    } else {
      quizDiv.innerHTML = `<h2>You Correcctly Answer ${score}/${quizData.length}</h2>
      <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
