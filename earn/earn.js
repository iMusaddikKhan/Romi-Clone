const popupBtn = document.querySelector("#Eth")
const PopUp = document.querySelector("#popUp")
console.log(popupBtn, PopUp)

popupBtn.addEventListener("click", () => {
   PopUp.classList.toggle("open-menu")
   setTimeout(() => {
    PopUp.classList.remove("open-menu")
   }, 1500);
})