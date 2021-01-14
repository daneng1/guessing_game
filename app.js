'use strict'

let score = 0
let greeting = ("Hey ");
let userName = prompt('Please enter your name');
alert(greeting + userName + ', thanks for visiting our page! We have a fun little quiz about our founder Dan! Play it to see how well you know him!');
console.log('The users name is ' + userName);

  
let travel = prompt ('Yes or No, I have visited four continents.', '');
console.log(travel);
let response1 =travel.toLowerCase();

if (response1 === "no" || response1 === "n") {
alert ('Thats right ' + userName + '! I have visited three continents!' ); 
score++;
}
else if (response1 === "yes" || response1 === "y") {
alert('Awe too bad ' + userName + ', the correct answer is three.'); 
}
else  {
alert('It seems you are having trouble typing ' + userName + '. Better luck on the next question!');
}
console.log('The users response was ' + response1);


let food = prompt ('Yes or No, My favorite food is ramen.', '');
console.log(food);
let response2 =food.toLowerCase();

if (response2 === "no" || response2 === "n") {
alert ('So sorry ' + userName + ', ramen IS my favorite food!' ); 
}
else if (response2 === "yes"  || response2 === "y") {
alert('Correct ' + userName + '! I love ramen and had it every day while visiting Japan!!'); 
score++;}
else  {
alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
}
console.log('The users response was ' + response2);


let pets = prompt ('Yes or No, I have chickens and a dog', '');
console.log(pets);
let response3 =pets.toLowerCase();

if (response3 === "no"  || response3 === "n") {
alert ('So sorry ' + userName + ', I do indeed have five chickens and a dog named Oscar.' ); }
else if (response3 === "yes"  || response3 === "y") {
alert('You are right ' + userName + '! I have five chickens and a dog named Oscar!!'); 
score++;}
else  {
alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
}
console.log('The users response was ' + response3);


let city= prompt ('Yes or No, I live in West Seattle', '');
console.log(city);
let response4 =city.toLowerCase();

if (response4 === "no"  || response4 === "n") {
alert ('Sorry ' + userName + ', this was an easy one. I do live in West Seattle.' ); }
else if (response4 === "yes"  || response4 === "y") {
alert('Well done ' + userName + '! I\'ve lived in West Seattle for 14 years!'); 
score++;}
else  {
alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
}
console.log('The users response was ' + response4);


let sports = prompt ('Yes or No, I enjoy snowboarding, trail running and backpacking.', '');
console.log(sports);
let response5 =sports.toLowerCase();

if (response5 === "no"  || response5 === "n") {
alert ('Oh geez ' + userName + ', this was an easy one. So sorry' ); }
else if (response5 === "yes" || response5 === "y") {
alert('Yep you are correct ' + userName + '! '); 
score++;}
else  {
alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
}
console.log('The users response was ' + response5);



var i=0
var myAnswer = 7
var response6 = 0
while (i < 4 && response6 != myAnswer) {
  var question = prompt('Okay ' + userName + ', now its time to guess a number between 1-10.', '');
  response6 = parseInt(question);
  console.log(response6);
  if (response6 === myAnswer) {
  alert ('Congrats, you guessed it!!'); score++;
  break; 
  }
  if(i===3) {
    alert('Sorry, you lose...better luck next time!!');
    break;
  }
  else {
  alert ('Sorry that was not the right answer. You have ' + (3-i) + ' more attempts.');
  i++;}
}

var arrayOfAnswers =['paris', 'new york', 'rome', 'seattle', 'denver', 'tokyo', 'london'];
var i=0;
while (i < 7 && response7 != arrayOfAnswers[2]) {
  var multipleChoice = prompt('Please select my favorite city: Paris, New York, Rome, Seattle, Denver,Tokyo, London', '');
  var response7 = multipleChoice.toLowerCase();
  if (response7 === arrayOfAnswers[2]) {
    alert('You guessed correctly!'); score++;
    break;
  }
    else {
      alert('Sorry ' + userName + ', try again. You have ' + (5-i) + ' more attempts.');
    i++}  
}
  
alert ('Thanks for playing our game! You guessed ' + score + ' answers correctly!!');





// let score = 50
// if (score >= 50) {
//   congratulate();
//  } else {
//    encourage();
//  }


//  'use strict';

// This one will work as a switch statement

// var favoriteLanguage = prompt('What is your favorite programming language?').toUpperCase();
// var beginning = ("You're favorite programming language is ");

// switch (favoriteLanguage){
//   case"JAVASCRIPT":
//   alert (beginning + favoriteLanguage);
//   break;
//   case"JAVA":
//   alert (beginning + favoriteLanguage);
//   break;
// }

// var condition = -2;
// while (condition) {
//   console.log('truthy' + condition);
//   condition++;
//   condition = false;
//   console.log('loop is done'); 
// }

// var arrayOfQuestions = ['Please enter your name', 'Yes or No, I have visited four continents.', 'Yes or No, My favorite food is ramen.', 'Yes or No, I have chickens and a dog', 'Yes or No, I live in West Seattle', 'Yes or No, I enjoy snowboarding, trail running and backpacking.'];
// var arrayOfAnswers = [];
// var userName = arrayOfAnswers[0];


// for (var i = 0; i < arrayOfQuestions.length; i++) {
//   console.log(arrayOfAnswers);

//   if (arrayOfAnswers[1] === "no" || arrayOfAnswers[1] === "n") {
//     alert ('Thats right ' + userName + '! I have visited three continents!' ); }
//     else if (arrayOfAnswers[1] === "yes" || arrayOfAnswers[1] === "y") {
//     alert('Awe too bad ' + userName + ', the correct answer is three.'); }
//     else  {
//     alert('It seems you are having trouble typing ' + userName + '. Better luck on the next question!');
//     }
//     console.log('The users response was ' + arrayOfAnswers[1]);
    
//   var answer = prompt(arrayOfQuestions[i]);

//   arrayOfAnswers.push(answer);


//   console.log(userName);
// }

// console.log('loop is done', arrayOfAnswers);