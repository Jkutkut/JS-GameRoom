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
		"test_win_diag"
	];

	static test() {
		for (let i = 0; i < TestTictactoe.TESTS.length; i++) {
			let result = TestTictactoe[TestTictactoe.TESTS[i]]();
			if (result.failed) {
				console.error(`${TestTictactoe.TESTS[i]} [KO]:`);
				console.error("  " + result.msg);
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
			let s = 0;
			for (let j = 0; j < 3; j++) {
				if (winner[j][0] != i)
					return new TestResult(
						true,
						`Cross's cells should be on row ${i} but are on row ${winner[j][0]}`
					);
				s += winner[j][1];
			}
			if (s != 0 + 1 + 2)
				return new TestResult(
					true,
					`Cross's cells duplicated: ${s}`
				);

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
			let s = 0;
			for (let j = 0; j < 3; j++) {
				if (winner[j][0] != i)
					return new TestResult(
						true,
						`Circle's cells should be on row ${i} but are on row ${winner[j][0]}`
					);
				s += winner[j][1];
			}
			if (s != 0 + 1 + 2)
				return new TestResult(
					true,
					`Circle's cells duplicated: ${s}`
				);

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
			let s = 0;
			for (let j = 0; j < 3; j++) {
				if (winner[j][1] != i)
					return new TestResult(
						true,
						`Cross's cells should be on col ${i} but are on col ${winner[j][1]}`
					);
				s += winner[j][0];
			}
			if (s != 0 + 1 + 2)
				return new TestResult(
					true,
					`Cross's cells duplicated: ${s}`
				);

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
			let s = 0;
			for (let j = 0; j < 3; j++) {
				if (winner[j][1] != i)
					return new TestResult(
						true,
						`Circle's cells should be on col ${i} but are on col ${winner[j][1]}`
					);
				s += winner[j][0];
			}
			if (s != 0 + 1 + 2)
				return new TestResult(
					true,
					`Circle's cells duplicated: ${s}`
				);
			console.log(`  test_win_col circle_${i} [OK]`);
		}
		return new TestResult(false);
	}

	static test_win_diag() {
		// Principal diagonal test
		let game = new Tictactoe();
		game.click(0, 0);
		game.click(0, 1);
		game.click(1, 1);
		game.click(1, 2);
		game.click(2, 2);
		let runs = game.running;
		if (runs)
			return new TestResult(
				true,
				"Game should be over:" +
				`Cross should win on principal diagonal`
			);
		let winner = game.checkBoard();
		for (let j = 0; j < 3; j++) {
			if (winner[j][0] != winner[j][1])
				return new TestResult(
					true,
					`Cross's cells should be on principal diagonal but are on ${winner[j]}`
				);
		}
		console.log(`  test_win_diag principal [OK]`);

		// Secondary diagonal test
		game = new Tictactoe();
		game.click(2, 0);
		game.click(1, 0);
		game.click(1, 1);
		game.click(0, 1);
		game.click(0, 2);

		runs = game.running;
		if (runs)
			return new TestResult(
				true,
				"Game should be over:" +
				`Cross should win on secondary diagonal\n${game.toString()}`
			);
		winner = game.checkBoard();
		for (let j = 0; j < 3; j++) {
			if (winner[j][0] != j || winner[j][1] != 2 - j)
				return new TestResult(
					true,
					`Cross's cells should be on secondary diagonal but are on row ${winner[j]}\n${game.toString()}`
				);
		}
		console.log(`  test_win_diag secondary [OK]`);

		return new TestResult(false);
	}
}

// If running as main on nodejs
if (typeof window === "undefined") {
	TestTictactoe.test();
}