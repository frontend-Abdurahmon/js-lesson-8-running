

let elForm = document.querySelector(".running-form");
let elResult = document.querySelector(".result");
let elInput = document.querySelector(".running-input");
let elRainInput = document.querySelector(".rain-input");
let elGymInput = document.querySelector(".gym-input");
let elBtn = document.querySelector(".btn-js");


elForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let minTemp = 5
    let maxTemp = 30

    let temValue = elInput.value;
    let weatherGood = temValue >= minTemp && temValue <= maxTemp;
    let weatherRain = elRainInput.checked;
    let gymOpen = elGymInput.checked;

    if (temValue = "") {
        elResult.textContent = "enter your temp"

    } if (weatherGood && gymOpen) {
        elResult.textContent = "chiqamiz"
    } else if (weatherGood && weatherRain) {
        elResult.textContent = "chiqmaymiz"
    } else if (weatherGood) {
        elResult.textContent = "chiqamiz"
    };

});