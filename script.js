var random1 = Math.random();
random1 = random1 * 6;
random1 = Math.floor(random1) + 1;
console.log(random1);

var random2 = Math.random();
random2 = random2 * 6;
random2 = Math.floor(random2) + 1;
console.log(random2);

var leftdice = document.getElementById("leftDice");
leftdice.setAttribute("src", "images/dice" + random1 + ".png");

var rightdice = document.getElementById("rightDice");
rightdice.setAttribute("src", "images/dice" + random2 + ".png");

var heading = document.querySelector("h1");

if (random1 > random2) {
  heading.innerHTML = "Player 1 wins! 🎉";
} else if (random1 < random2) {
  heading.innerHTML = "Player 2 wins! 🎉";
}
else{
  heading.innerHTML = "It's a Draw! 🤝"
}
