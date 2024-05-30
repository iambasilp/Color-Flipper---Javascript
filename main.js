const button = document.querySelector(".button");
const colorText = document.querySelector("span");

const array = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getRandomHexColor(length) {
   let hex = "#";
   for(let i = 0 ; i < length; i++){
    const RandomIndex = Math.floor (Math.random() * array.length)
    hex += array[RandomIndex]
   }
   return hex
}

button.addEventListener("click", function(e){
    this.style.border = "thick solid #0000FF"
    e.preventDefault()
    var RandomColor = getRandomHexColor(6);
    document.body.style.backgroundColor = `${RandomColor}`;
    colorText.innerText = `${RandomColor}`
});


// how event works actually
    // event campturing
    // event triggering
    // event bubbling
    // stop propocation
    // event delegation
// how javascript callback function work
    // thread of excuetion
    // asynchrnous function
    // synchronous funciton
// how javascript arrow function works
    // allows to create funciton expression 
    // this keyword not bound to the function
    // IIFE
// how javascript works
