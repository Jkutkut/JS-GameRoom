class TictactoeUI_AI extends TictactoeUI {
	constructor(board, hability2win, ai, human) {
		super(board);
		this.ai = ai;
		this.human = human;
		this.aiLogic = new TictactoeAI(this);
		this.hability2win = hability2win;

		this.aiClick();
	}

	aiClick() {
		if (this.turn != this.ai || !this.running)
			return;

		if (Math.random() < this.hability2win) {
			console.log("Logic move");
			let move = this.aiLogic.bestMove(this.board);
			this.click(...move);
		}
		else {
			console.log("Random move");
			let i, j;
			while (true) { // Could be true because this runs only when this.running
				i = Math.floor(Math.random() * 3);
				j = Math.floor(Math.random() * 3);
				if (this.board[i][j] == Tictactoe.UNDEFINED) {
					this.click(i, j);
					return;
				}
			}
		}
	}

	click(x, y) {
		super.click(x, y);
		if (this.turn == this.ai && this.running)
			this.aiClick();
	}

	mouseClick(x, y) {
		if (this.turn == this.ai)
			return;

		super.mouseClick(x, y);
	}
}

class TicTacToeImposibleAI extends TictactoeUI_AI {
	static HABILITY_TO_WIN = 1;

	constructor(board) {
		super(board, TicTacToeImposibleAI.HABILITY_TO_WIN, Tictactoe.CROSS, Tictactoe.CIRCLE);
	}
}

class TictactoeMediumAI extends TictactoeUI_AI {
	static HABILITY_TO_WIN = 0.50;

	constructor(board) {
		if (Math.random() < 0.5)
			super(board, TictactoeMediumAI.HABILITY_TO_WIN, Tictactoe.CROSS, Tictactoe.CIRCLE);
		else
			super(board, TictactoeMediumAI.HABILITY_TO_WIN, Tictactoe.CIRCLE, Tictactoe.CROSS);
	}
}

class TictactoeEasyAI extends TictactoeUI_AI {
	static HABILITY_TO_WIN = 0.25;

	constructor(board) {
		if (Math.random() < 0.5)
			super(board, TictactoeEasyAI.HABILITY_TO_WIN, Tictactoe.CROSS, Tictactoe.CIRCLE);
		else
			super(board, TictactoeEasyAI.HABILITY_TO_WIN, Tictactoe.CIRCLE, Tictactoe.CROSS);
	}
}