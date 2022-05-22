class TictactoeUI_AI extends TictactoeUI {

	static HUMAN = 0;
	static AI = 1;

	constructor(board, aiType) {
		super(board);
		this.ai = new aiType();

		this.turn = TictactoeUI_AI.AI;
	}

	aiClick() {
		if (this.turn == TictactoeUI_AI.HUMAN)
			return;

		let move = this.ai.click(this.board);
		this.click(...move);
	}

	mouseClick(x, y) {
		if (this.turn == TictactoeUI_AI.AI)
			return;

			super.mouseClick(x, y);
	}
}