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

var whatGuess = prompt('What city do I come from?').toLowerCase(); 
console.log('your answer is ' + whatGuess );

if(whatGuess === 'la' || whatGuess === 'los angeles') {
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

var hasTraveled = prompt('Do you think I have traveled out of the United States? Please respond with Y or N.').toLowerCase();
console.log('Have i traveled? ' + hasTraveled);

if(hasTraveled === 'no' || hasTraveled === 'n') {
  alert('Sadly, you are correct, I have not been outside of the US (yet)');
} else if (hasTraveled === 'Y' || hasTraveled === 'y') {
  alert('No, I wish. Hopefully I can for my 21st birthday!');
} else {
  alert('Please answer with Y or N!');
}

var amI = prompt('Am i over 6ft tall? Please respond with Y or N').toLowerCase();
console.log('Am I 6ft tall? ' + amI);

if(amI === 'n' || amI === 'no') {
  alert('Aha yes I am, I\'m actually 6\'2');
} else if (amI === 'y' || amI === 'yes') {
  alert('You are correct!');
} else {
  alert('Please answer with Y or N!');
}

var doI = prompt('Do I have any sibilings? Please respond with Yes or No. ').toLowerCase();
console.log('Do I have any sibilings' + doI);

if(doI === 'y' || doI === 'yes' ) {
  alert('Yes! I have multiple sibilngs.');
} else if (doI === 'n ' || doI === 'no' ) {
  alert('Wrong, I am the youngest of 4')
} else {
  alert('Please follow directions and answer with Yes or No');
}

var haveI = prompt('have i taken a nap during class? Please answer with Y or N').toLowerCase();
console.log('Have i fallen asleep in class ' + haveI);

if(haveI === 'yes' || haveI === 'y' ) {
  alert('Nope, althought I\'ve almost have after lecture.'); 
} else if(haveI === 'no' || haveI === 'n') {
  alert('You are right! even though there has been some close calls');
} else {
  alert('Please respond with Y or N');
}


var didI = prompt('Have i ever glued my hand onto something? Please answer with Y or N.').toLowerCase();
console.log('Have i glued my hand on anything ' + didI );

if(didI === 'yes' || haveI === 'y') {
  alert('You are absolutely right! '); 
  } else if(didI === "no" || didI === 'n') {
    alert('I wish you were wrong but its the truth sadly.');
  } else { 
    alert('Please answer with Y or N')
}