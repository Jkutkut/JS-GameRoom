var game;

function preload() {
	Ship.SRC.body = loadImage("../res/img/space_invaders/ships/ship_1.png");
	Ship.SRC.propulsor = loadImage("../res/img/space_invaders/ships_elements/turbo_player.png");
	BasicEnemy.SRC.Beholder = loadImage("../res/img/space_invaders/enemies/Beholder.png");
	BasicEnemy.SRC.Emissary = loadImage("../res/img/space_invaders/enemies/Emissary.png");
	for (let i = 2; i <= 6; i++)
		BasicEnemy.SRC[`basic${i}`] = loadImage(`../res/img/space_invaders/ships/ship_${i}.png`);
}

function setup() {
	createCanvas(600, 600);
	game = new SpaceInvaders(new p5.Vector(width, height));
}

function draw() {
	game.tick();
}

keyPressed = () => {
	game.keypress(keyCode);
}