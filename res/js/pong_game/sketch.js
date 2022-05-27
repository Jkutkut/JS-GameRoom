window.onload = () => {
  document.getElementById("gamemenu").style.display = "none";

  document.getElementById("btn-start").onclick = () => {
    document.getElementById("gamemenu").style.display = "flex";
    document.getElementById("game").style.display = "none";
    document.getElementById("startmenu").style.display = "none";
    background(0);
  }

  document.getElementById("btn-easy").onclick = () => {
    document.getElementById("game").style.display = "flex";
    document.getElementById("gamemenu").style.display = "none";
    document.getElementById("startmenu").style.display = "none";
    background(0);
    setDifficulty("easy");
  }


}

function initGame(game, difficulty) {

}
