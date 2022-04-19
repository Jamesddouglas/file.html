// alert('You are a minion')

const message = 'you are a CRETIN';

document.querySelector('#cretin').innerHTML = message;


const milesCalc = km => miles = (km / 2.59).toFixed(4);
//the above code is an arrow function which converts km to miles. 
// The milesCalc is the global variable which the function is pushed into. 
// The km is the single parameter residing in the function, which is why it has no (). 
// The  miles variable calculates by taking the parameter km and dividing it by 2.59. 
// I put the km/2.59 in brackets because i wanted to put .toFixed(2) at the end. 
// the .toFixed(2) method limits the results to 2 decimal places. 

document.querySelector('#squareMiles').innerHTML = milesCalc(40.42);
//the querySelector('#squareMiles') calls on the div in the html with the id of "squareMiles"


 