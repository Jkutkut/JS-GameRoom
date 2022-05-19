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

	Ship.SRC = loadImage("../res/img/spaceInvaders/ships/ship.png");

	Enemy.SRC.Beholder = loadImage("../res/img/spaceInvaders/enemies/Beholder.png");
	Enemy.SRC.Emissary = loadImage("../res/img/spaceInvaders/enemies/Emissary.png");
	Enemy.SRC.tutorial = loadImage("../res/img/spaceInvaders/enemies/ship_tutorial.png");
	Enemy.SRC.ice = loadImage("../res/img/spaceInvaders/enemies/ship_ice.png");
	Enemy.SRC.iceFast = loadImage("../res/img/spaceInvaders/enemies/ship_ice_fast.png");
	Enemy.SRC.fire = loadImage("../res/img/spaceInvaders/enemies/ship_fire.png");
	Enemy.SRC.fireFast = loadImage("../res/img/spaceInvaders/enemies/ship_fire_fast.png");
	
	Bullet.SRC.body = loadImage("../res/img/spaceInvaders/shipsElements/player_bullet.png");

	ShipExplosionAnimation.SPRITES = loadImage("../res/img/spaceInvaders/shipsElements/ship_explosion.png");
}

window.onload = () => {
	document.getElementById("btnstart").addEventListener("click", () => {
		setTimeout(initGame, 200)
	});

	let enemiesImg = document.getElementsByClassName("enemy");
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

function gameOver() {
	document.getElementsByClassName("p5Canvas")[0].style.display = "none";
	let stats = _game.stats;
	for (const key in stats)
		document.getElementById(key).innerHTML = `x${stats[key]}`;
	_game = _emptyGame;
	document.getElementById("gameover").style.display = "flex";
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