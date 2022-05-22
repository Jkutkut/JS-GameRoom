class Tictactoe {

	static UNDEFINED = 0;
	static CROSS = -1;
	static CIRCLE = 1;

	constructor(board) {
		this.initBoard(board);

		this.turn = Tictactoe.CROSS;
		this._running = true;
		this.updateUI();

		this.click(2, 0);
		this.click(0, 0);
		this.click(0, 1);
		this.click(1, 1);
		this.click(0, 2);
		this.click(2, 2);
		this.click(2, 1); // Does not execute
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
		if (!this.running)
			f = Tictactoe.disableCell;
		else if (this.turn == Tictactoe.CROSS)
			f = Tictactoe.enableCross;
		else
			f = Tictactoe.enableCircle;

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (this.board[i][j] == Tictactoe.UNDEFINED) {
					f(this.UIboard[i][j]);
				}
			}
		}
	}

	// Getters

	get running() {
		return this._running;
	}

	get UIboard() {
		return this._uiboard;
	}

	get board() {
		return this._board;
	}

	// Control

	click(x, y) {
		if (!this.running)
			return;
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
		this.checkBoard();
		this.updateUI();
	}

	mouseClick(x, y) {
		this.click(x, y);
	}

	checkBoard() {
		let winner = Tictactoe.UNDEFINED;
		let solCells = [];
		for (let i = 0, j, row, col; i < 3; i++) {
			row = 0;
			col = 0;
			for (j = 0; j < 3; j++) {
				row += this.board[i][j];
				col += this.board[j][i];
			}
			if (row == Tictactoe.CIRCLE * 3 || col == Tictactoe.CIRCLE * 3) {
				winner = Tictactoe.CIRCLE;
				solCells = this.board[i];
				break;
			}
			else if (row == Tictactoe.CROSS * 3 || col == Tictactoe.CROSS * 3) {
				winner = Tictactoe.CROSS;
				for (j = 0; j < 3; j++)
					solCells.push(this.UIboard[j][i]);
				break;
			}
		}
		if (winner == Tictactoe.UNDEFINED) {
			// Diagonals
			if (this.board[0][0] + this.board[1][1] + this.board[2][2] == 3) {
				winner = Tictactoe.CROSS;
				solCells = [this.UIboard[0][0], this.UIboard[1][1], this.UIboard[2][2]];
			}
			else if (this.board[0][0] + this.board[1][1] + this.board[2][2] == -3) {
				winner = Tictactoe.CIRCLE;
				solCells = [this.UIboard[0][0], this.UIboard[1][1], this.UIboard[2][2]];
			}
		}

		if (winner != Tictactoe.UNDEFINED) {
			if (winner == Tictactoe.CROSS)
				console.log("Cross wins");
			else
				console.log("Circle wins");
			for (let cell of solCells)
				Tictactoe.markAsSolution(cell);
			this._running = false;
		}

	}

	// UI logic

	static getCross(cell) {
		return cell.getElementsByClassName("cross")[0];
	}
	
	static getCircle(cell) {
		return cell.getElementsByClassName("circle")[0];
	}

	static markAsSolution(cell) {
		cell.classList.add("solution");
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

	static disable(cellElement) {
		cellElement.classList.add("unselected");
		cellElement.classList.remove("selected");
	}

	static enableCross(cell) {
		Tictactoe.unselect(Tictactoe.getCircle(cell));
		Tictactoe.enable(Tictactoe.getCross(cell));
	}

	static enableCircle(cell) {
		Tictactoe.unselect(Tictactoe.getCross(cell));
		Tictactoe.enable(Tictactoe.getCircle(cell));
	}

	static disableCell(cell) {
		Tictactoe.disable(Tictactoe.getCross(cell));
		Tictactoe.disable(Tictactoe.getCircle(cell));
	}
}