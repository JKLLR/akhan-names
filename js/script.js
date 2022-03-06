var birthday = document.getElementById("birthday");
var output = document.getElementById("outPut")
var sel = document.getElementById('gender');
var submitButton = document.getElementById("submit");

var submitDates = ()=> {
// check if date is selected
     if(!birthday.value){
         alert("You need to enter a date!")
  }
var userDob = new Date(birthday.value);

