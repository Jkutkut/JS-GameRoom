var _game;

window.onload = () => {
	document.getElementById("mainmenu").style.display = "none";
	document.getElementById("gamemenu").style.display = "flex";

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
	_game = new TictactoeUI(board);
}