const button = document.querySelector(".button");
const colorText = document.querySelector("span");
console.log(colorText)

function getRandomHexColor() {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256); // Random number between 0 and 255
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Convert decimal to hexadecimal
    var redHex = red.toString(16).padStart(2, '0'); // Ensure two digits
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');

    // Concatenate the components to form the color string
    var hexColor = '#' + redHex + greenHex + blueHex;

    return hexColor;
}

button.addEventListener("click", (e) => {
    e.preventDefault()
    var RandomColor = getRandomHexColor();
    document.body.style.backgroundColor = `${RandomColor}`;
    colorText.textContent = `${RandomColor}`
});
