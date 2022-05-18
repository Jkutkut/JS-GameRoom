var _game;
var _emptyGame = {
	tick: () => {},
	keypress: () => {}
};

function preload() {
	// JSON
	fetch("../res/db/spaceInvaders/bessierAnimations.json")
		.then(response => response.json())
		.then(json => loadBessierAnimations(json));

	SpaceInvaders.BASE_SIZE = new p5.Vector(50, 50);

	SpaceInvaders.BG = loadImage("../res/img/spaceInvaders/background/background.png");

	Ship.SRC = loadImage("../res/img/spaceInvaders/ships/ship_6.png");

	BasicEnemy.SRC.Beholder = loadImage("../res/img/spaceInvaders/enemies/Beholder.png");
	BasicEnemy.SRC.Emissary = loadImage("../res/img/spaceInvaders/enemies/Emissary.png");
	
	Bullet.SRC.body = loadImage("../res/img/spaceInvaders/shipsElements/player_bullet.png");
	
	for (let i = 1; i <= 5; i++)
		BasicEnemy.SRC[`basic${i}`] = loadImage(`../res/img/spaceInvaders/ships/ship_${i}.png`);

	ShipExplosionAnimation.SPRITES = loadImage("../res/img/spaceInvaders/shipsElements/ship_explosion.png");
}

window.onload = () => {
	document.getElementById("btnstart").addEventListener("click", () => {
		setTimeout(initGame, 200)
	});

	let enemiesImg = document.getElementsByClassName("enemy");

	for (let i = 0; i < enemiesImg.length; i++)
		enemiesImg[i].style["animation-delay"] = `${Math.random()}s`;
}

function setup() {
	createCanvas(600, 600);
	imageMode(CENTER);
	_game = _emptyGame;
}

function draw() {
	_game.tick();
}

function initGame() {
	document.getElementsByClassName("p5Canvas")[0].style.display = "block";
	document.getElementById("mainmenu").style.display = "none";
	_game = new SpaceInvaders(new p5.Vector(width, height));
}

keyPressed = () => {
	_game.keypress(keyCode);
}

function loadBessierAnimations(json) {
	let animations = json.animations;
	BessierAnimation.ANIMATIONS = json.animations;
	BessierAnimation.CURVES = {};
	for (const [key, value] of Object.entries(animations))
		BessierAnimation.CURVES[key] = Bessier.bessier(value.steps, ...value.animation);

}