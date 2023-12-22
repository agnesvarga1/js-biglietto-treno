let ticketkms = document.querySelector("#trip-km");
let age = document.querySelector("#age-input");
const buyTicketBtn = document.querySelector("#buyTicketBtn");
const errMsg = document.querySelector(".err");
console.log(errMsg);
buyTicketBtn.addEventListener("click", function () {
  console.log(ticketkms.value, age.value);
  if (ticketkms.value == 0 || !ticketkms) {
    errMsg.innerHTML = "Must fill km field and can not be 0";
  }
});
