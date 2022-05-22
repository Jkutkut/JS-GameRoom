class Tictactoe {

	static UNDEFINED = -1;
	static CROSS = 0;
	static CIRCLE = 1;

	constructor(board) {
		this.initBoard(board);

		this.turn = Tictactoe.CROSS;
		this.updateUI();
	}

	initBoard(board) {
		this._uiboard = board;
		this._board = [];
		for (let i = 0; i < 3; i++) {
			this._board[i] = [];
			for (let j = 0; j < 3; j++) {
				this._board[i][j] = Tictactoe.UNDEFINED;
			}
		}
	}

	updateUI() {
		let f;
		if (this.turn == Tictactoe.CROSS) {
			f = Tictactoe.enableCross;
		}
		else {
			f = Tictactoe.enableCircle;
		}

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (this.board[i][j] == Tictactoe.UNDEFINED) {
					f(this.UIboard[i][j]);
				}
			}
		}
	}

	// Getters

	get UIboard() {
		return this._uiboard;
	}

	get board() {
		return this._board;
	}

	// Control

	click(x, y) {
		if (this.board[x][y] != Tictactoe.UNDEFINED)
			return;
		
		this.board[x][y] = this.turn;
		if (this.turn == Tictactoe.CROSS) {
			Tictactoe.select(Tictactoe.getCross(this.UIboard[x][y]));
			this.turn = Tictactoe.CIRCLE;
		}
		else {
			Tictactoe.select(Tictactoe.getCircle(this.UIboard[x][y]));
			this.turn = Tictactoe.CROSS;
		}
		this.updateUI();
	}

	mouseClick(x, y) {
		this.click(x, y);
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