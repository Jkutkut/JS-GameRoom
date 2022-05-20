class SpaceInvaders extends Game {

	static BG_COLOR = 30;
	static BG = null;

	static BASE_SIZE = null;

	constructor(size) {
		super(size);

		this.initBullets();
		this.initShip();

		this.level = 0;
		this.loadNextLevel();

		this._stats = new StatsSpaceInvaders();
		this.debugBessier = [];
	}

	show() {
		background(SpaceInvaders.BG_COLOR);
		image(SpaceInvaders.BG, this.halfSize.x, this.halfSize.y, this.size.x, this.size.y);
		this.ship.show();
		for (let j = 0; j < this.enemies.length; j++) {
			for (let enemy of this.enemies[j]) {
				enemy.show();
			}
		}
		for (let bullet of this.bullets)
			bullet.show();
		for (let bullet of this.enemyBullets)
			bullet.show();

		super.show();

		push();
		// let i = 0, j = 0;
		// let p = this.ship.pos.copy()
		// this.debugBessier = Bessier.bessier(
		// 	200,
		// 	new p5.Vector(this.size.x / 4 * (0.8 + 0.4 * i), this.size.y / 4 * (0.4 + 0.4 * j)),
		// 	p,
		// 	p,
		// 	p,
		// 	p,
		// 	new p5.Vector(this.size.x / 4 * (0.8 + 0.4 * i), this.size.y / 4 * (0.4 + 0.4 * j))
		// );
		fill(255, 0, 0);
		for (let i = 0; i < this.debugBessier.length; i++) {
			ellipse(this.debugBessier[i].x, this.debugBessier[i].y, 5, 5);
		}
		pop();
	}

	initBullets() {
		Bullet.SIZE = new p5.Vector(8, 20);

		this.bullets = [];
		this.enemyBullets = [];
	}

	initShip() {
		Ship.SIZE = SpaceInvaders.BASE_SIZE;

		let offsetV = this.size.y / 50;
		let shipPos = new p5.Vector((this.size.x - Ship.SIZE.x) / 2, this.size.y - offsetV - Ship.SIZE.y);
		this.ship = new Ship(shipPos, 0);
		this.shipAlive = true;
		this.addAnimation(new HoverAnimation(this.ship))
	}

	loadNextLevel() {
		const ROW = 7;
		this.enemies = [];

		let basicLevel = (enemyType, height=3) => {
			for (let j = 0; j < height; j++) {
				this.enemies.push([]);
				for (let i = 0; i < ROW; i++) {
					this.enemies[j].push(new enemyType(
						new p5.Vector(-100, 0),
						SpaceInvaders.BASE_SIZE.copy(),
						i
					));
					this.addAnimation(new NormalSpawnAnimation(
						this.enemies[j][i],
						new p5.Vector(this.size.x / 4 * (0.8 + 0.4 * i), this.size.y / 4 * (0.4 + 0.4 * j)),
						j * ROW + i
					));
				}
			}
		};

		let fastLevel = (enemyType, fastEnemyType) => {
			basicLevel(enemyType, 2);
			this.enemies.push([]);
			for (let i = 0; i < ROW; i++) {
				this.enemies[2].push(new fastEnemyType(
					new p5.Vector(-100, 0),
					SpaceInvaders.BASE_SIZE.copy(),
					i
				));
				this.addAnimation(new FastSpawnAnimation(
					this.enemies[2][i],
					new p5.Vector(this.size.x / 4 * (0.8 + 0.4 * i), this.size.y / 4 * (0.4 + 0.4 * 2)),
					2 * ROW + i
				));
			}
		}


		let f, type;
		switch (this.level) {
			case 0:
				f = basicLevel;
				type = [TutorialEnemy];
				break;
			case 1:
				f = basicLevel;
				type = [IceEnemy];
				break;
			case 2:
				f = fastLevel;
				type = [IceEnemy, FastIceEnemy];
				break;
			case 3:
				f = basicLevel;
				type = [FireEnemy];
				break;
			case 4:
				f = fastLevel;
				type = [FireEnemy, FastFireEnemy];
				break;
			// case 5: // Boss level
			default:
				f = basicLevel;
				type = [FastFireEnemy, this.level];
				break;
		}

		f(...type);

		this.level++;
		this.updateScreen = true;
		console.log("Level " + this.level + " loaded");
	}

	tick() {
		super.tick();
		this.keyHold();
		this.ship.tick();

		// enemy ia
		for (let enemy of this.enemies[this.enemies.length - 1]) {
			enemy.tick();
			if (Math.abs(enemy.pos.x + enemy.halfSize.x - this.ship.pos.x - this.ship.halfSize.x) < this.ship.halfSize.x)
				this.enemyFire(enemy);
		}

		if (BasicEnemyAnimation.onInitialPos() && Math.random() < 0.2) {
			console.log("Attack!");
			let enemy = this.enemies[
				this.enemies.length - 1
			][
				Math.floor(Math.random() * this.enemies[this.enemies.length - 1].length)
			];
			let path = new AttackAnimation(enemy, this.ship);
			this.debugBessier = path._curveArray;
		}
		// end enemy ia

		let bullet;
		for (let i = 0; i < this.bullets.length; i++) {
			bullet = this.bullets[i];
			bullet.move();
			this.updateScreen = true;
		}
		for (let i = 0; i < this.enemyBullets.length; i++) {
			bullet = this.enemyBullets[i];
			bullet.move();
			this.updateScreen = true;
		}
		this.checkCollisions();
		if (this.enemies.length == 0) {
			this.loadNextLevel();
		}
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

	keyHold() {
		if (!this.shipAlive)
			return;
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
	}

	checkCollisions() {
		let bullet;
		for (let i = 0, j, k; i < this.bullets.length; i++) {
			bullet = this.bullets[i];
			if (bullet.outOfBounds(this.size)) {
				this.destroyBullet(...this.bullets.splice(i--, 1));
				continue;
			}
			bulletCollision:
			for (j = 0; j < this.enemies.length; j++) {
				for (k = this.enemies[j].length - 1; k >= 0; k--) {
					if (!this.enemies[j][k].alive)
						continue;
					if (bullet.collides(this.enemies[j][k])) {
						this.hitShip(this.enemies[j][k]);
						this.destroyBullet(...this.bullets.splice(i--, 1));
						break bulletCollision;
					}
				}
			}
		}

		for (let i = 0; i < this.enemyBullets.length; i++) {
			bullet = this.enemyBullets[i];
			if (bullet.outOfBounds(this.size)) {
				this.destroyBullet(...this.enemyBullets.splice(i--, 1));
				continue;
			}
			if (bullet.collides(this.ship)) {
				this.hitShip(this.ship);
				this.destroyBullet(...this.enemyBullets.splice(i--, 1));
			}
		}

		for (let j = 0, k, enemy; j < this.enemies.length; j++) {
			for (k = this.enemies[j].length - 1; k >= 0; k--) {
				enemy = this.enemies[j][k];
				if (enemy.destroyed) {
					this.enemies[j].splice(k, 1);
					continue;
				}
				if (!this.ship.destroyed && enemy.collides(this.ship)) {
					this.hitShip(enemy);
					this.hitShip(this.ship);
				}
			}
			if (this.enemies[j].length === 0)
				this.enemies.splice(j--, 1);
		}
	}

	destroyBullet(bullet) {
		bullet.destroy();
	}

	moveShip(x, y) {
		if (!this.ship.canMove(x, y, this.size))
			return;
		this.ship.move(x, y);
		this.updateScreen = true;
	}

	hitShip(obj) {
		let animation = obj.hit();
		if (animation == null)
			return;
		this.addAnimation(animation);
		if (obj == this.ship && animation instanceof ShipExplosionAnimation) {
			this.shipAlive = false;
			setTimeout(gameOver, 2000);
		}
		else if (!obj.alive)
			this._stats.enemyDestroyed(obj);
	}

	fire() {
		if (this.ship.canFire()) {
			let bullet = this.ship.fire();
			this.bullets.push(bullet);
			this.updateScreen = true;
		}
	}

	enemyFire(enemy) {
		if (enemy.canFire()) {
			let bullet = enemy.fire();
			this.enemyBullets.push(bullet);
			this.updateScreen = true;
		}
	}

	get stats() {
		return this._stats.stats;
	}
}