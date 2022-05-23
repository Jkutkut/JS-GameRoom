class TictactoeUI_AI extends TictactoeUI {
	constructor(board, aiType) {
		super(board);
		this.ai = Tictactoe.CROSS;
		this.human = Tictactoe.CIRCLE;
		this.aiLogic = new aiType(this);

		// this.turn = this.ai;
		this.aiClick();
	}

	aiClick() {
		if (this.turn != this.ai)
			return;

		let move = this.aiLogic.bestMove(this.board);
		console.log(move);
		this.click(...move);
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