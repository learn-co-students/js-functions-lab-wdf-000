// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}


function happyHolidaysTo(name){
  if (typeof(name) === "undefined"){
    var name = "hermione";
  }
  return "Happy holidays, ${name}!";
}

function happyHolidaysTo(holiday, name){
  if (typeof(holiday) === "undefined"){
    var holiday = "eid";
  }
  if (typeof(name) === "undefined"){
    var name = "bibi";
  }
  return "Happy ${holiday}, ${name}!";
}

function holidayCountdown(holiday, days){
  if (typeof(holiday) === "undefined"){
    var holiday = "eid";
  }
  if (typeof(days) === "undefined"){
    var days = 23;
  }
  return "It's ${days} days until ${holiday}!";
}
