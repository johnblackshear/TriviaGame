$(document).ready(function (){

var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered= 0;
var timeRemaining = 20;
var index = 0;
var timerId = 0;
var answered = false;
var correct;

var game = [{
    question:"What team is it?",
    answer:["Texas Oilers","Houston Sulleys","Houston Texans","Dallas Monstars"],
    correct:"1",
    image: ("./assets/images/Houston-Texans.png")
}, {
    question: "WHAT TEAM IS THIS?",
    answer: ["Minnesota Goofies","Minnesota Vikings","Minneapolis Goofies","Minneapolis Norsmen"],
    correct: "0",
    image: ("./assets/images/Minnesota-Vikings.png")
},{
    question: "WHAT TEAM IS THIS?",
    answer: ["Boston Patriots"," Boston Hatsmen","New England Mad Hatters","New England Patriots"],
    correct: "2",
    image: ("./assets/images/New-England-Patriots.png")
}];


// function that starts the game
function start(){
    $('.start-button').remove();
    rightAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;
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
    $('.imageDiv').append('<img class=questionImage width="150" height"150 src="' + game[index].image + ' ">');
    var question = game[index].question;
    $('.question').html(question);
    for(var i = 0; i < 4; i++){
        var answer = game[index].answer[i];
        $('.answers').append('<h4 class = answerAll id=' + i + '>' + answer  + '</h4>');
    }


$('h4').click(function(){
    var id = $(this).attr('id');
    if(id === correct){
        answered = true;
        $('.question').text("The answer is: " + game[index].answer[correct]);
        rightAnswer();
    }else{
        answered = true;
        $('.question').text("your choice was: " + game[index].answer[id] + " was wrong! The right answer is: " + game[index].answer[correct]);
        wrongAnswer();
    }
    
});

function timer(){
    if (timeRemaining === 0){
        answered  = true;
        clearInterval(timerId);
        $('question').text("The right answer is: " + game[index].answer[correct]);
        unAnswered();

    }else if (answered === true){
        clearInterval(timerId);
    }else{
        timeRemaining--;
        $('.timeRemaining').text('You have ' + timeRemaining + ' seconds');
    }
}

function rightAnswer(){
    rightAnswers++;
    $(".timeRemaining").text("Great Job! You have answered right!")
    nextRound();
}

function unAnswered(){
    unanswered++;
    $('.timeRemaining').text("Why no choice?")
    nextRound();
}

function wrongAnswer(){
    wrongAnswers++;
    $('timeRemaining').text("Better luck next time!");
    nextRound();
}

function nextRound(){
    $(".questionImage").remove();
    $(".answersAll").remove();
    $('.answers').append('<img class=answerImage width="150" height"150 src="' + game[index].image + ' ">');
    index++;
    if(index < game.length){
        setTimeout(function(){
            loadQuestions();
            $('.answerImage').remove();
        }, 5000);
    }else{
        setTimeout(function(){
            $('.question').remove();
            $('.timeRemaing').remove();
            $('.answerImage').remove();
            $('.answers').append('<h4 class= answeAll>Right Answers: ' + rightAnswers + '</h4>' );
            $('.answers').append('<h4 class= answeAll>Wrong Answers: ' + wrongAnswers + '</h4>' );
            $('.answers').append('<h4 class= answeAll>Unanswered Answers: ' + unanswered + '</h4>');
            setTimeout(function () {
                location.reload();
            }, 7000);
        }, 5000);
    }
};

$('.startButton').on("click", function () {
    $('startButton');
    start();
    alert("clicked");

});


});