class Ship extends PhysicsObject {
	static SRC = null;
	static V = 5;

	constructor(pos, size, angle) {
		super(pos, size, angle);
	}

	show() {
		this.showImg(Ship.SRC);
	}

	move(x, y) {
		this.pos.add(x * Ship.V, y * Ship.V);
	}
}