window.onload = () => {
	document.getElementById("gamemenu").style.display = "none";
	document.getElementById("gameover").style.display = "none";
  
	document.getElementById("btn-start").onclick = () => {
	  document.getElementById("gamemenu").style.display = "flex";
	  document.getElementById("startmenu").style.display = "none";
	  document.getElementById("gameover").style.display = "none";
	  background(0);
	}
  
	document.getElementById("btn-easy").onclick = () => {
	  document.getElementById("gamemenu").style.display = "none";
	  document.getElementById("startmenu").style.display = "none";
	  document.getElementById("gameover").style.display = "none";
	  document.getElementsByClassName("p5Canvas")[0].style.display = "flex";
  
	  background(0);
	  setDifficulty("easy");
	}
  
	document.getElementById("btn-medium").onclick = () => {
	  document.getElementById("gamemenu").style.display = "none";
	  document.getElementById("startmenu").style.display = "none";
	  document.getElementById("gameover").style.display = "none";
	  document.getElementsByClassName("p5Canvas")[0].style.display = "flex";
  
	  background(0);
	  setDifficulty("medium");
	}
  
	document.getElementById("btn-impossible").onclick = () => {
	  document.getElementById("gamemenu").style.display = "none";
	  document.getElementById("startmenu").style.display = "none";
	  document.getElementsByClassName("p5Canvas")[0].style.display = "flex";
  
	  background(0);
	  setDifficulty("impossible");
	}
  
	document.getElementById("btn-restart").onclick = () => {
	  document.getElementById("gamemenu").style.display = "none";
	  document.getElementById("gameover").style.display = "none";
	  document.getElementsByClassName("p5Canvas")[0].style.display = "none";
  
	  background(0);
	  location.reload();
	}
  }
  
  
  
  
  