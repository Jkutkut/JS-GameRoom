class SpaceInvaders extends Game {
	constructor(size) {
		super(size);

		this.initShip();
	}

	show() {
		super.show();
		this.ship.show();
	}

	initShip() {
		let offsetV = this.size.y / 50;
		let shipSize = new p5.Vector(50, 50);
		let shipPos = new p5.Vector((this.size.x - shipSize.x) / 2, this.size.y - offsetV - shipSize.y);
		this.ship = new Ship(shipPos, shipSize, 0);
	}
}