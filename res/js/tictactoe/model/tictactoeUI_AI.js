class TictactoeUI_AI extends TictactoeUI {
	constructor(board, aiType) {
		super(board);
		this.ai = Tictactoe.CIRCLE;
		this.human = Tictactoe.CROSS;
		this.aiLogic = new aiType(this);

		this.turn = this.ai;
		this.aiClick();
	}

	aiClick() {
		if (this.turn != this.ai)
			return;

		let move = this.aiLogic.bestMove(this.board);
		console.log(move);
		this.click(...move);
	}

	mouseClick(x, y) {
		if (this.turn == this.ai)
			return;

		super.mouseClick(x, y);
	}
}