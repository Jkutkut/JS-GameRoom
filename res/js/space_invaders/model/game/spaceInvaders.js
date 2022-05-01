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

		let enemies = ["Beholder", "Emissary", "basic2", "basic3", "basic4", "basic5", "basic6"]

		for (let j = 0; j < 3; j++) {
			for (let i = 0; i < enemies.length; i++) {
				this.enemies.push(new BasicEnemy(
					new p5.Vector(this.size.x / 4 * (0.8 + 0.4 * i), this.size.y / 4 * (0.8 + 0.4 * j)),
					basicSize.copy(),
					enemies[i]
				));
				this.addAnimation(new BasicEnemyAnimation(this.enemies[j * enemies.length + i]));
			}
		}
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
		let bullet;
		for (let i = 0; i < this.bullets.length; i++) {
			bullet = this.bullets[i];
			bullet.move();
			this.updateScreen = true;
			if (bullet.outOfBounds(this.size)) {
				this.bullets.splice(i--, 1);
				continue;
			}
			for (let i = 0; i < this.enemies.length; i++) {
				if (bullet.collides(this.enemies[i])) {
					this.enemies.splice(i, 1);
					this.bullets.splice(this.bullets.indexOf(bullet), 1);
					break;
				}
			}
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