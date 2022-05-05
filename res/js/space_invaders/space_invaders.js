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
		new p5.Vector(0, 0),
		new p5.Vector(300, 0),
		new p5.Vector(300, 300),
		new p5.Vector(0, 300),
		new p5.Vector(0, 300),
		new p5.Vector(0, 300),
		new p5.Vector(0, 200),
		new p5.Vector(600, 600),
		new p5.Vector(600, 600),
		new p5.Vector(600, 600)
	);
}

function draw() {
	// game.tick();
}

keyPressed = () => {
	game.keypress(keyCode);
}

function bessier(steps, ...points) {
	const tIncrement = 1 / steps;
	const factorial = (n) => {
		if (n <= 1) return 1;
		return n * factorial(n - 1);
	}
	const nFactorial = factorial(points.length);
	let x, y, t, i;
	let factor;
	for (t = 0; t <= 1; t += tIncrement) {
		x = 0;
		y = 0;
		for (i = 0; i < points.length; i++) {
			factor = nFactorial / (factorial(i) * factorial(points.length - i))
					* Math.pow(1 - t, points.length - i) * Math.pow(t, i);
			x += points[i].x * factor;
			y += points[i].y * factor;
		}
		ellipse(x, y, 10);
	}
}