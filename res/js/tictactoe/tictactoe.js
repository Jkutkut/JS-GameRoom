var _board;

window.onload = () => {
	document.getElementById("mainmenu").style.display = "none";
	document.getElementById("gamemenu").style.display = "flex";

	_board = [];
	let cells = document.getElementsByClassName("cell");
	console.log(cells);
	for (let i = 0; i < 3; i++) {
		_board[i] = [];
		for (let j = 0; j < 3; j++) {
			_board[i][j] = cells[i * 3 + j];

		}
	}


	// selectAll(getCross);
	selectAll(getCircle);
}


function selectAll(f) {
	_board.forEach(row => {
		row.forEach(cell => {
			f(cell).classList.remove("unselected");
			f(cell).classList.add("selected");
		});
	});
}




function getCross(cell) {
	return cell.getElementsByClassName("cross")[0];
}

function getCircle(cell) {
	return cell.getElementsByClassName("circle")[0];
}