const correctAnswers = {
  q1: 'C',
  q2: 'A',
  q3: 'B'
};

function calculateScore() {
  let score = 0;
  const totalQuestions = 3;
  const resultDiv = document.getElementById('result');

  // Sirf checked radio buttons ko select karna
  const userAnswers = document.querySelectorAll('input[type="radio"]:checked');

  // Answers par loop
  userAnswers.forEach((answer) => {
    const questionName = answer.name;

    if (answer.value === correctAnswers[questionName]) {
      score++;
      answer.parentElement.style.color = 'green';
      answer.parentElement.style.fontWeight = 'bold';
    } else {
      answer.parentElement.style.color = 'red';
    }
  });

  let feedbackMessage = '';

  if (score === totalQuestions) {
    feedbackMessage = 'Amazing! You got a perfect score!';
  } else if (score >= 1) {
    feedbackMessage = 'Not bad! Keep studying.';
  } else {
    feedbackMessage = 'Time to hit the books again.';
  }

  resultDiv.innerHTML = `
    <h3>Your Results</h3>
    <p>You scored <strong>${score}</strong> out of <strong>${totalQuestions}</strong>.</p>
    <p><em>${feedbackMessage}</em></p>
  `;
}
