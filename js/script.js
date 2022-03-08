// array to represent Akan names
let males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi", "Kwame"];

let females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let inputAction = document.getElementById("submit").addEventListener("click", submitDates);

function submitDates() {
  let birthday = document.getElementById("birthday").value;
  let d = new Date(birthday);
  let day = d.getDay()
  let gender = document.getElementById("gender").value;

  if (isNaN(d) || gender == "") {
    alert("you need to enter a date and gender!");
  } 
  else if (gender == "male" && day == 0) {
    outPut.textContent = `Your akan name is:${males[0]}`
  }
   else if (gender == "female" && day == 0) {
    outPut.textContent = `Your akan name is:${females[0]}`
  }
  else if (gender == "male" && day == 1) {
    outPut.textContent = `Your akan name is:${males[1]}`;
  }
  else if (gender == "female" && day == 1) {
    outPut.textContent = `Your akan name is:${females[1]}`
  }
  else if (gender == "male" && day == 2) {
    outPut.textContent = `Your akan name is:${males[2]}`
  }
  else if (gender == "female" && day == 2) {
    outPut.textContent = `Your akan name is:${females[2]}`
  }
  else if (gender == "male" && day == 3) {
    output.textContent = `Your akan name is:${males[3]}`
  }
  else if (gender == "female" && day == 3) {
    output.textContent = `Your akan name is:${males[3]}`
  }
  else if (gender == "male" && day == 4) {
    outPut.textContent = `Your akan name is:${males[4]}`
  }
  else if (gender == "female" && day == 4) {
    outPut.textContent = `Your akan name is:${females[4]}`
  }
  else if (gender == "male" && day == 5) {
    outPut.textContent = `Your akan name is:${males[5]}`
  }
  else if (gender == "female" && day == 5) {
    outPut.textContent = `Your akan name is:${females[5]}`
  }
  else if (gender == "male" && day == 6) {
    outPut.textContent = `Your akan name is:${males[6]}`
  }
  else if (gender == "female" && day == 6) {
    outPut.textContent = `Your akan name is:${females[6]}`
  }
}
