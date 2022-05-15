// Question data

var questionsData= [
  {
    question: "Which language runs in a web browser?",
    option : ['Java', 'C', 'Python', 'JavaScript'],
    correct: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    option : ['Central Style Sheets', 'Cascading Style Sheet', 'Cascading Simple Sheets', 'Corrected Sheet Source'],
    correct: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    option : ['Hypertext Markup Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'Hypertransform Markdown Language'],
    correct: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    option : ['1996', '1995', '1994', 'none of the above'],
    correct: "1995",
  },
];

var question = document.getElementById("question");
var quizHeader = document.getElementById("quiz-header");
var scoreCard = document.getElementById("scorecard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var next = document.querySelectorAll('.Next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i=0;
var score= 0;