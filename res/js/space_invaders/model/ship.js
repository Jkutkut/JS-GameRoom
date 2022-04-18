class Ship extends PhysicsObject {
	static SRC = null;

	constructor(pos, size, angle) {
		super(pos, size, angle);
	}

	show() {
		this.showImg(Ship.SRC);
	}
}