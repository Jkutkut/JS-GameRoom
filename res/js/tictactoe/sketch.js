var _game;

window.onload = () => {
	document.getElementById("gamemenu").style.display = "none";

	let board = [];
	let cells = document.getElementsByClassName("cell");
	for (let i = 0; i < 3; i++) {
		board[i] = [];
		for (let j = 0; j < 3; j++) {
			board[i][j] = cells[i * 3 + j];
			board[i][j].addEventListener("click", (e) => {
				_game.mouseClick(i, j);
			});
		}
	}



	document.getElementById("btn-easy").addEventListener("click", () => {
		initGame(TictactoeEasyAI, board);
	});
	
	document.getElementById("btn-medium").addEventListener("click", () => {
		initGame(TictactoeMediumAI, board);
	});
	
	document.getElementById("btn-impossible").addEventListener("click", () => {
		initGame(TicTacToeImposibleAI, board);
	});

	document.getElementById("btn-2players").addEventListener("click", () => {
		initGame(TictactoeUI, board);
	});

	document.addEventListener('contextmenu', function(ev) {
		ev.preventDefault();
		location.reload();
	}, false);
}


function initGame(game, board) {
	_game = new game(board);
	document.getElementById("mainmenu").style.display = "none";
	document.getElementById("gamemenu").style.display = "flex";
}