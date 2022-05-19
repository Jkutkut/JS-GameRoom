class SpaceInvaders extends Game {

	static BG_COLOR = 30;
	static BG = null;

	static BASE_SIZE = null;

	constructor(size) {
		super(size);

		this.initBullets();
		this.initShip();
		this.initEnemies();
		this.updateScreen = true;

		this.shipAlive = true;
	}

	show() {
		background(SpaceInvaders.BG_COLOR);
		image(SpaceInvaders.BG, this.halfSize.x, this.halfSize.y, this.size.x, this.size.y);
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
		Ship.SIZE = SpaceInvaders.BASE_SIZE;

		let offsetV = this.size.y / 50;
		let shipPos = new p5.Vector((this.size.x - Ship.SIZE.x) / 2, this.size.y - offsetV - Ship.SIZE.y);
		this.ship = new Ship(shipPos, 0);
	}

	initEnemies() {
		this.enemies = [];

		const ROW = 7;
		for (let j = 0; j < 3; j++) {
			for (let i = 0; i < ROW; i++) {
				this.enemies.push(new BasicEnemy(
					new p5.Vector(-100, 0),
					SpaceInvaders.BASE_SIZE.copy(),
					i
				));
				this.addAnimation(new EnemySpawnAnimation(
					this.enemies[j * ROW + i],
					new p5.Vector(this.size.x / 4 * (0.8 + 0.4 * i), this.size.y / 4 * (0.4 + 0.4 * j)),
					j * ROW + i
				));
			}
		}
	}

	tick() {
		if (this.ship.destroyed && this.shipAlive) {
			this.shipAlive = false;
			setTimeout(gameOver, 2000);
			return;
		}
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
		}
		this.checkCollisions();

		if (this.updateScreen || this.animations.length > 0) {
			this.show();
			this.updateScreen = false;
		}
	}

	keypress(keyCode) {
		if (!this.shipAlive)
			return;
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

	checkCollisions() {
		let bullet;
		for (let i = 0, j; i < this.bullets.length; i++) {
			bullet = this.bullets[i];
			if (bullet.outOfBounds(this.size)) {
				this.destroyBullet(...this.bullets.splice(i--, 1));
				continue;
			}
			for (j = 0; j < this.enemies.length; j++) {
				if (bullet.collides(this.enemies[j])) {
					this.hitShip(this.enemies[j]);
					this.destroyBullet(...this.bullets.splice(i--, 1));
					break;
				}
			}
		}

		for (let j = 0, enemy; j < this.enemies.length; j++) {
			enemy = this.enemies[j];
			if (enemy.destroyed) {
				this.enemies.splice(j--, 1);
				continue;
			}
			if (!this.ship.destroyed && enemy.collides(this.ship)) {
				this.hitShip(this.enemies[j]);
				this.hitShip(this.ship);
			}
		}
	}

	destroyBullet(bullet) {
		bullet.destroy();
		if (bullet instanceof PlayerBullet)
			this.ship.bulletDestroyed();
	}

	moveShip(x, y) {
		if (!this.ship.canMove(x, y, this.size))
			return;
		this.ship.move(x, y);
		this.updateScreen = true;
	}

	hitShip(obj) {
		this.addAnimation(obj.hit());
	}

	fire() {
		if (this.ship.canFire()) {
			let bullet = this.ship.fire();
			this.bullets.push(bullet);
			this.updateScreen = true;
		}
	}
}