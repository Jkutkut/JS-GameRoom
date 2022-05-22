class Tictactoe {

	static CROSS = 0;
	static CIRCLE = 1;

	constructor(board) {
		this._board = board;
		this.turn = Tictactoe.CROSS;

		console.log(this.board);


		for (let row of this.board) {
			for (let cell of row) {
				Tictactoe.select(Tictactoe.getCircle(cell));
			}
		}

		Tictactoe.enableCross(this.board[0][0]);
		Tictactoe.enableCross(this.board[0][1]);
		Tictactoe.enableCross(this.board[0][2]);

		Tictactoe.enableCircle(this.board[1][0]);
		Tictactoe.enableCircle(this.board[1][1]);
		Tictactoe.enableCircle(this.board[1][2]);
	}

	get board() {
		return this._board;
	}

	click(e) {
		console.log(e);
		console.log(e.target);
	}

	// UI logic

	static getCross(cell) {
		return cell.getElementsByClassName("cross")[0];
	}
	
	static getCircle(cell) {
		return cell.getElementsByClassName("circle")[0];
	}

	static select(cellElement) {
		cellElement.classList.add("selected");
		cellElement.classList.remove("unselected");
	}

	static unselect(cellElement) {
		cellElement.classList.remove("selected");
		cellElement.classList.add("unselected");
	}

	static enable(cellElement) {
		cellElement.classList.remove("selected");
		cellElement.classList.remove("unselected");
	}

	static enableCross(cell) {
		Tictactoe.unselect(Tictactoe.getCircle(cell));
		Tictactoe.enable(Tictactoe.getCross(cell));
	}

	static enableCircle(cell) {
		Tictactoe.unselect(Tictactoe.getCross(cell));
		Tictactoe.enable(Tictactoe.getCircle(cell));
	}
}