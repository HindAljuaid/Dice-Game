function playGameDice() {
  var randomNunmber1 = Math.floor(Math.random() * 6) + 1;
  var randomImage1 = "images/" + randomNunmber1 + ".jpg";

  var randomNunmber2 = Math.floor(Math.random() * 6) + 1;
  var randomImage2 = "images/" + randomNunmber2 + ".jpg";

  var img1 = document.querySelector("#image1");
  img1.setAttribute("src", randomImage1);

  var img2 = document.querySelector("#image2");
  img2.setAttribute("src", randomImage2);

  if (randomNunmber1 > randomNunmber2) {
    document.querySelector("h1").innerHTML = "Player 1 is the winner";
  } else if (randomNunmber1 < randomNunmber2) {
    document.querySelector("h1").innerHTML = "Player 2 is the winner";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

function playSound() {
  document.getElementById("my_audio").play();
}
window.onload = function() {
  playSound();
  playGameDice();
};
