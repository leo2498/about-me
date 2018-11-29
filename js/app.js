'use strict';


var answersCorrect = 0;
console.log(answersCorrect);

function questionOne() {

  var whatGuess = prompt('What city do I come from?').toLowerCase();
  console.log('your answer is ' + whatGuess);

  if (whatGuess === 'la' || whatGuess === 'los angeles') {
    alert('That is correct!');
    answersCorrect++;
  } else {
    alert('That is incorrect!');
  }
}
questionOne();

function questionTwo() {

  var wouldYou = confirm('Would you like to proceed with my about me assigment?');
  console.log('want to continue ' + wouldYou);

  if (wouldYou) {
    alert('Great! Let\'s move foward');
  } else {
    alert('Well too bad because i need you to look at this to pass');
  }
}
questionTwo();

function questionThree() {

  var hasTraveled = prompt('Do you think I have traveled out of the United States? Please respond with Y or N.').toLowerCase();
  console.log('Have i traveled? ' + hasTraveled);

  if (hasTraveled === 'no' || hasTraveled === 'n') {
    alert('Sadly, you are correct, I have not been outside of the US (yet)');
    answersCorrect++;
  } else if (hasTraveled === 'Y' || hasTraveled === 'y') {
    alert('No, I wish. Hopefully I can for my 21st birthday!');
  } else {
    alert('Please answer with Y or N!');
  }
}
questionThree();

function questionFour() {

  var amI = prompt('Am i over 6ft tall? Please respond with Y or N').toLowerCase();
  console.log('Am I 6ft tall? ' + amI);

  if (amI === 'n' || amI === 'no') {
    alert('Aha yes I am, I\'m actually 6\'2');
    answersCorrect++;
  } else if (amI === 'y' || amI === 'yes') {
    alert('You are correct!');
  } else {
    alert('Please answer with Y or N!');
  }
}
questionFour();

function questionFive() {
  var doI = prompt('Do I have any sibilings? Please respond with Yes or No. ').toLowerCase();
  console.log('Do I have any sibilings' + doI);

  if (doI === 'y' || doI === 'yes') {
    alert('Yes! I have multiple sibilngs.');
    answersCorrect++;
  } else if (doI === 'n ' || doI === 'no') {
    alert('Wrong, I am the youngest of 4');
  } else {
    alert('Please follow directions and answer with Yes or No');
  }
}
questionFive();

function questionSix() {
  var haveI = prompt('have i taken a nap during class? Please answer with Y or N').toLowerCase();
  console.log('Have i fallen asleep in class ' + haveI);

  if (haveI === 'yes' || haveI === 'y') {
    alert('Nope, althought I\'ve almost have after lecture.');
  } else if (haveI === 'no' || haveI === 'n') {
    alert('You are right! even though there has been some close calls');
    answersCorrect++;
  } else {
    alert('Please respond with Y or N');
  }
}
questionSix();

function questionSeven() {

  var didI = prompt('Have i ever glued my hand onto something? Please answer with Y or N.').toLowerCase();
  console.log('Have i glued my hand on anything ' + didI);

  if (didI === 'yes' || didI === 'y') {
    alert('You are absolutely right! ');
    answersCorrect++;
  } else if (didI === 'no' || didI === 'n') {
    alert('I wish you were wrong but its the truth sadly.');
  } else {
    alert('Please answer with Y or N');
  }
}
questionSeven();

var speedingTickets = 4;
var guessesRemaining = 4;

function questionEight() {

  while (guessesRemaining > 0) {
    var howManySpeedingTickets = prompt('Can you guess how many speeding tickets I\'ve gotten?');
    howManySpeedingTickets = parseInt(howManySpeedingTickets);
    console.log('speedingTickets: ' + howManySpeedingTickets);
    guessesRemaining--;

    if (howManySpeedingTickets === speedingTickets) {
      alert('You are correct! Not that im proud of them however.');
      console.log('Guess Correctly');
      answersCorrect++;
      break;
    } else if (howManySpeedingTickets < speedingTickets) {
      alert('Give it another shot, higher this time');
      console.log('Incorrect, Try a higher number' + howManySpeedingTickets);
      guessesRemaining--;
    } else if (howManySpeedingTickets > speedingTickets) {
      alert('Givee it another shot, lower this time. I\'ve been caught but not that many times.');
      console.log('Incorrect, Try a lower number.' + howManySpeedingTickets);
      guessesRemaining--;
    }
  }
  if (guessesRemaining === 0) {
    alert('Sadly you failed');
    console.log('Finally incorrect');
  }
}
questionEight();



var favoriteCarModels = ['camaro', 'corvette', 'audi rs7', 'challenger'];
var secondGuessRemaining = 5;
console.log(secondGuessRemaining);

function questionNine() {

  while (secondGuessRemaining > 0) {
    var myCars = prompt('Can you guess one of my favorite Cars?').toLowerCase();
    console.log();
    secondGuessRemaining--;
    
    for var 


  }