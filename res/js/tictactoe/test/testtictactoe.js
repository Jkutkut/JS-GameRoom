// Import file ../ticTacToe.js

var Tictactoe = require("../model/tictactoe.js");

class TestResult {
	constructor(failed, msg=null) {
		this.failed = failed;
		this.msg = msg;
	}
}

class TestTictactoe {

	static TESTS = [
		"test_inits",
		"test_runs",
		"test_win_row",
		"test_win_col",
	];

	static test() {
		for (let i = 0; i < TestTictactoe.TESTS.length; i++) {
			let result = TestTictactoe[TestTictactoe.TESTS[i]]();
			if (result.failed) {
				console.error(`${TestTictactoe.TESTS[i]} failed:`);
				console.error(result.msg);
				console.error("");
				return;
			}
			else {
				console.log(`${TestTictactoe.TESTS[i]} [OK]`);
			}
		}
	}

	// Basic logic tests
	static test_inits() {
		try {
			let game = new Tictactoe();
		} catch (e) {
			return new TestResult(true, e);
		}
		return new TestResult(false);
	}

	static test_runs() {
		let game = new Tictactoe();
		let runs = game.running;
		return new TestResult(!runs, `running should be ${true} but is ${runs}`);
	}


	static test_win_row() {
		// Cross tests
		for (let i = 0; i < 3; i++) {
			let game = new Tictactoe();
			for (let j = 0; j < 3; j++) {
				game.click(i, j); // i should win
				game.click((i + 2) % 3, j);
			}
			let runs = game.running;
			if (runs)
				return new TestResult(
					true,
					"Game should be over:" +
					`Cross should win on row ${i} against row ${(i + 2) % 3}`
				);
			let winner = game.checkBoard();
			for (let j = 0; j < 3; j++) {
				if (winner[i][1] != i)
					return new TestResult(
						true,
						`Cross's cells should be on row ${i} but are on row ${winner[i][1]}`
					);
			}

			console.log(`  test_win_row cross_${i} [OK]`);
		}

		// Circle tests
		for (let i = 0; i < 3; i++) {
			let game = new Tictactoe();
			game.click((i + 1) % 3, 0);
			for (let j = 0; j < 3; j++) {
				game.click(i, j); // This should win
				game.click((i + 2) % 3, j);
			}
			let runs = game.running;
			if (runs)
				return new TestResult(
					true,
					"Game should be over:" +
					`Circle should win on row ${i} against row ${(i + 2) % 3}`
				);
			let winner = game.checkBoard();
			for (let j = 0; j < 3; j++) {
				if (winner[i][1] != i)
					return new TestResult(
						true,
						`Circle's cells should be on row ${i} but are on row ${winner[i][1]}`
					);
			}
			console.log(`  test_win_row circle_${i} [OK]`);
		}
		return new TestResult(false);
	}


	static test_win_col() {
		// Cross tests
		for (let i = 0; i < 3; i++) {
			let game = new Tictactoe();
			for (let j = 0; j < 3; j++) {
				game.click(j, i); // i should win
				game.click(j, (i + 2) % 3);
			}
			let runs = game.running;
			if (runs)
				return new TestResult(
					true,
					"Game should be over:" +
					`Cross should win on col ${i} against col ${(i + 2) % 3}`
				);
			let winner = game.checkBoard();
			for (let j = 0; j < 3; j++) {
				if (winner[i][0] != i)
					return new TestResult(
						true,
						`Cross's cells should be on col ${i} but are on col ${winner[i][0]}`
					);
			}

			console.log(`  test_win_col cross_${i} [OK]`);
		}

		// Circle tests
		for (let i = 0; i < 3; i++) {
			let game = new Tictactoe();
			game.click(0, (i + 1) % 3);
			for (let j = 0; j < 3; j++) {
				game.click(j, i); // This should win
				game.click(j, (i + 2) % 3);
			}
			let runs = game.running;
			if (runs)
				return new TestResult(
					true,
					"Game should be over:" +
					`Circle should win on col ${i} against col ${(i + 2) % 3}`
				);
			let winner = game.checkBoard();
			for (let j = 0; j < 3; j++) {
				if (winner[i][0] != i)
					return new TestResult(
						true,
						`Circle's cells should be on col ${i} but are on col ${winner[i][0]}`
					);
			}
			console.log(`  test_win_col circle_${i} [OK]`);
		}
		return new TestResult(false);
	}
}

// If running as main on nodejs
if (typeof window === "undefined") {
	TestTictactoe.test();
}