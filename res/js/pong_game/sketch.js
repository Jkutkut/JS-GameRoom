window.onload = () => {
  document.getElementById("gamemenu").style.display = "none";

  document.getElementById("btn-start").onclick = () => {
    document.getElementById("gamemenu").style.display = "flex";
    document.getElementById("startmenu").style.display = "none";
    background(0);
  }

  document.getElementById("btn-easy").onclick = () => {
    document.getElementById("gamemenu").style.display = "none";
    document.getElementById("startmenu").style.display = "none";
    document.getElementsByClassName("p5Canvas")[0].style.display = "flex";

    background(0);
    setDifficulty("easy");
  }


}

function initGame(game, difficulty) {

}
