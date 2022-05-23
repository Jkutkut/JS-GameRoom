/**
 * Class with the logic of the AI for the TicTacToe game.
 * 
 * AI logic based on the Minimax Algorithm. Idea took from TheCodingTrain:
 * 
 * https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
 * 
 * https://youtu.be/I64-UTORVfU
 * 
 */
class TictactoeAI {

	constructor(game) {
		this.game = game;
	}

	bestMove() {
		let bestScore = -Infinity;
		let move = null;
		for (let i = 0, j, score; i < 3; i++) {
			for (j = 0; j < 3; j++) {
				if (this.game.board[i][j] == Tictactoe.UNDEFINED) {
					this.game.board[i][j] = this.game.ai;
					score = this.minmax(Tictactoe.CROSS == this.game.ai);
					this.game.board[i][j] = Tictactoe.UNDEFINED;
					if (score > bestScore) {
						console.log("updated best score: " + score);
						bestScore = score;
						move = [i, j];
					}
				}
			}
		}
		console.log(this.game.toString());
		return move;
	}

	minmax(maximizingCross) {
		let result = this.checkWinner();
		// if (result != null)
		// 	console.log("winner: " + result);
		if (result != null)
			return result;

		let f, signature, bestScore;
		if (maximizingCross) {
			f = Math.max;
			signature = Tictactoe.CROSS;
			bestScore = -Infinity;
		}
		else {
			f = Math.min;
			signature = Tictactoe.CIRCLE;
			bestScore = Infinity;
		}

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (this.game.board[i][j] !== Tictactoe.UNDEFINED)
					continue;
				this.game.board[i][j] = signature;
				bestScore = f(bestScore, this.minmax(!maximizingCross)); // Oposite, other player playing now
				this.game.board[i][j] = Tictactoe.UNDEFINED;
			}
		}
		return bestScore;
	}

	checkWinner() {
		const FILLED = Math.abs(Tictactoe.CROSS * 3);
		let openSpots = 0;

		for (let i = 0, r, c; i < 3; i++) {
			r = 0;
			c = 0;
			for (let j = 0; j < 3; j++) {
				if (this.game.board[i][j] == Tictactoe.UNDEFINED)
					openSpots++;
				else
					r += this.game.board[i][j];

				if (this.game.board[j][i] == Tictactoe.UNDEFINED)
					openSpots++;
				else
					c += this.game.board[j][i];
			}
			if (Math.abs(r) == FILLED)
				return this.game.board[i][0];
			if (Math.abs(c) == FILLED)
				return this.game.board[0][i];
		}

		let d1 = 0, d2 = 0;
		for (let i = 0; i < 3; i++) {
			d1 += this.game.board[i][i];
			d2 += this.game.board[i][2 - i];
		}
		if (Math.abs(d1) == FILLED ||
			Math.abs(d2) == FILLED)
			return this.game.board[1][1];

		if (openSpots == 0)
			return Tictactoe.UNDEFINED;
		return null;
	}
}