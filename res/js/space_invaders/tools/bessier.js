class Bessier {
	static _DEBUG = false;
	static bessier(steps, ...points) {
		const tIncrement = 1 / steps;
		const n = points.length - 1;
		const nFactorial = Bessier.factorial(n);
	
		let results = [];
		let factor, point;
		for (let t = 0, i; t <= 1; t += tIncrement) {
			point = new p5.Vector(0, 0);
			for (i = 0; i <= n; i++) {
				factor = nFactorial / (Bessier.factorial(i) * Bessier.factorial(n - i))
					* Math.pow(t, i) * Math.pow(1 - t, n - i);
				point.x += points[i].x * factor;
				point.y += points[i].y * factor;
			}
			results.push(point);
		}
		if (Bessier._DEBUG)
			Bessier.printBessier(points, results);
		return results;
	}

	static setDebug(debug) {
		Bessier._DEBUG = debug;
	}

	static factorial = (n) => {
		if (n <= 1) return 1;
		return n * Bessier.factorial(n - 1);
	}

	static printBessier(points, results) {
		push();
		stroke(255, 0, 0);
		fill(255, 0, 0);
		for (let i = 0; i < points.length; i++)
			ellipse(points[i].x, points[i].y, 25);
		pop();
		console.log(results.length);
		for (let p of results) {
			console.log(p.x, p.y);
			ellipse(p.x, p.y, 10);
		}
	}
}