$(document).ready(function (){
//Global Varibles
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered= 0;
var timeRemaining = 20;
var index = 0;
var timerId;
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
    answer: ["Texas Cowboys"," Dallas Cowboys","Texas Woodies","Dallas Woodies"],
    correct: "3",
    image: ("./assets/images/Dallas-Cowboys.png")

},{
    question: "WHAT TEAM IS THIS?",
    answer: ["Boston Patriots"," Boston Hatsmen","New England Mad Hatters","New England Patriots"],
    correct: "2",
    image: ("./assets/images/New-England-Patriots.png")

},{
    question: "WHAT TEAM IS THIS?",
    answer: ["Green Bay Fox Bows","Green Bay Fox Archers","Green Bay Packers","Green Bay Robin Hoods"],
    correct: "3",
    image: ("./assets/images/Green-Bay-Packers.png")

},{
    question: "WHAT TEAM IS THIS?",
    answer: ["Cincinnati Tiggers"," Cleveland Bengals","Ohio Bengals","Cincinnati Bengals"],
    correct: "0",
    image: ("./assets/images/Cincinnati-Bengal.png")

},{
    question: "WHAT TEAM IS THIS?",
    answer: ["Bay City Raiders","Las Vegas Jack Sparrows","Oakland Jack Sparrows","Oakland Raiders"],
    correct: "2",
    image: ("./assets/images/Oakland-Raiders.png")
},{
    question: "WHAT TEAM IS THIS?",
    answer: ["Bay City Dories","San Francisco Nemos","San Deigo Crush","San Francisco Forty-Niners"],
    correct: "1",
    image: ("./assets/images/San-Francisco-49ers.png")

},{
    question: "WHAT TEAM IS THIS?",
    answer: ["San Diego Mushu","Miami Chargers","San Deigo Chargers","Los Angeles Mushu"],
    correct: "3",
    image: ("./assets/images/San-Diego-Chargers.png")

}];


// function that starts the game
function start(){
    $('.start-button').remove();
    rightAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;
    loadQuestions();
}

// Generates the Questoins and makes a click handler for question options
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
        $('.answers').append('<h4 class = answersAll id=' + i + '>' + answer  + '</h4>');
    }


$("h4").click(function(){
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
}

//function that sets timer 

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
//Function that clears previous question, options and image, and moves to the next question
function nextRound(){
    $(".questionImage").remove();
    $(".answersAll").remove();
    $('.answerImageDiv').append('<img class=answerImage width="150" height"150" src="' + game[index].image + ' ">');
    index++;
    if(index < game.length){
        setTimeout(function(){
            loadQuestions();
            $('.answerImage').remove();
        }, 3000);
    }else{
        setTimeout(function(){
            $('.question').remove();
            $('.timeRemaing').remove();
            $('.answerImage').remove();
            $('.answers').append('<h4 class= answersAll>Right Answers: ' + rightAnswers + '</h4>' );
            $('.answers').append('<h4 class= answersAll>Wrong Answers: ' + wrongAnswers + '</h4>' );
            $('.answers').append('<h4 class= answersAll>Unanswered Answers: ' + unanswered + '</h4>');
            setTimeout(function () {
                location.reload();
            }, 4000);
        }, 3000);
    }
};
//Funtion that starts the game/ click handleler
$('.startButton').on("click", function () {
    $('startButton');
    start();
    alert("Goodluck!");

});


});