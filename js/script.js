var birthday = document.getElementById("birthday");
var output = document.getElementById("outPut");
var sel = document.getElementById('gender');
var submitButton = document.getElementById("submit");

var submitDates = () => {
  //check if date is selected
      if (!birthday.value) {
          alert("you need to enter a date!")
      }
  var userDob = new Date(birthday.value);
  console.log(userDob);

  CC = userDob.getFullYear();
  CC = CC.toString().substr(0, 1);
  console.log(CC);

  YY = userDob.getFullYear();
  YY = YY.toString().substr(2, 3);
  console.log(YY);

  MM = userDob.getMonth();
  console.log(MM);

  DD = userDob.getDate();
  console.log(DD);
   
  var result = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;


  var males = ["Kwasi","Kwadwo","Kwabena","Kwaku"," Yaw","Kofi","Kwame"]

  var females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  if(getSelectedOption(sel).value == "male"){
    output.innerHTML = `Your akan name is:${males[result]}`
  }else {
    output.innerHTML = `Your akan name is:${females[result]}`
  }
};

//gets the gender option
function getSelectedOption(sel) {
    var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}