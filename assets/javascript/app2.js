$(document).ready(function (){

var rigthAnswers = 0;
var wrongAnswers = 0;
var unaswered= 0;
var timeRemaining = 20;
var index = 0;
var timerId = 0;
var answered = false;
var correct;

var game = [{
    question:"What team is it?",
    answer:["Texas Oilers","Houston Sulleys","Houston Texans","Dallas Monstars"],
    correct:"2",
    image: ("./assets/images/Houston-Texans.png")
}, {
    question: "WHAT TEAM IS THIS?",
    answer: ["Minnesota Goofies","Minnesota Vikings","Minneapolis Goofies","Minneapolis Norsmen"],
    correct: "1",
    image: ("./assets/images/Minnesota-Vikings.png")
},{
    question: "WHAT TEAM IS THIS?",
    answer: ["Boston Patriots"," Boston Hatsmen","New England Mad Hatters","New England Patriots"],
    correct: "3",
    image: ("./assets/images/New-England-Patriots.png")
}];

alert("you are linked")

// function that starts the game
function startTriva(){
    $('.start-button').remove();
    rigthAnswers = 0;
    wrongAnswers = 0;
    unaswered = 0;
    loadQuestions();
}

// function that sets timer 
function loadQuestions(){
    answered = false; 
    timeRemaining = 20;
    timerId = setInterval(timer, 1000);
    if (answered === false){
        timer();
    }
    correct = game[index].correct;
    var image = game[index].image;
    $('.imageDiv').html(image);
    var question = game[index].question;
    $('.question').html(question);
}
$('.startButton').on("click", function () {
    $('.startButton');
    startTriva();

});


});