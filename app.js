'use strict';

//---------------------EXAMPLES----------------------
// var alerty = alert('hey how it going?');
// console.log('ALERTY: ', alerty); // undefined

// var address = prompt('where do you live?');
// console.log('ADDRESS: ', address); // string
// console.log('typeof address: ', typeof address);

// var confirmBox = confirm('are you sure you want to proceed?');
// console.log('CONFIRMBOX: ', confirmBox); // Boolean
//---------------------EXAMPLES----------------------

// TODO: tally up the users score (aka the correct/incorrect questions they answered)
// Then display different messages to the user after they complete all of them
// with the appropriate message.

var usernameResponce;
var score = 0;
const yesArray = ['yes', 'y', 'yep', 'yeah', 'yusss'];
const noArray = ['no', 'n', 'nah'];

function introQuestions() {
  usernameResponce = prompt('What name do you go by?');
  console.log('usernameResponce', usernameResponce);
  if (usernameResponce === '') {
    usernameResponce = 'anon';
    alert('It\'s okay if you\'re shy you can speak up ' + usernameResponce + '.');
  } else if (usernameResponce === null) {
    alert('YOU HIT CANCEL! Lets try this again');
    introQuestions();
  } else {
    alert('Bonjour ' + usernameResponce);
  }
}



// Question 1
// DONE: Refactor code to include a new array with the values
// 'yes', 'y', 'yep', 'yeah', 'yusss' and check to see if the workoutResponse includes
// these values. Do the same thing with the negative responses.


function question1() {
  var workoutResponse = prompt('Did I work out today?');
  console.log('workoutResponse', workoutResponse);
  if (workoutResponse === null) {
    workoutResponse = 'no';
  } else {
    workoutResponse = workoutResponse.toLowerCase();
    console.log('workout', workoutResponse);
  } if (yesArray.includes(workoutResponse)) {
    alert('Well wouldn\'t you like to know!');
    score++;
    console.log('score', score);
  } else if (noArray.includes(workoutResponse)) {
    alert('Guess again.');
  } else {
    alert('Plead the 5th I see... ' + usernameResponce);
  }
}

// Question 2
function question2() {
  var girlDadResponse = prompt('Got daughter?');
  console.log('girlDadResponse', girlDadResponse);
  if (girlDadResponse === null) {
    girlDadResponse = 'no';
  } else {
    girlDadResponse = girlDadResponse.toLowerCase();
  }
  if (yesArray.includes(girlDadResponse)) {
    alert('got one');
    score++;
    console.log('score', score);
  } else if (noArray.includes(girlDadResponse)) {
    alert('but she is');
  } else {
    alert('Next time try harder ' + usernameResponce);
  }
}



// Question 3
function question3() {
  var hairdoResponse = prompt('Did I get a haircut recently?');
  console.log('hairdoResponse', hairdoResponse);
  if (hairdoResponse === null) {
    hairdoResponse = 'no';
  } else {
    hairdoResponse = hairdoResponse.toLowerCase();
  }
  if (yesArray.includes(hairdoResponse)) {
    alert('feelin myself');
    score++;
    console.log('score', score);
  } else if (noArray.includes(hairdoResponse)) {
    alert('sorry but i actually did');
  } else {
    alert('You miss 100% of the shots you dont take ' + usernameResponce);
  }
}

// Question 4

function question4() {
  var ufoResponse = prompt('Have you ever seen a UFO?');
  console.log('ufoResponse', ufoResponse);
  if (ufoResponse === null) {
    ufoResponse = 'no';
  } else {
    ufoResponse = ufoResponse.toLowerCase();
  }
  if (yesArray.includes(ufoResponse)) {
    alert('I want to believe you\'re telling the truth ' + usernameResponce);
  } else if (noArray.includes(ufoResponse)) {
    alert('Yea me neither maybe one day.');
    score++;
    console.log('score', score);
  } else {
    alert('I guess conspiracies are not your thing ' + usernameResponce);
  }
}


