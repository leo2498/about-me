'use strict';

// CONDITIONAL LOGIC
// if/else

// if(condition) {
//   run this line of code
// } else {
//   run this code instead
// }

// if(condition) {
//   run this line of code
// } else if (condition 2) {
//   run this code
// } else {
//   run this code instead
// }

var whatGuess = prompt('What city do I come from?');
console.log('your answer is ' + whatGuess);

if(whatGuess === 'LA' || whatGuess === 'la' || whatGuess === 'La' || whatGuess === 'Los Angeles' || whatGuess === 'Los angeles' || whatGuess
=== 'los angles') {
  alert('That is correct!');
} else {
  alert('That is incorrect!');
}

var wouldYou = confirm('Would you like to proceed with my about me assigment?');
console.log('want to continue ' + wouldYou)

if(wouldYou) {
  alert('Great! Let\'s move foward');
} else {
  alert('Well too bad because i need you to look at this to pass');
}

// yes, YES, Yes, no, NO, No, y, Y, N, n, yeah, yep, nope

var hasTraveled = prompt('Do you think I have traveled out of the United States? Please respond with Y or N.');
console.log('Have i traveled? ' + hasTraveled);

if(hasTraveled === 'N' || hasTraveled === 'n') {
  alert('Sadly, you are correct, I have not been outside of the US (yet)');
} else if (hasTraveled === 'Y' || hasTraveled === 'y') {
  alert('No, I wish. Hopefully I can for my 21st birthday!');
} else {
  alert('Please answer with Y or N!');
}

var amI = prompt('Am i over 6ft tall? Please respond with Y or N');
console.log('Am I 6ft tall? ' + amI);

if(amI === 'N' || amI === 'n') {
  alert('Aha yes I am, I\'m actually 6\'2');
} else if (amI === 'Y' || amI === 'y') {
  alert('You are correct!');
} else {
  alert('Please answer with Y or N!');
}

var doI = prompt('Do I have any sibilings? Please respond with Yes or No. ');
console.log('Do I have any sibilings' + doI);

if(doI === 'Y' || doI === 'y' || doI === 'yes' || doI === 'Yes' || doI === 'YES' ) {
  alert('Yes! I have multiple sibilngs.');
} else if (doI === 'N' || doI === 'n ' || doI === 'No' || doI === 'NO' ) {
  alert('Wrong, I am the youngest of 4')
} else {
  alert('Please follow directions and answer with Yes or No');
}

