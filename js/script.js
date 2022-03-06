var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
var submitButton = document.getElementById("submit");
var submitDeets = () => {
  //check if month is valid
  if (month < 1 || month > 12) {
    alert("invalid date");
  }
};
