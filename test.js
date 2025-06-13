const category = sessionStorage.getItem("selectedCategory") || "defaultCategory"; // fallback
const allQuestions = JSON.parse(localStorage.getItem("questions")) || {
  defaultCategory: [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "2 + 2 equals 4."
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris",
      explanation: "Paris is the capital of France."
    }
    // Add more questions here as needed
  ]
};

const selectedQuestions = shuffleArray(allQuestions[category]).slice(0, 10);

let currentQuestion = 0;
let score = 0;
let timer;
let userAnswers = [];

function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}

function startTimer() {
  let time = 30;
  document.getElementById("timer").innerText = time;
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;
    if (time === 0) {
      nextQuestion(); // Automatically go to next if time runs out
    }
  }, 1000);
}

function enableNextButton() {
  document.getElementById("nextBtn").disabled = false;
}

function disableNextButton() {
  document.getElementById("nextBtn").disabled = true;
}

function resetRadioButtons() {
  const options = document.getElementsByName("option");
  options.forEach(option => {
    option.checked = false;
  });
}

function showQuestion() {
  clearInterval(timer);
  if (currentQuestion >= selectedQuestions.length) {
    showResult();
    return;
  }

  const q = selectedQuestions[currentQuestion];
  const optionsHtml = q.options.map((opt, index) => `
    <label class="answer-container" for="opt${index}">
      <input type="radio" name="option" id="opt${index}" value="${opt}" onchange="enableNextButton()">
      ${opt}
    </label>
  `).join("");

  document.getElementById("questionArea").innerHTML = `
    <h3>Question ${currentQuestion + 1}</h3>
    <p>${q.question}</p>
    <form>
      ${optionsHtml}
    </form>
    <p id="explanation" style="display:none;color:green;font-style:italic"></p>
  `;

  document.getElementById("nextBtn").innerText = currentQuestion === selectedQuestions.length - 1 ? "Submit" : "Next";
  disableNextButton();
  resetRadioButtons();
  startTimer();
}

function nextQuestion() {
  clearInterval(timer);
  disableNextButton();  // Disable button during processing

  const options = document.getElementsByName("option");
  let selected = null;
  for (const opt of options) {
    if (opt.checked) {
      selected = opt.value;
      break;
    }
  }

  const correctAnswer = selectedQuestions[currentQuestion].answer;
  const isCorrect = selected && selected.toLowerCase() === correctAnswer.toLowerCase();

  if (!selected) {
    userAnswers.push({
      question: selectedQuestions[currentQuestion].question,
      selected: "No answer",
      correct: correctAnswer,
      explanation: selectedQuestions[currentQuestion].explanation,
      isCorrect: false
    });
  } else {
    if (isCorrect) score++;
    userAnswers.push({
      question: selectedQuestions[currentQuestion].question,
      selected: selected,
      correct: correctAnswer,
      explanation: selectedQuestions[currentQuestion].explanation,
      isCorrect: isCorrect
    });
  }

  currentQuestion++;
  setTimeout(() => {
    if (currentQuestion < selectedQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 200); // Small delay before next question
}

function showResult() {
  let resultHTML = `
    <h2>Test Completed!</h2>
    <p>Your Score: ${score} / ${selectedQuestions.length}</p>
    <hr>
  `;

  userAnswers.forEach((item, index) => {
    resultHTML += `
      <div style="margin-bottom: 15px;">
        <h4>Question ${index + 1}</h4>
        <p>${item.question}</p>
        <p><strong>Your Answer:</strong> ${item.selected}</p>
        <p><strong>Correct Answer:</strong> ${item.correct}</p>
        <p style="color:green;font-style:italic">${item.explanation}</p>
      </div>
      <hr>
    `;
  });


  document.getElementById("testContainer").innerHTML = resultHTML;
}

// Start the quiz
showQuestion();
