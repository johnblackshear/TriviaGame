$(document).ready(function(){

var questions = [
    
{   
    question: "WHAT TEAM IS THIS?",
    a:"Texas Oilers",
    b:"Houston Sulleys",
    c:"Houston Texans",
    d:"Dallas Monstars",
    name:"q1",
    image:  "./assets/images/Houston-Texans.png",

    correct:"b",
},
{   
    question: "WHAT TEAM IS THIS?",
    a:"Minnesota Goofies",
    b:"Minnesota Vikings",
    c:"Minneapolis Goofies",
    d:"Minneapolis Norsmen",
    name:"q1",
    image:  "./assets/images/Minnesota-Vikings.png",

    correct:"a",
},

{   
    question: "WHAT TEAM IS THIS?",
    a:"Boston Patriots",
    b:" Boston Hatsmen",
    c:"New England Mad Hatters",
    d:"New England Patriots",
    name:"q1",
    image: "./assets/images/New-England-Patriots.png",

    correct:"c",
},

{   
    question: "WHAT TEAM IS THIS?",
    a:"Green Bay Packers",
    b:" Green Bay Fox Archers",
    c:"Green Bay FoxBows",
    d:"Green Bay Robin Hoods",
    name:"q1",
    image: "./assets/images/Green-Bay-Packers.png",

    correct:"d",
},

{   
    question: "WHAT TEAM IS THIS?",
    a:"Oakland Pirates",
    b:"Oakland Sparrows",
    c:"Oakland Raiders",
    d:"Califoria Pirates",
    name:"q1",
    image: "./assets/images/Oakland-Raiders.png",

    correct:"b",
},

{   
    question: "WHAT TEAM IS THIS?",
    a:"Dallas Cowboys",
    b:"Houston Woodies",
    c:"Texas Woodies",
    d:"Dallas Woodies",
    name:"q1",
    image: "./assets/images/Dallas-Cowboys.png",

    correct:"d",
},
];

//global variables

var number = 30; 
var invtervalId;

function run(){
invtervalId = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    $('#show-number').html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
    }
}

function stop(){
    clearInterval(invtervalId);
}


 $('#start-button').on("click", function(){
    $('.box-container').show();
    $('#button-start').hide();
    
})

console.log(number);
decrement();

var generateQuestion = function(obj){

    var img = $('<img>').attr('src',obj.image);
    var form = $("<form>");
        img.append(obj.name);
        

		var question = $('<h2>').text(obj.question);
		var aDiv = $('<div>');
		var bDiv = $('<div>');
		var cDiv = $('<div>');
		var dDiv = $('<div>');
		var a = $('<input type="radio">').attr('name', obj.name);
		aDiv.append(a);
		aDiv.append(obj.a);
		var b = $('<input type="radio">').attr('name', obj.name);
		bDiv.append(b);
		bDiv.append(obj.b);
		var c = $('<input type="radio">').attr('name', obj.name);
		cDiv.append(c);
		cDiv.append(obj.c);
		var d = $('<input type="radio">').attr('name', obj.name);
		dDiv.append(d);
        dDiv.append(obj.d);

      

        
        
        /*var abutton= $('#aButton').text(obj.a);
        var bbutton= $('#bButton').text(obj.b);
        var cbutton= $('#cButton').text(obj.c);
        var dbutton= $('#dButton').text(obj.d);*/
        

       if(obj.correct === "a"){
			a.attr('correct', "true");
		}else if(obj.correct === "b"){
			b.attr('correct', "true");
		}else if(obj.correct === "c"){
			c.attr('correct', "true");
		}else if(obj.correct === "d"){
			d.attr('correct', "true");
		};
        
$('#questionbox').append(img);
form.append(question);
form.append(aDiv, bDiv, cDiv, dDiv);
$('#answerbox').append(form);
}



var gradeQuestion = function(obj){
    //check if there are any radios that have been clicked
    //if it has been checked
    //find checked radio, check for correct="true" attr
    console.log("gradeQuestion()", obj);
    var output = 0;
    obj.find('input').each(function(){
         if($(this).is(':checked')) {
             console.log("FOUND CHECKED");
              if($(this).attr('correct') === "true"){
                  console.log('returning + 1');
                  output =  1;//you did it!
              } else{
                  console.log('returning - 1');
                  output= -1;//WRONG
              }
          }	
    });
    return output;
}

var gradePage = function(){
    console.log("gradePage");
    var score = 0;
    $('form').each(function(){
        console.log("adding ",parseInt(gradeQuestion($(this))), " to score");
        score += parseInt(gradeQuestion($(this)));
    })
    console.log(score);
    return score;

}

generateQuestion(questions[0])


$('#my-button').click(gradePage);
$('#my-button').click(function(){
    alert("been clicked"); 
})



   
    





 














});