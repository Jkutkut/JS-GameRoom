class TictactoeUI extends Tictactoe {

	constructor(board) {
		super();
		this.initBoardUI(board);
		this.updateUI();
	}

	initBoardUI(board) {
		this._uiboard = board;
	}

	updateUI() {
		let f;
		if (!this.running)
			f = TictactoeUI.disableCell;
		else if (this.turn == TictactoeUI.CROSS)
			f = TictactoeUI.enableCross;
		else
			f = TictactoeUI.enableCircle;

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (this.board[i][j] == TictactoeUI.UNDEFINED) {
					f(this.UIboard[i][j]);
				}
			}
		}
	}

	// Getters

	get UIboard() {
		return this._uiboard;
	}

	// Control

	click(x, y) {
		if (!this.running)
			return;
		if (this.board[x][y] != Tictactoe.UNDEFINED)
			return;

		if (this.turn == Tictactoe.CROSS)
			TictactoeUI.select(TictactoeUI.getCross(this.UIboard[x][y]));
		else
			TictactoeUI.select(TictactoeUI.getCircle(this.UIboard[x][y]));
		super.click(x, y);
		this.updateUI();
	}

	checkBoard() {
		let solCells = super.checkBoard();
		if (solCells != null)
			for (let i = 0; i < solCells.length; i++)
				TictactoeUI.markAsSolution(this.UIboard[solCells[i][0]][solCells[i][1]]);
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
		TictactoeUI.unselect(TictactoeUI.getCircle(cell));
		TictactoeUI.enable(TictactoeUI.getCross(cell));
	}

	static enableCircle(cell) {
		TictactoeUI.unselect(TictactoeUI.getCross(cell));
		TictactoeUI.enable(TictactoeUI.getCircle(cell));
	}

	static disableCell(cell) {
		TictactoeUI.disable(TictactoeUI.getCross(cell));
		TictactoeUI.disable(TictactoeUI.getCircle(cell));
	}
}