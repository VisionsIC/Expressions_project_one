//Project One - Gas Usage Calculator.
var myMiles = prompt("Use Google Maps to determine the distance in miles it is to your work. Please enter the miles.") * 2; //user enters the miles per day their vehicle travels to work.
var myMPG = prompt("Google search your vehicle manufactorer to find out your MPG. Please enter the miles per gallon."); //user enters the miles per gallon their vehicle uses.
var myGPD = myMiles / myMPG; // calculates the miles driven divided by the vehicle's miles per gallon.
//console.log(myGPD); //prints out to the console.
var resultGPD = "You use roughly " + myGPD + "Gallons of gas per day to drive to work.";
alert(resultGPD);
var myDays = prompt("How many days do you work per week? Please enter the total days.") * 50; //user enters the weekly amount of days they work.
var myGTY = myDays * myGPD; // calculates the total of yealy days multiplied by the vehicle's gallons per day.
//console.log(myGPD); //prints out to the console.
var resultGTY = "You use roughly " + myGTY + "Gallons of gas per year to drive to work."; //Javascript displays the totals
alert(resultGTY);