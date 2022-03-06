var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var submitButton = document.getElementById("submit");
var submitDeets = () => {
  //check if month is valid
  if (month.value < 1 || month.value > 12) {
      console.log(month.value)
    alert("invalid date:Check month");
  };
  //check if day is valid
  if (day.value <1 || day.value > 31) {
       console.log(day.value)
    alert("invalid date:Check day");
  };
};
