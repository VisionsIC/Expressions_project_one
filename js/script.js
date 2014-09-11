//Project One - Gas Usage Calculator.
var myMiles = prompt("Use Google Maps to determine the distance in miles it is to your work. Please enter the miles.") * 2; //user enters the miles per day their vehicle travels to work.
var myMPG = prompt("Google search your vehicle manufactorer to find out your MPG. Please enter the miles per gallon."); //user enters the miles per gallon their vehicle uses.
var myGPD = myMiles / myMPG; // calculates the miles driven divided by the vehicle's miles per gallon.
//console.log(myGPD); //prints out to the console.
var resultGPD = "You use roughly " + myGPD + "Gallons of gas per day to drive to work.";
alert(resultGPD);