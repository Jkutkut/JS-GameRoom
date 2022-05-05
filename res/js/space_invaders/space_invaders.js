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
		100,
		true,
		new p5.Vector(10, 10),
		new p5.Vector(100, 700),
		new p5.Vector(500, -800),
		new p5.Vector(800, 1000),
		new p5.Vector(10, 300)
	);
}

function draw() {
	// game.tick();
}

keyPressed = () => {
	game.keypress(keyCode);
}

function bessier(steps, debug, ...points) {
	const factorial = (n) => {
		if (n <= 1) return 1;
		return n * factorial(n - 1);
	}
	const tIncrement = 1 / steps;
	const n = points.length - 1;
	const nFactorial = factorial(n);
	let t, i;
	let factor, point;
	let results = [];
	for (t = 0; t <= 1; t += tIncrement) {
		point = new p5.Vector(0, 0);
		for (i = 0; i <= n; i++) {
			factor = nFactorial / (factorial(i) * factorial(n - i))
				* Math.pow(t, i) * Math.pow(1 - t, n - i);
			point.x += points[i].x * factor;
			point.y += points[i].y * factor;
		}
		results.push(point);
	}
	if (debug) {
		push();
		stroke(255, 0, 0);
		fill(255, 0, 0);
		for (i = 0; i < points.length; i++)
			ellipse(points[i].x, points[i].y, 25);
		pop();
		for (let p of results) {
			ellipse(p.x, p.y, 10);
		}
	}
	return results;
}