// Question 5
function question5() {
  var cookResponse = prompt('Do you think I cook everday?');
  console.log('cookResponse', cookResponse);
  if (cookResponse === null) {
    cookResponse = 'no';
  } else {
    cookResponse = cookResponse.toLowerCase();
  }
  if (yesArray.includes(cookResponse)) {
    alert('Wrong!');
  } else if (noArray.includes(cookResponse)) {
    alert('You may have a chance yet ' + usernameResponce);
    score++;
    console.log('score', score);
  } else {
    alert('okay ' + usernameResponce);
  }
}

// Question 6
// while age responce isnt 36 the loop continues to prompt the question.
// when the answer is correct the loop ends and we ther lmao alert.

function question6() {

  var attemptsRemaining = 4;

  while(attemptsRemaining > 0 && ageResponse !== 36) {
    var ageResponse = parseInt(prompt('How old is Lindsay Lohan? You have ' + attemptsRemaining + ' chances'));
    attemptsRemaining--;

    console.log('ageResponse', ageResponse);

    var ageDiff;
    if (ageResponse === 36 || ageResponse === 'thirty six') {
      alert('Lmao how do you even know that');
      score++;
      console.log('score', score);
    } else if (attemptsRemaining === 0) {
      alert(' you now have ' + attemptsRemaining + ' attempts left. Google is your friend.');
    } else if (isNaN(ageResponse)) {
      alert('Pick a number any number you have ' + attemptsRemaining + ' attempts left.');
    } else if (ageResponse < 36) {
      alert('Pick a higher number! you have ' + attemptsRemaining + ' attempts left.');
      ageDiff = 36 - ageResponse;
      console.log('You are off by ' + ageDiff + ' years');
    } else if (ageResponse > 36) {
      alert('Try lower ' + ' you now have ' + attemptsRemaining + ' attempts left.');
    }
    console.log(ageResponse + 1);
  }
}

//Question 7: As a developer, I want to add a seventh question to my guessing game that has multiple possible correct
// answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so
// that even more of my programming skills are showcased. For now, I will structure this question so that the user has six
// tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the
// user indicating all of the possible correct answers
// upon correct or end of 6 tries tell them the whole array
// HERE IS A SAMPLE ARRAY:
// var myArray = ['Catherine', 'Jamie', 'Lucy'];

function question7() {
  var attemptsRemaining = 6;
  const stateArray = ['new york', 'california', 'washington'];

  while(attemptsRemaining > 0) {
    var stateResponse = prompt('Can you guess a state that I have lived in besides North Carolina? You have ' + attemptsRemaining + ' attempts remaining.');
    attemptsRemaining--;
    if (stateResponse === null) {
      stateResponse = 'no';
    } else {
      stateResponse = stateResponse.toLowerCase();
    }
    if (stateResponse === stateArray[0] || stateResponse === stateArray[1] || stateResponse === stateArray[2]) {
      // stateArray.includes(stateResponse); This is a refactored version of the line above.
      alert('Correct');
      attemptsRemaining = 0;
      score++;
    }
  }
  if (attemptsRemaining === 0) {
    alert('All the states I\'ve lived in besides NC are ' + stateArray);
  }
}


function tally() {
  if (score >4) {
    alert('You have answered ' + score + ' out of seven questions correctly. Thanks for getting to know me ' + usernameResponce + '!');
  } else if (score <4) {
    alert('sucks brah you got ' + score + ' out of seven questions correct.');
  }
}

introQuestions();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
tally();



// function question2() {
//   var girlDadResponse = prompt('Got daughter?').toLowerCase();
//   console.log('girlDadResponse', girlDadResponse);

//   if (girlDadResponse === 'yes' || girlDadResponse === 'y') {
//     alert('got one');
//     score++;
//     console.log('score', score);
//   } else if (girlDadResponse === 'no' || girlDadResponse === 'n') {
//     alert('but she is');
//   } else {
//     alert('Next time try harder ' + usernameResponce);
//   }
// }
