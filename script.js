const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
    ]
  },
  {
    question: "What is the capital city of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Montreal", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Vancouver", correct: false },
    ]
  },
  {
    question: "Who is the founder of Pakistan?",
    answers: [
      { text: "Liaquat Ali Khan", correct: false },
      { text: "Allama Iqbal", correct: false },
      { text: "Quaid-e-Azam", correct: true },
      { text: "Sir Syed Ahmed Khan", correct: false },
    ]
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "2", correct: true },
      { text: "0", correct: false },
    ]
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
    ]
  },
  {
    question: "What is the national flower of Pakistan?",
    answers: [
      { text: "Rose", correct: false },
      { text: "Jasmine", correct: true },
      { text: "Lily", correct: false },
      { text: "Sunflower", correct: false },
    ]
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "South Korea", correct: false },
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "Thailand", correct: false },
    ]
  },
  {
    question: "What is the national language of Pakistan?",
    answers: [
      { text: "Punjabi", correct: false },
      { text: "Urdu", correct: true },
      { text: "English", correct: false },
      { text: "Pashto", correct: false },
    ]
  },
  {
    question: "How many players are there in a football team?",
    answers: [
      { text: "11", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ]
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    answers: [
      { text: "Carbon Dioxide", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Hydrogen", correct: false },
    ]
  },
{
    question: "Which continent has the most countries?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Europe", correct: false },
      { text: "South America", correct: false },
    ]
  },
  {
    question: "In which year did Pakistan become a nuclear power?",
    answers: [
      { text: "1999", correct: false },
      { text: "1998", correct: true },
      { text: "2000", correct: false },
      { text: "1996", correct: false },
    ]
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Thomas Edison", correct: false },
      { text: "Alexander Graham Bell", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Nikola Tesla", correct: false },
    ]
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ]
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Won", correct: false },
      { text: "Yuan", correct: false },
      { text: "Yen", correct: true },
      { text: "Ringgit", correct: false },
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "120°C", correct: false },
      { text: "80°C", correct: false },
    ]
  },
  {
    question: "Where is the Great Wall located?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "Nepal", correct: false },
    ]
  },
  {
    question: "Who wrote the national anthem of Pakistan?",
    answers: [
      { text: "Hafeez Jalandhari", correct: true },
      { text: "Allama Iqbal", correct: false },
      { text: "Faiz Ahmed Faiz", correct: false },
      { text: "Ahmed Faraz", correct: false },
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
    ]
  },
  {
    question: "What is the national game of Pakistan?",
    answers: [
      { text: "Cricket", correct: false },
      { text: "Hockey", correct: true },
      { text: "Football", correct: false },
      { text: "Polo", correct: false },
    ]
  },
  {
    question: "What is the national animal of Pakistan?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Markhor", correct: true },
      { text: "Leopard", correct: false },
      { text: "Lion", correct: false },
    ]
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ]
  },
  {
    question: "What does HTTP stand for?",
    answers: [
      { text: "HyperText Transfer Protocol", correct: true },
      { text: "HighText Transfer Protocol", correct: false },
      { text: "HyperText Transition Protocol", correct: false },
      { text: "Hyper Transfer Text Protocol", correct: false },
    ]
  },
  {
    question: "Which vitamin is produced when a person is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin B12", correct: false },
    ]
  },
  {
    question: "Which mountain is the highest in the world?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Mount Elbrus", correct: false },
    ]
  },
  {
    question: "Which city in Pakistan is called the City of Gardens?",
    answers: [
      { text: "Multan", correct: false },
      { text: "Karachi", correct: false },
      { text: "Lahore", correct: true },
      { text: "Peshawar", correct: false },
    ]
  },
  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false },
    ]
  },
  {
    question: "Which element is needed for breathing?",
    answers: [
      { text: "Hydrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Carbon", correct: false },
      { text: "Nitrogen", correct: false },
    ]
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    answers: [
      { text: "Zulfikar Ali Bhutto", correct: false },
      { text: "Liaquat Ali Khan", correct: true },
      { text: "Ayub Khan", correct: false },
      { text: "Benazir Bhutto", correct: false },
    ]
  },
  {
    question: "Which bird is known for mimicking human speech?",
    answers: [
      { text: "Pigeon", correct: false },
      { text: "Parrot", correct: true },
      { text: "Crow", correct: false },
      { text: "Sparrow", correct: false },
    ]
  },
  {
    question: "Which is the tallest building in the world?",
    answers: [
      { text: "Shanghai Tower", correct: false },
      { text: "Burj Khalifa", correct: true },
      { text: "Petronas Towers", correct: false },
      { text: "Empire State Building", correct: false },
    ]
  },
  {
    question: "What is the currency of the United Kingdom?",
    answers: [
      { text: "Euro", correct: false },
      { text: "Dollar", correct: false },
      { text: "Pound Sterling", correct: true },
      { text: "Franc", correct: false },
    ]
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Uranus", correct: false },
      { text: "Mars", correct: false },
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Michelangelo", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Raphael", correct: false },
      { text: "Van Gogh", correct: false },
    ]
  },
  {
    question: "Which Pakistani won the Nobel Peace Prize in 2014?",
    answers: [
      { text: "Abdul Sattar Edhi", correct: false },
      { text: "Malala Yousafzai", correct: true },
      { text: "Benazir Bhutto", correct: false },
      { text: "Dr. Abdul Qadeer Khan", correct: false },
    ]
  },
  {
    question: "What is the capital of Saudi Arabia?",
    answers: [
      { text: "Jeddah", correct: false },
      { text: "Mecca", correct: false },
      { text: "Riyadh", correct: true },
      { text: "Medina", correct: false },
    ]
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Mercury", correct: true },
      { text: "Aluminum", correct: false },
      { text: "Iron", correct: false },
    ]
  },
  {
    question: "What is the most widely spoken language in the world?",
    answers: [
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Spanish", correct: false },
      { text: "Hindi", correct: false },
    ]
  },
  {
    question: "Which Pakistani city is known for Sufi shrines?",
    answers: [
      { text: "Lahore", correct: false },
      { text: "Multan", correct: true },
      { text: "Faisalabad", correct: false },
      { text: "Rawalpindi", correct: false },
    ]
  },
  {
    question: "What is the boiling point of water in Fahrenheit?",
    answers: [
      { text: "212°F", correct: true },
      { text: "100°F", correct: false },
      { text: "180°F", correct: false },
      { text: "220°F", correct: false },
    ]
  },
  {
    question: "Who was the first President of Pakistan?",
    answers: [
      { text: "Zia-ul-Haq", correct: false },
      { text: "Ayub Khan", correct: false },
      { text: "Iskander Mirza", correct: true },
      { text: "Yahya Khan", correct: false },
    ]
  },
  {
    question: "Which city is famous for the Eiffel Tower?",
    answers: [
      { text: "Rome", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
    ]
  },
  {
    question: "Which organ purifies blood in the human body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Liver", correct: false },
      { text: "Kidneys", correct: true },
      { text: "Heart", correct: false },
    ]
  },
  {
    question: "Which city is the economic hub of Pakistan?",
    answers: [
      { text: "Lahore", correct: false },
      { text: "Islamabad", correct: false },
      { text: "Karachi", correct: true },
      { text: "Quetta", correct: false },
    ]
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Cheetah", correct: true },
      { text: "Leopard", correct: false },
      { text: "Horse", correct: false },
      { text: "Lion", correct: false },
    ]
  },
  {
    question: "How many days are there in a leap year?",
    answers: [
      { text: "365", correct: false },
      { text: "366", correct: true },
      { text: "364", correct: false },
      { text: "367", correct: false },
    ]
  },
  {
    question: "Which country has the most population?",
    answers: [
      { text: "India", correct: false },
      { text: "United States", correct: false },
      { text: "China", correct: true },
      { text: "Indonesia", correct: false },
    ]
  },
  {
    question: "Which is the tallest mountain in Pakistan?",
    answers: [
      { text: "Nanga Parbat", correct: false },
      { text: "Mount Everest", correct: false },
      { text: "K2", correct: true },
      { text: "Rakaposhi", correct: false },
    ]
  },
  {
    question: "Which instrument is used to measure temperature?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Speedometer", correct: false },
      { text: "Altimeter", correct: false },
    ]
  },
  {
    question: "Where is the Badshahi Mosque located?",
    answers: [
      { text: "Islamabad", correct: false },
      { text: "Karachi", correct: false },
      { text: "Lahore", correct: true },
      { text: "Multan", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 
function showQuestion(){
  resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);

if(answer.correct){
  button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer);

    });
}

function  resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
}else{
  selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button =>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";

}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();