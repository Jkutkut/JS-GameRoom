var game;

function preload() {
	Ship.SRC = loadImage("../res/img/space_invaders/ships/ship_1.png");
}

function setup() {
	createCanvas(600, 600);
	game = new SpaceInvaders(new p5.Vector(width, height));
	background(30);
	// frameRate(60);

}

function draw() {
	game.show();
	noLoop();
}