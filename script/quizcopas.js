const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const questionContainer = document.getElementById('question-container');
const questions = document.querySelectorAll('.question');

let correctAnswers = {
  q1: 'c',
  q2: 'b',
  q3: 'a', 
  q4: 'b',
  q5: 'c',
  q6: 'c',
  q7: 'd',
  q8: 'b',
  q9: 'a',
  q10: 'b',
  q11: 'b',
  q12: 'd',
  q13: 'c',
  q14: 'b',
  q15: 'b',
};

function checkAnswer(questionId, correctAnswer) {
  const question = document.getElementById(questionId);
  const selectedOption = question.querySelector(`input[name="${questionId}"]:checked`);

  if (!selectedOption) {
    return false; 
  }

  const answer = selectedOption.value;

  if (answer === correctAnswer) {
    selectedOption.parentElement.classList.add('correct');
    return true; 
  } else {
    selectedOption.parentElement.classList.add('incorrect');

    
    const correctOption = question.querySelector(`input[value="${correctAnswer}"]`);
    correctOption.parentElement.classList.add('correct');
    return false; 
  }
}

function checkAnswers() {
  let userScore = 0;
  let userErrors = 0;

  questions.forEach(question => {
    const questionId = question.id;
    const correctAnswer = correctAnswers[questionId];

    const isCorrect = checkAnswer(questionId, correctAnswer);

    if (isCorrect) {
      userScore++;
    } else {
      userErrors++;
    }

    
    const options = question.querySelectorAll('input');
    options.forEach(option => {
      option.disabled = true;
    });
  });

  showResult(userScore, userErrors);
}

function showResult(userScore, userErrors) {
  resultDiv.innerHTML = `Você acertou ${userScore} de ${questions.length} perguntas e errou ${userErrors}.`;

  questionContainer.innerHTML = '';
  questionContainer.style.display = 'block';

  questions.forEach(question => {
    const questionId = question.id;
    const correctAnswer = correctAnswers[questionId];
    const selectedOption = question.querySelector(`input[name="${questionId}"]:checked`);
    const answer = selectedOption ? selectedOption.value : 'Nenhuma resposta selecionada';

    const resultItem = document.createElement('div');
    resultItem.innerHTML = `<p>Pergunta: ${question.querySelector('p').innerText}</p>
                            <p>Sua resposta: ${answer}</p>
                            <p>Resposta correta: ${correctAnswer}</p>`;

    if (answer === correctAnswer) {
      resultItem.classList.add('correct');
    } else {
      resultItem.classList.add('incorrect');
    }

    questionContainer.appendChild(resultItem);
  });
}

quizForm.addEventListener('submit', function (event) {
  event.preventDefault();
});

const verifyButton = document.querySelector('button');
verifyButton.addEventListener('click', checkAnswers);
