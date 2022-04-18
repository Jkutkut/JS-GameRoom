var ship;

function preload() {
	Ship.SRC = loadImage("../res/img/space_invaders/ships/ship_1.png");
}

function setup() {
	createCanvas(600, 600);
	ship = new Ship(new p5.Vector(100, 100), new p5.Vector(80, 80), 0);
	ship.show();

	// frameRate(60);
}

function draw() {
	background(0);

	let size = 80;

	let offsetH = size / 20, offsetV = size * 0.6;
	for (let i = 0; i < 600 + size; i+=offsetH) {
		for (let j = 0; j < 600; j+=offsetV) {
			ellipse(i, j, size, size);
		}
	}

	ship.pos.x += 8;
	ship.show();

	noLoop();
}