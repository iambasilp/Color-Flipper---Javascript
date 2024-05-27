const button = document.querySelector(".button");
const colorText = document.querySelector("span");
console.log(colorText)

const array = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getRandomHexColor(length) {
   let hex = "#";
   for(let i = 0 ; i < length; i++){
    const RandomIndex = Math.floor (Math.random() * array.length)
    hex += array[RandomIndex]
   }
   return hex
}

button.addEventListener("click", (e) => {
    e.preventDefault()
    var RandomColor = getRandomHexColor(6);
    console.log(RandomColor)
    document.body.style.backgroundColor = `${RandomColor}`;
    colorText.innerText = `${RandomColor}`
});
