//Prompt and Alert lesson.
var myMiles = prompt("Let's Determine how much gas is used per day to go to work. Please enter the miles."); //user enters the miles per day their vehicle travels to work.
var myMPG = prompt("Please enter the miles per gallon."); //user enters the miles per gallon their vehicle uses.
var myGPD = myMiles / myMPG; // calculates the miles driven divided by the vehicle's miles per gallon.
//console.log(myGPD); //prints out to the console.
var result = "You use roughly " + myGPD + "Gallons of gas per day to drive to work.";
alert(result);