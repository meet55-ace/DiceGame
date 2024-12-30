document.getElementById("rollButton").addEventListener("click", function () {
  const leftDice = document.getElementById("leftDice");
  const rightDice = document.getElementById("rightDice");
  const heading = document.querySelector("h1");

  // Add animation classes
  leftDice.classList.add("animate");
  rightDice.classList.add("animate");
  heading.classList.add("animate");

  setTimeout(() => {
      leftDice.classList.remove("animate");
      rightDice.classList.remove("animate");
      heading.classList.remove("animate");

      
      const random1 = Math.floor(Math.random() * 6) + 1;
      const random2 = Math.floor(Math.random() * 6) + 1;

      
      leftDice.setAttribute("src", `images/dice${random1}.png`);
      rightDice.setAttribute("src", `images/dice${random2}.png`);

      // Update heading text
      if (random1 > random2) {
          heading.innerHTML = "Player 1 wins! 🎉";
      } else if (random1 < random2) {
          heading.innerHTML = "Player 2 wins! 🎉";
      } else {
          heading.innerHTML = "It's a Draw! 🤝";
      }
  }, 500); 
});

document.getElementById("rollButton").addEventListener("click", rollDice);

// Add keydown event for Enter key
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        rollDice();
    }
});
