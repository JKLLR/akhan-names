var birthday = document.getElementById("birthday").value;
var output = document.getElementById("outPut");
var sel = document.getElementById('gender');
var submitButton = document.getElementById("submit");

var submitDates = () => {
  //check if date is selected
      if (birthday == '') {
          alert("you need to enter a date!")
      }
    }