'use strict'

let score = 0
let greeting = ("Hey ");
let userName = prompt('Please enter your name');
alert(greeting + userName + ', thanks for visiting our page! We have a fun little quiz about our founder Dan! Play it to see how well you know him!');
console.log('The users name is ' + userName);



function question1(response1) {
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
}
   //console.log(travel);
   question1(prompt ('Yes or No, I have visited four continents.', '').toLowerCase())



//declaration of 2nd function
function question2(response2) {
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
  }
  
  //calling 2nd function
  question2(prompt ('Yes or No, My favorite food is ramen.', '').toLowerCase())
  



function question3(response3) {
  if (response3 === "no"  || response3 === "n") {
    alert ('So sorry ' + userName + ', I do indeed have five chickens and a dog named Oscar.' ); }
    else if (response3 === "yes"  || response3 === "y") {
    alert('You are right ' + userName + '! I have five chickens and a dog named Oscar!!'); 
    score++;}
    else  {
    alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
    }
    console.log('The users response was ' + response3);
}

question3(prompt ('Yes or No, I have chickens and a dog', '').toLowerCase())



function question4(response4) {
  if (response4 === "no"  || response4 === "n") {
    alert ('Sorry ' + userName + ', this was an easy one. I do live in West Seattle.' ); }
    else if (response4 === "yes"  || response4 === "y") {
    alert('Well done ' + userName + '! I\'ve lived in West Seattle for 14 years!'); 
    score++;}
    else  {
    alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
    }
    console.log('The users response was ' + response4);
}

question4(prompt ('Yes or No, I live in West Seattle', '').toLowerCase())





function question5(response5){

  if (response5 === "no"  || response5 === "n") {
    alert ('Oh geez ' + userName + ', this was an easy one. So sorry' ); }
    else if (response5 === "yes" || response5 === "y") {
    alert('Yep you are correct ' + userName + '! '); 
    score++;}
    else  {
    alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
    }
    console.log('The users response was ' + response5);
}

question5(prompt ('Yes or No, I enjoy snowboarding, trail running and backpacking.', '').toLowerCase())



var i=0
var myAnswer = 7
var response6 = 0
function guessingNumber() {

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
}

guessingNumber()

var arrayOfAnswers =['paris', 'new york', 'rome', 'seattle', 'denver', 'tokyo', 'london'];
var i=0;
function guessCity() {
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
  }
  
  guessCity();
  
alert ('Thanks for playing our game! You guessed ' + score + ' answers correctly!!');


