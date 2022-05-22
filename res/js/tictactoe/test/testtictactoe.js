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
		"test_inits"
	];

	static test() {
		for (let i = 0; i < TestTictactoe.TESTS.length; i++) {
			let result = TestTictactoe[TestTictactoe.TESTS[i]]();
			if (result.failed) {
				console.error(`${TestTictactoe.TESTS[i]} failed:`);
				console.error(result.message);
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
}

// If running as main on nodejs
if (typeof window === "undefined") {
	TestTictactoe.test();
}