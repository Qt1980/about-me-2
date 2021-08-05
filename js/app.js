'use strict';

var score = 0;

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
  alert('Really?! How many English people do you know with a name like mine?!');
  console.log('Yeah, I\'m not sure how you thought this answer was a yes');
}

var questionTwo = prompt('Now that that\'s over let\'s move on to the next question. Do I live in Seattle?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y') {
  console.log('That is right. Good Job!');
  alert('That is right. Good Job!');
}else if(questionTwo === 'no' || questionTwo === 'n') {
  alert('Although I am not originally from Seattle, I do currently live in Seattle. Nice try though.');
  console.log('I would say that was close but there was only two choices.');
}

var questionThree = prompt('Moving right along. Do you think I am a gamer?').toLowerCase();

if(questionThree === 'yes' || questionThree === 'y') {
  alert('Awesome Choice! I love playing video games!');
  console.log('Sweet you answered correctly!');
}else if(questionThree === 'no' || questionThree === 'n') {
  alert('Sometimes I wish I weren\'t because playing video games can be so addictive!');
  console.log('Wrong! I sure do and likely will until my thumbs break!');
}

var questionFour = prompt('When I was young I was in a choir. Do you think I\'m a good singer?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y'){
  alert('You better believe it and I love to sing! I also write songs and hope to make an album one day!');
  console.log('Yes you bet I am!');
}else if(questionFour === 'no' || questionFour === 'n'){
  alert('Haha well I certainly know some people who can\'t but I\'m not one of them! Nice try though.');
  console.log('Of course I can!');
}

var questionFive = prompt('Speaking of singing, I also enjoy music and dancing. Do you think I\'m a good dancer?').toLowerCase();

if(questionFive === 'yes' || questionFive === 'y') {
  alert('Yes and I love dancing to really good EDM and house music the most!');
  console.log('Oh yeah I am!')
}else if(questionFive === 'no' || questionFive === 'n') {
  alert('How would you know!? Lol, jeez you little twerp. I am in fact an excellent dancer!');
  console.log('I think you might be projecting!');
}

//question six
for(var i = 0; i < 4; i++){
  var questionSix = prompt('Next up is a question involving numbers. How many years did I spend in the U.S. Navy? You get 4 guesses. Good Luck!');
  var yearsInService = 8;
  if(questionSix === yearsInService) {
    alert('You got it! I spent 8 years in the Navy. 3 of those were aboard the USS Blue Ridge located in Japan, 1 year in Bahrain and the last 4 in Washington D.C.');
    score++;
    break;
  }else if(i < 3 && questionSix < yearsInService) {
    alert('Nice try but you need to guess a little higher!');
  }else if(i > 3 && questionSix > yearsInService) {
    alert('Nope! Now you\'re too high! Bring it down a bit and guess again.');
  }else if(i === 3) {
    alert('Well you gave it your all but could\'nt guess the right number. I spent 8 years in the Navy!');
  }
}
