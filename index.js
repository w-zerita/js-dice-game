// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumberImg1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomNumberImg1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumberImg2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomNumberImg2);

var results = "";
if(randomNumber1 === randomNumber2) {
    results = "Draw!";
} else if(randomNumber1 < randomNumber2) {
    results = "Player 2 Wins! 🚩"
} else {
    results = "🚩 Player 1 Wins!"
}
document.querySelector("h1").textContent = results;