class SpaceInvaders extends Game {

	static BG = 30;

	constructor(size) {
		super(size);

		this.initShip();
		this.initEnemies();
		this.updateScreen = true;
	}

	show() {
		background(SpaceInvaders.BG);
		super.show();
		this.ship.show();
		for (let enemy of this.enemies) {
			enemy.show();
		}
	}

	initShip() {
		let offsetV = this.size.y / 50;
		let shipSize = new p5.Vector(50, 50);
		let shipPos = new p5.Vector((this.size.x - shipSize.x) / 2, this.size.y - offsetV - shipSize.y);
		this.ship = new Ship(shipPos, shipSize, 0);
	}

	initEnemies() {
		this.enemies = [];
		let basicSize = new p5.Vector(50, 50);

		this.enemies.push(new BasicEnemy(
			new p5.Vector(this.size.x / 4, this.size.y / 4),
			basicSize.copy(),
			"Beholder"
		));
		this.enemies.push(new BasicEnemy(
			new p5.Vector(this.size.x / 4 * 1.4, this.size.y / 4),
			basicSize.copy(),
			"Emissary"
		));
		this.enemies.push(new BasicEnemy(
			new p5.Vector(this.size.x / 4 * 1.8, this.size.y / 4),
			basicSize.copy(),
			"basic2"
		));
		this.enemies.push(new BasicEnemy(
			new p5.Vector(this.size.x / 4 * 2.2, this.size.y / 4),
			basicSize.copy(),
			"basic3"
		));
		this.enemies.push(new BasicEnemy(
			new p5.Vector(this.size.x / 4 * 2.6, this.size.y / 4),
			basicSize.copy(),
			"basic4"
		));
		this.enemies.push(new BasicEnemy(
			new p5.Vector(this.size.x / 4 * 3.0, this.size.y / 4),
			basicSize.copy(),
			"basic5"
		));
		this.enemies.push(new BasicEnemy(
			new p5.Vector(this.size.x / 4 * 3.4, this.size.y / 4),
			basicSize.copy(),
			"basic6"
		));
	}

	tick() {
		super.tick();
		if (keyIsDown(LEFT_ARROW))
			this.moveShip(-1, 0);
		if (keyIsDown(RIGHT_ARROW))
			this.moveShip(1, 0);
		if (keyIsDown(UP_ARROW))
			this.moveShip(0, -1);
		if (keyIsDown(DOWN_ARROW))
			this.moveShip(0, 1);
		
		if (this.updateScreen) {
			this.show();
			this.updateScreen = false;
		}
	}

	keypress(keyCode) {
		super.keypress(keyCode);
		if (keyCode === LEFT_ARROW)
			this.moveShip(-1, 0);
		if (keyCode === RIGHT_ARROW)
			this.moveShip(1, 0);
		if (keyCode === UP_ARROW)
			this.moveShip(0, -1);
		if (keyCode === DOWN_ARROW)
			this.moveShip(0, 1);
		this.updateScreen = true;
	}

	moveShip(x, y) {
		this.ship.move(x, y);
		this.updateScreen = true;
	}
}