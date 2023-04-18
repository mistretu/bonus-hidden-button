function generateButtons() {
    var numButtons = document.getElementById("num-buttons").value;
    var buttonContainer = document.getElementById("button-container");
  
    // Verificăm dacă numărul introdus de utilizator este un număr valid
    if (isNaN(numButtons) || numButtons < 1) {
      alert("Enter a positive number!");
      return;
    }
  
    // Ștergem butoanele vechi din container
    buttonContainer.innerHTML = "";
  
    // Generăm n butoane și le adăugăm în container
    for (var i = 1; i <= numButtons; ++i) {
      var button = document.createElement("button");
      button.innerText = "Loser";
      button.addEventListener("click", function() {
        this.innerText = "Loser";
      });
  
      buttonContainer.appendChild(button);
    }
  
    // Alegem un buton la întâmplare și îi setăm clasa "winner"
    var winnerIndex = Math.floor(Math.random() * numButtons);
    var buttons = buttonContainer.getElementsByTagName("button");
    buttons[winnerIndex].innerText = "Winner";
    buttons[winnerIndex].classList.add("winner");
  }
  