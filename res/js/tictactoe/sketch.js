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

	document.getElementById("btn-2players").addEventListener("click", () => {
		initGame(new TictactoeUI(board));
	});

	initGame(new TictactoeUI_AI(board, TictactoeAI));
}


function initGame(game) {
	_game = game;
	document.getElementById("mainmenu").style.display = "none";
	document.getElementById("gamemenu").style.display = "flex";
}