let greeting = ("Hey ");
let userName = prompt('What is your name?');
alert(greeting + userName + ' you are visiting our page!');
console.log('The users name is ' + userName);
  
let color = prompt('What is your favorite color?');
console.log('The users favorite color is ' + color);
alert(userName + ", your favorite color is " + color + ". That's unfortunate because we don't use " + color + " on our site.");

let hometown = prompt('Where are you from?');
console.log('The user is from ' + hometown );
alert(userName + " from " + hometown + " likes " + color + ". We're off to a rough start..." );

let food = prompt('What is your favorite food?');
console.log('The user likes ' + food);
alert("Phew, we really LOVE " + food + " too! " + userName + ", we won't hold it against you that you like " + color + " and you're from " + hometown + ".");