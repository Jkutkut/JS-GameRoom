class TictactoeUI_AI extends TictactoeUI {
	constructor(board, hability2win) {
		super(board);
		this.ai = Tictactoe.CROSS;
		this.human = Tictactoe.CIRCLE;
		this.aiLogic = new TictactoeAI(this);
		this.hability2win = hability2win;

		// this.turn = this.ai;
		this.aiClick();
	}

	aiClick() {
		if (this.turn != this.ai)
			return;

		if (Math.random() < this.hability2win) {
			console.log("Logic move");
			let move = this.aiLogic.bestMove(this.board);
			this.click(...move);
		}
		else {
			console.log("Random move");
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (this.board[i][j] == Tictactoe.UNDEFINED) {
						this.click(i, j);
						return;
					}
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
		super(board, TicTacToeImposibleAI.HABILITY_TO_WIN);
	}
}

class TictactoeMediumAI extends TictactoeUI_AI {
	static HABILITY_TO_WIN = 0.50;

	constructor(board) {
		super(board, TictactoeMediumAI.HABILITY_TO_WIN);
	}
}

class TictactoeEasyAI extends TictactoeUI_AI {
	static HABILITY_TO_WIN = 0.25;

	constructor(board) {
		super(board, TictactoeEasyAI.HABILITY_TO_WIN);
	}
}