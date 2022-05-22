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
		"test_win_row"
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
		return this.test_win_row01();
	}

	static test_win_row01() {
		let game = new Tictactoe();
		/*
		x x x
		. . .
		o o .
		*/
		game.click(0, 0);
		game.click(2, 0);
		game.click(0, 1);
		game.click(2, 1);
		game.click(0, 2);
		game.click(2, 2);
		let runs = game.running;
		if (runs)
			return new TestResult(true, "Game should be over");
		let winner = game.checkBoard();
		for (let i = 0; i < 3; i++) {
			if (winner[i][1] != 0)
				return new TestResult(true, "Winner should be on row 0 but is " + winner[i][1]);
		}
		return new TestResult(false);
	}
}

// If running as main on nodejs
if (typeof window === "undefined") {
	TestTictactoe.test();
}