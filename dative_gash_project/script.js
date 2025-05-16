// Login System
const loginButton = document.getElementById('login-btn');
const authContainer = document.getElementById('auth-container');
const gameContainer = document.getElementById('game');

let username = '';
let score = 0;

loginButton.addEventListener('click', () => {
    username = document.getElementById('username').value;
    if (username.trim() !== '') {
        authContainer.classList.add('hide');
        gameContainer.classList.remove('hide');
        alert(`Welcome, ${username}!`);
    } else {
        alert('Please enter a valid username!');
    }
});

// Game Logic
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const cashOutButton = document.getElementById('cash-out-btn');
const scoreDisplay = document.getElementById('score');

let currentQuestionIndex;

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which language is used to style web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    }
    // Add more questions
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
cashOutButton.addEventListener('click', cashOut);

function startGame() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    scoreContainer.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    document.getElementById('question').innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score += 10;
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        scoreContainer.classList.remove('hide');
        questionContainer.classList.add('hide');
        scoreDisplay.innerText = score;
    }
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function cashOut() {
    alert(`${username}, you're cashing out with ${score} points!`);
    // Backend integration to process the cash out
}
