const answer = [
    "It is certain.",
    "Yes definitely.",
    "Chances are good",
    "Signs point to yes.",
    "My sources say no.",
    "Chances are not so good.",
    "Very doubtful.",
    "404 Error: Fate not found.",
    "Only if you do a little dance first.",
    "You are about die!",
    "The stars say... meh.",
    "Ask your dog, they know better.",
    "Computer say no.",
    "I'm no a coffee break, ask later.",
    "Yes, but you won't like the consequences.",
    "You need to consult a doctor.",
    "Your WiFi connection to destiny is weak.",
    "Fate is currently stuck...",
    "Chances are great...for someone else.",
];
const getAnswerButton = document.querySelector("#get-answer-btn");
const answerDisplay = document.querySelector("#answer");

function showRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answer.length);
    const randomAnswer = answer[randomIndex];
    answerDisplay.textContent = randomAnswer;
}
getAnswerButton.addEventListener("click", showRandomAnswer);