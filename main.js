let ticketkms = document.querySelector("#trip-km");
let age = document.querySelector("#age-input");
let ticketPrice;
const buyTicketBtn = document.querySelector("#buyTicketBtn");
const displayKM = document.querySelector("#km-display");
const displayDisc = document.querySelector("#discount");
const displayTotalPrice = document.querySelector("#display-tot");
const errMsg = document.querySelector(".err");
const pricePerKm = 0.21;

buyTicketBtn.addEventListener("click", function () {
  ticketkms = Number(ticketkms.value);
  age = Number(age.value);
  console.log(ticketkms, age);
  ticketPrice = Math.round(ticketkms * pricePerKm);
  console.log("FullPrice:" + ticketPrice);
  let seniorDiscount = ticketPrice * 0.4;

  let juniorDiscount = ticketPrice * 0.2;
  console.log(seniorDiscount, juniorDiscount);
  if (ticketkms.value == 0 || !ticketkms) {
    errMsg.innerHTML = "Must fill km field and can not be 0";
  } else if (age >= 65) {
    ticketPrice = ticketPrice - seniorDiscount;
    displayKM.innerHTML = `Journey Length: ${ticketkms} KMs`;
    displayDisc.innerHTML = `Based on your age a 40% discount got applied`;
    displayTotalPrice.innerHTML = `Total price: ${ticketPrice} € `;
  } else if (age <= 18 && age !== 0) {
    ticketPrice = ticketPrice - juniorDiscount;
    displayKM.innerHTML = `Journey Length: ${ticketkms} KMs`;
    displayDisc.innerHTML = `Based on your age a 20% discount got applied`;
    displayTotalPrice.innerHTML = `Total price: ${ticketPrice} € `;
  } else {
    displayKM.innerHTML = `Journey Length: ${ticketkms} KMs`;
    displayDisc.innerHTML = `No discount applied `;
    displayTotalPrice.innerHTML = `Total price: ${ticketPrice} € `;
  }
});
