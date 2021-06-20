'use strict';

//get the username of the guest visiting the site and offer greeting.
//write 5 questions that accept yes or no or y/n in any case (uppercase or lowercase).
//The below line of code uses a dot chaining method (toLowerCase()) in order to normalize the users input so that whether they input No, or N or n etc the input will all be accepted and changed to lowercase.

var userName = prompt('Hello and welcome to my page. Let\'s get to know each other a little shall we? What is your name?');
alert('Hello ' + userName + ', Nice to meet you. My name is Qadree. It\'s pronounced (Kah-dree)');

var questionOne = prompt('Now that you know my name do you think it is an English name?').toLowerCase();

//normalizing the user input can also done in two steps vs adding .toLowerCase() to the line of code above. Example below:
// var normalizeQuestion = questionOne.toLowerCase(). Then change the variable name in the 'if statement' to if(normalizeQuestion === 'no || normalizeQuestion === 'n')

if(questionOne === 'no' || questionOne === 'n') {
  console.log('That\'s correct! It is an Arab name!');
  alert('That\'s correct! It is an Arab name!');
}else if(questionOne === 'yes' || questionOne === 'y') {
  alert('Oh no! How many English people do you know with a name like mine?!');
}
