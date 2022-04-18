class SpaceInvaders extends Game {
	constructor(size) {
		super(size);

		this.ship = new Ship(new p5.Vector(100, 100), new p5.Vector(50, 50), 0);
	}

	show() {
		super.show();
		this.ship.show();
	}
}