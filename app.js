'use strict'

let greeting = ("Hey ");
let userName = prompt('Please enter your name');
alert(greeting + userName + ', thanks for visiting our page! We have a fun little quiz about our founder Dan! Play it to see how well you know him!');
console.log('The users name is ' + userName);

  
let travel = prompt ('Yes or No, I have visited four continents.', '');
console.log(travel);
let response1 =travel.toLowerCase();

if (response1 === "no" || response1 === "n") {
alert ('Thats right ' + userName + '! I have visited three continents!' ); }
else if (response1 === "yes" || response1 === "y") {
alert('Awe too bad ' + userName + ', the correct answer is three.'); }
else  {
alert('It seems you are having trouble typing ' + userName + '. Better luck on the next question!');
}
console.log('The users response was ' + response1);


let food = prompt ('Yes or No, My favorite food is ramen.', '');
console.log(food);
let response2 =food.toLowerCase();

if (response2 === "no" || response2 === "n") {
alert ('So sorry ' + userName + ', ramen IS my favorite food!' ); }
else if (response2 === "yes"  || response2 === "y") {
alert('Correct ' + userName + '! I love ramen and had it every day while visiting Japan!!'); }
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
alert('You are right ' + userName + '! I have five chickens and a dog named Oscar!!'); }
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
alert('Well done ' + userName + '! I\'ve lived in West Seattle for 14 years!'); }
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
alert('Yep you are correct ' + userName + '! '); }
else  {
alert(userName + ' it seems you are having trouble typing \"yes or no\". Better luck on the next question!');
}
console.log('The users response was ' + response5);

alert('Thanks for playing our quiz! You may now enter our site!')