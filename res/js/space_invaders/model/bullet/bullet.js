class Bullet extends PhysicsObject {
	static SRC = {
		body: null
	};

	static SIZE = null;

	static V = 5;

	constructor(pos) {
		super(pos, Bullet.SIZE, 0);
	}

	show() {
		this.showImg(Bullet.SRC.body);
	}

	move() {
		this.pos.add(0, -Bullet.V);
	}
}