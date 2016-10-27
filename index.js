// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}


function happyHolidaysTo(name){
  if (typeof(name) === "undefined"){
    var name = "you";
  }
  return `Happy holidays, ${name}!`;
}








function happyHolidayTo(holiday, name){
  if (typeof(holiday) === "undefined"){
    var holiday = "eid";
  }
  if (typeof(name) === "undefined"){
    var name = "you";
  }
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday, days){
  if (typeof(holiday) === "undefined"){
    var holiday = "Mother's Day";
  }
  if (typeof(days) === "undefined"){
    var days = 20;
  }
  return `It's ${days} days until ${holiday}!`;
}
