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
    c:"Minnesota Norsemen",
    d:"Minnesota Pups",
    name:"q1",
    image:  "./assets/images/Minnesota-Vikings.png",

    correct:"a",
},

{   
    question: "WHAT TEAM IS THIS?",
    a:"New England Nationalist",
    b:" New England Teamen",
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
];

var generateQuestion = function(obj){

    var form = $("<form>");
        var img = $('<img>').attr('src',obj.image);
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
        
$('#questionbox').append(img);
form.append(question);
form.append(aDiv, bDiv, cDiv, dDiv);
$('#answerbox').append(form);
}

generateQuestion(questions[3]);



   
    // code for image
    /*var img = $('<img>');
    img.attr('src', "./assets/images/Houston-Texans.png");
    (img).append()
    $('#questionbox').append(img);*/





 














});