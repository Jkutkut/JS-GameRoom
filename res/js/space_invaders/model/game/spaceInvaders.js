class SpaceInvaders extends Game {
	constructor(size) {
		super(size);

		this.initShip();
		this.initEnemies();
	}

	show() {
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
			basicSize.copy()
		));
	}
}