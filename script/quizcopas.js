const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const questionContainer = document.getElementById('question-container');
const questions = document.querySelectorAll('.question');

let correctAnswers = {
  q1: 'c',
  q2: 'b',
  q3: 'a', 
  q4: 'b',
  // Adicione aqui as respostas corretas para as outras perguntas
};

function checkAnswer(questionId, correctAnswer) {
  const question = document.getElementById(questionId);
  const selectedOption = question.querySelector(`input[name="${questionId}"]:checked`);

  if (!selectedOption) {
    return false; // Se o usuário não tiver selecionado nenhuma resposta, retorna falso
  }

  const answer = selectedOption.value;

  if (answer === correctAnswer) {
    selectedOption.parentElement.classList.add('correct');
    return true; // Retorna true se a resposta for correta
  } else {
    selectedOption.parentElement.classList.add('incorrect');

    // Exibir a resposta correta em verde
    const correctOption = question.querySelector(`input[value="${correctAnswer}"]`);
    correctOption.parentElement.classList.add('correct');
    return false; // Retorna false se a resposta for incorreta
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

    // Desabilitar todas as opções após a resposta
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
