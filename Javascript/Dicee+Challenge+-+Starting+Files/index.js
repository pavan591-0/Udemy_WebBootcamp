alert(
  "Hi, Welcome to the Dice Game. Guess which player gets the highest count."
);

function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

var amount = 10000;

// if (performance.getEntriesByType("navigation")[0].type === "reload") {
function callGuess() {
  var guess = document.getElementById("win").value.toLowerCase();
  var betMoney = parseInt(document.getElementById("amount").value);

  if (amount < 1000) {
    alert("You can't bet anymore. please refresh to start anew.");
  } else if(amount < betMoney){
    alert("Insufficient funds.");
  } else {
    var x, y;
    do {
      x = randomNumber();
      y = randomNumber();
    } while (x == y);
    var imgVal1 = "./images/dice" + x + ".png";
    var imgVal2 = "./images/dice" + y + ".png";
    document.querySelector(".img1").setAttribute("src", imgVal1);
    document.querySelector(".img2").setAttribute("src", imgVal2);

    if (x > y && guess == "player1") {
      document.querySelector("h1").innerHTML = "You won 🎉🎊";
      amount += betMoney;
    } else if (x < y && guess == "player2") {
      document.querySelector("h1").innerHTML = "You won 🎉🎊";
      amount += betMoney;
    } else {
      document.querySelector("h1").innerHTML = "Better luck next time";
      amount -= betMoney;
    }
    document.querySelector(".finalamount").innerHTML = "Amount <em>"+amount+"</em>" ;
  }
}
