//liters to cups
var literToCup = function(litersInput) {
  return litersInput * 4;
}

var numLiters = parseFloat(prompt("How many liters?"));

alert("You have " + literToCup(numLiters) + " cups.");

//teaspoons tablespoons
var teaspoonsToTablespoons = function(teaspoonInput) {
  return teaspoonInput / 3;
}

var numTeaspoons = parseFloat(prompt("How many teaspoons?"));

alert("You have " + teaspoonsToTablespoons(numTeaspoons).toPrecision(5) + " tablespoons.");

//gallons to liters
var gallonsToLiters = function(gallonsInput) {
  return gallonsInput * 3.78541;
}

var numGallons = parseFloat(prompt("How many gallons?"));

alert("You have " + gallonsToLiters(numGallons).toPrecision(5) + " liters.");
