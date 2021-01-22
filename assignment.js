// Kilometer to Meter conversion function

function kilometerToMeter(km){
    
if(km < 0){                      //invalid input validation
    return "invalid input";
}
else{
    var meter = km * 1000;
    return meter;
}
};






// Hotel cost calculation

function hotelCost(days) {

  if (days <= 0) {               //invalid input validation
    return "invalid input";
  } 
  else {
    var cost = 0;
    if (days <= 10) {
    var cost = days * 100;
    } 
    else if (days <= 20) {
      var forTenDays = 10 * 100;
      var remaining = days - 10;
      var forTwentyDays = remaining * 80;
      var cost = forTenDays + forTwentyDays;
    } 
    else {
      var forTenDays = 10 * 100;
      var forTwentyDays = 10 * 80;
      var remaining = days - 20;
      var remainingDays = remaining * 50;
      var cost = forTenDays + forTwentyDays + remainingDays;
    }
    return cost;
  }

};






// Budget calculator function of three items

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {

  var watchPriceTotal = numberOfWatch * 50;
  var mobilePriceTotal = numberOfMobile * 100;
  var laptopPriceTotal = numberOfLaptop * 500;

  if(arguments.length == 3) {        //input validation
    return (inTotalPrice = watchPriceTotal + mobilePriceTotal + laptopPriceTotal);
  }
    else {
    return "invalid input";
  }
};







// Finding largest string from an array.

function megaFriend(arr) {

  var maxChar = arr[0];

  if (arr.length == 0) {        //Empty array validation
    return "Empty array";
  }

  if (maxChar == "" || typeof maxChar == "number") {      //invalid input validation
    return "invalid input";
  }

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length > maxChar.length) {
      maxChar = arr[i];
    }

  }

  return maxChar;
};


