class Bullet extends PhysicsObject {
	static SRC = {
		body: null
	};

	static SIZE = null;

	static V = 5;

	constructor(pos, angle) {
		super(pos, Bullet.SIZE, angle);
		this.v = -Bullet.V;
	}

	show() {
		this.showImg(Bullet.SRC.body);
	}

	move() {
		this.pos.add(0, this.v);
	}
}

class PlayerBullet extends Bullet {
	constructor(pos) {
		super(pos, Bullet.SIZE, 0);
	}
}

class EnemyBullet extends Bullet {
	constructor(pos) {
		super(pos, Bullet.SIZE, Math.PI);
		this.v *= -1;
	}
}