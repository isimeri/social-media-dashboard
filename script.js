const darkBtn = document.querySelector("#dark-mode");
const supremeContainer = document.querySelector(".supreme-container");
const cardContainers = document.querySelectorAll(".card-container");
const bigHeader = document.querySelector(".big-header");
const smallCardNumbers = document.querySelectorAll(".small-card-number");
const followersTotalNumbers = document.querySelectorAll(".followers-total-number");
const attribution = document.querySelector(".attribution");

window.addEventListener('load', (event) => {
    darkBtn.checked = false;
  });
darkBtn.addEventListener("change", modeSwitch);
function modeSwitch(){
    if(darkBtn.checked)
    {
        supremeContainer.classList.add("dark");
        cardContainers.forEach(card => {
            card.classList.add("dark");
        });
        bigHeader.classList.add("dark");
        smallCardNumbers.forEach(cardNumber => {
            cardNumber.classList.add("dark");
        });
        followersTotalNumbers.forEach(followers => {
            followers.classList.add("dark");
        });
        attribution.classList.add("dark");
    }
    else
    {
        supremeContainer.classList.remove("dark");
        cardContainers.forEach(card => {
            card.classList.remove("dark");
        });
        bigHeader.classList.remove("dark");
        smallCardNumbers.forEach(cardNumber => {
            cardNumber.classList.remove("dark");
        });
        followersTotalNumbers.forEach(followers => {
            followers.classList.remove("dark");
        });
        attribution.classList.remove("dark");
    }
}