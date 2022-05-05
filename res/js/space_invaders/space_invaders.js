var game;

function preload() {
	Ship.SRC.body = loadImage("../res/img/space_invaders/ships/ship_1.png");
	Ship.SRC.propulsor = loadImage("../res/img/space_invaders/ships_elements/propulsor_player.png");

	BasicEnemy.SRC.Beholder = loadImage("../res/img/space_invaders/enemies/Beholder.png");
	BasicEnemy.SRC.Emissary = loadImage("../res/img/space_invaders/enemies/Emissary.png");
	
	Bullet.SRC.body = loadImage("../res/img/space_invaders/ships_elements/player_bullet.png");
	
	for (let i = 2; i <= 6; i++)
		BasicEnemy.SRC[`basic${i}`] = loadImage(`../res/img/space_invaders/ships/ship_${i}.png`);

	ShipExplosionAnimation.SPRITES = loadImage("../res/img/space_invaders/ships_elements/ship_explosion.png");
}

function setup() {
	createCanvas(600, 600);
	imageMode(CENTER);
	// game = new SpaceInvaders(new p5.Vector(width, height));
	bessier(
		150,
		true,
		new p5.Vector(0, 0),
		new p5.Vector(300, 0),
		new p5.Vector(300, 300),
		new p5.Vector(300, 300),
		new p5.Vector(0, 100),
		new p5.Vector(0, 120),
		new p5.Vector(0, 140),
		new p5.Vector(0, 160),
		new p5.Vector(100, 600),
		new p5.Vector(120, 600),
		new p5.Vector(140, 600),
		new p5.Vector(160, 600),
		new p5.Vector(600, 580),
		new p5.Vector(600, 560),
		new p5.Vector(600, 540),
		new p5.Vector(600, 520)
	);
}

function draw() {
	// game.tick();
}

keyPressed = () => {
	game.keypress(keyCode);
}

function bessier(steps, debug, ...points) {
	const tIncrement = 1 / steps;
	const factorial = (n) => {
		if (n <= 1) return 1;
		return n * factorial(n - 1);
	}
	const pointRange = (t, nPoints, amount=nPoints) => {
		let percent = 1 - t;
		let index = Math.floor(nPoints * percent);
		let start = Math.max(0, index - amount);
		let end = Math.min(nPoints - 1, index + amount);
		return {start: start, end: end};
	}
	const nFactorial = factorial(points.length);
	let results = [];
	let x, y, t, i;
	let factor, point;
	for (t = 0; t <= 1; t += tIncrement) {
		x = 0;
		y = 0;
		let r = pointRange(t, points.length);
		for (i = r.start; i < r.end; i++) {
			factor = nFactorial / (factorial(i) * factorial(points.length - i))
					* Math.pow(1 - t, points.length - i) * Math.pow(t, i);
			x += points[i].x * factor;
			y += points[i].y * factor;
		}
		if (debug)
			ellipse(x, y, 10);
	}
	for (t = 0; t <= 1; t += tIncrement) {
		x = 0;
		y = 0;
		for (i = 0; i < points.length; i++) {
			factor = nFactorial / (factorial(i) * factorial(points.length - i))
					* Math.pow(1 - t, points.length - i) * Math.pow(t, i);
			x += points[i].x * factor;
			y += points[i].y * factor;
		}
		if (debug)
			ellipse(x, y, 10);
	}
	if (debug) {
		push();
		stroke(255, 0, 0);
		fill(255, 0, 0);
		for (i = 0; i < points.length; i++)
			ellipse(points[i].x, points[i].y, 20);
		pop();
	}
}