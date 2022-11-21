'use strict';

// var alerty = alert('hey how it going?');
// console.log('ALERTY: ', alerty); // undefined

// var address = prompt('where do you live?');
// console.log('ADDRESS: ', address); // string
// console.log('typeof address: ', typeof address);

var confirmBox = confirm('are you sure you want to proceed?');
console.log('CONFIRMBOX: ', confirmBox); // Boolean
var usernameResponce = prompt('What name do you go by?');
console.log('usernameResponce', usernameResponce);
if (usernameResponce === '') {
  usernameResponce = 'anon';
  alert('It\'s okay if you\'re shy you can speak up ' + usernameResponce + '.');
} else {
  alert('Bonjour ' + usernameResponce);
}

// Question 1
// TODO: Refactor code to include a new array with the values
// 'yes', 'y', 'yep', 'yeah', 'yusss' and check to see if the workoutResponse includes
// these values. Do the same thing with the negative responses.
var workoutResponse = prompt('Did I work out today?').toLowerCase();
console.log('workoutResponse', workoutResponse);
const yesArray = ['yes', 'y', 'yep', 'yeah', 'yusss'];
const noArray = ['no', 'n', 'nah'];
if (yesArray.includes(workoutResponse)) {
  alert('Well wouldn\'t you like to know!');
} else if (noArray.includes(workoutResponse)) {
  alert('Guess again.');
} else {
  alert('Plead the 5th I see... ' + usernameResponce);
}

// Question 2
var girlDadResponse = prompt('Got daughter?').toLowerCase();
console.log('girlDadResponse', girlDadResponse);

if (girlDadResponse === 'yes' || girlDadResponse === 'y') {
  alert('got one');
} else if (girlDadResponse === 'no' || girlDadResponse === 'n') {
  alert('but she is');
} else {
  alert('Next time try harder ' + usernameResponce);
}

// Question 3
var hairdoResponse = prompt('Did I get a haircut recently?').toLowerCase();
console.log('hairdoResponse', hairdoResponse);

if (hairdoResponse === 'yes' || hairdoResponse === 'y') {
  alert('feelin myself');
} else if (hairdoResponse === 'no' || hairdoResponse === 'n') {
  alert('sorry but i actually did');
} else {
  alert('You miss 100% of the shots you dont take ' + usernameResponce);
}

// Question 4
var ufoResponse = prompt('Have you ever seen a UFO?').toLowerCase();
console.log('ufoResponse', ufoResponse);

if (ufoResponse === 'yes' || ufoResponse === 'y') {
  alert('I want to believe you\'re telling the truth ' + usernameResponce);
} else if (ufoResponse === 'no' || ufoResponse === 'n') {
  alert('Yea me neither maybe one day.');
} else {
  alert('I guess conspiracies are not your thing ' + usernameResponce);
}

// Question 5
var cookResponse = prompt('Do you think I cook everday?').toLowerCase();
console.log('cookResponse', cookResponse);

if (cookResponse === 'yes' || cookResponse === 'y') {
  alert('Wrong!');
} else if (cookResponse === 'no' || cookResponse === 'n') {
  alert('You may have a chance yet ' + usernameResponce);
} else {
  alert('okay ' + usernameResponce);
}

// Question 6
// while age responce isnt 36 the loop continues to prompt the question. 
// when the answer is correct the loop ends and we ther lmao alert.

// var attemptsRemaining = 4;

// while(attemptsRemaining > 0 && ageResponse !== 36) {
//   var ageResponse = parseInt(prompt('How old is Lindsay Lohan? You have ' + attemptsRemaining + ' chances'));
//   attemptsRemaining--;

//   console.log('ageResponse', ageResponse);

//   var ageDiff;
//   if (ageResponse === 36 || ageResponse === 'thirty six') {
//     alert('Lmao how do you even know that');
//   } else if (attemptsRemaining === 0) {
//     alert(' you now have ' + attemptsRemaining + ' attempts left. Google is your friend.');
//   } else if (isNaN(ageResponse)) {
//     alert('Pick a number any number you have ' + attemptsRemaining + ' attempts left.');
//   } else if (ageResponse < 36) {
//     alert('Pick a higher number! you have ' + attemptsRemaining + ' attempts left.');
//     ageDiff = 36 - ageResponse;
//     console.log('You are off by ' + ageDiff + ' years');
//   } else if (ageResponse > 36) {
//     alert('Try lower ' + ' you now have ' + attemptsRemaining + ' attempts left.');
//   } 
//   console.log(ageResponse + 1);


//Question 7: As a developer, I want to add a seventh question to my guessing game that has multiple possible correct 
// answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so 
// that even more of my programming skills are showcased. For now, I will structure this question so that the user has six 
// tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the 
// user indicating all of the possible correct answers
// upon correct or end of 6 tries tell them the whole array
// HERE IS A SAMPLE ARRAY:
// var myArray = ['Catherine', 'Jamie', 'Lucy'];

// var attemptsRemaining = 3;
// const stateArray = ['new york', 'california', 'washington'];

// while(attemptsRemaining > 0 && (stateResponse !== stateArray[0] || stateResponse !== stateArray[1] || stateResponse || stateArray[2])) {
//   var stateResponse = prompt('Can you guess a state that I have lived in besides North Carolina?').toLowerCase();
//   attemptsRemaining--;

//   console.log('stateResponse', stateResponse);
//   console.log('stateArray', stateArray);
//   if (stateResponse === stateArray[0] || stateResponse === stateArray[1] || stateResponse === stateArray[2]) {
//     alert('Correct');
//     stateArray.includes(stateResponse);
//   } else if (attemptsRemaining === 0) {
//     alert('All the states I\'ve lived in besides NC are ' + stateArray);
//   } else {
//     alert('All the states I\'ve lived in besides NC are ' + stateArray);
//   }
// }