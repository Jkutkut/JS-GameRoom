class Tictactoe {

	static UNDEFINED = 0;
	static CROSS = -1;
	static CIRCLE = 1;

	constructor() {
		this.initBoard();

		this.turn = Tictactoe.CROSS;
		this._running = true;
	}

	initBoard() {
		this._board = [];
		for (let i = 0; i < 3; i++) {
			this._board[i] = [];
			for (let j = 0; j < 3; j++) {
				this._board[i][j] = Tictactoe.UNDEFINED;
			}
		}
	}

	// Getters

	get running() {
		return this._running;
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
		if (this.turn == Tictactoe.CROSS)
			this.turn = Tictactoe.CIRCLE;
		else
			this.turn = Tictactoe.CROSS;
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
				for (j = 0; j < 3; j++)
					solCells.push([i, j]);
				break;
			}
			else if (row == Tictactoe.CROSS * 3 || col == Tictactoe.CROSS * 3) {
				winner = Tictactoe.CROSS;
				for (j = 0; j < 3; j++)
					solCells.push([j, i]);
				break;
			}
		}
		if (winner == Tictactoe.UNDEFINED) { // Diagonal1
			let d1 = 0;
			for (let i = 0; i < 3; i++) {
				d1 += this.board[i][i];
				solCells.push([i, i]);
			}
			if (d1 == Tictactoe.CROSS * 3)
				winner = Tictactoe.CROSS;
			else if (d1 == Tictactoe.CIRCLE * 3)
				winner = Tictactoe.CIRCLE;
		}
		if (winner == Tictactoe.UNDEFINED) { // Diagonal2
			let d2 = this.board[0][2] + this.board[1][1] + this.board[2][0];
			for (let i = 0; i < 3; i++) {
				d2 += this.board[i][2 - i];
				solCells.push([i, 2 - i]);
			}
			if (d2 == Tictactoe.CROSS * 3)
				winner = Tictactoe.CROSS;
			else if (d2 == Tictactoe.CIRCLE * 3)
				winner = Tictactoe.CIRCLE;
		}

		if (winner != Tictactoe.UNDEFINED) {
			if (winner == Tictactoe.CROSS)
				console.log("Cross wins");
			else
				console.log("Circle wins");
			this._running = false;
			return solCells;
		}
		return null;
	}
}