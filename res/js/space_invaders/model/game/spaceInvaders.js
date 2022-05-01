class SpaceInvaders extends Game {

	static BG = 30;

	constructor(size) {
		super(size);

		this.initBullets();
		this.initShip();
		this.initEnemies();
		this.updateScreen = true;
	}

	show() {
		background(SpaceInvaders.BG);
		this.ship.show();
		for (let enemy of this.enemies) {
			enemy.show();
		}
		for (let bullet of this.bullets) {
			bullet.show();
		}
		super.show();
	}

	initBullets() {
		Bullet.SIZE = new p5.Vector(8, 20);

		this.bullets = [];

		this.bullets.push(new Bullet(new p5.Vector(150, 200)));
	}

	initShip() {
		Ship.SIZE = new p5.Vector(50, 50);

		let offsetV = this.size.y / 50;
		let shipPos = new p5.Vector((this.size.x - Ship.SIZE.x) / 2, this.size.y - offsetV - Ship.SIZE.y);
		this.ship = new Ship(shipPos, 0);
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
		if (keyIsDown(LEFT_ARROW) || keyIsDown(65))
			this.moveShip(-1, 0);
		if (keyIsDown(RIGHT_ARROW) || keyIsDown(68))
			this.moveShip(1, 0);
		if (keyIsDown(UP_ARROW) || keyIsDown(87))
			this.moveShip(0, -1);
		if (keyIsDown(DOWN_ARROW) || keyIsDown(83))
			this.moveShip(0, 1);
		if (keyIsDown(32))
			this.fire();

		this.ship.tick();
		for (let bullet of this.bullets) {
			bullet.move();
			for (let i = 0; i < this.enemies.length; i++) {
				if (bullet.collides(this.enemies[i])) {
					this.enemies.splice(i, 1);
					this.bullets.splice(this.bullets.indexOf(bullet), 1);
					break;
				}
			}
			this.updateScreen = true;
		}

		if (this.updateScreen || this.animations.length > 0) {
			this.show();
			this.updateScreen = false;
		}
	}

	keypress(keyCode) {
		super.keypress(keyCode);
		if (keyCode === LEFT_ARROW || keyCode === 65)
			this.moveShip(-1, 0);
		if (keyCode === RIGHT_ARROW || keyCode === 68)
			this.moveShip(1, 0);
		if (keyCode === UP_ARROW || keyCode === 87)
			this.moveShip(0, -1);
		if (keyCode === DOWN_ARROW || keyCode === 83)
			this.moveShip(0, 1);
		this.updateScreen = true;
	}

	moveShip(x, y) {
		if (!this.ship.canMove(x, y, this.size))
			return;
		this.ship.move(x, y);
		this.updateScreen = true;
	}

	fire() {
		if (this.ship.canFire()) {
			let bullet = this.ship.fire();
			this.bullets.push(bullet);
			this.updateScreen = true;
		}
	}
}