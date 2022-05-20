class Bullet extends PhysicsObject {
	static SRC = {
		body: null
	};

	static SIZE = null;

	static V = 5;

	constructor(pos, angle, obj) {
		super(pos, Bullet.SIZE, angle);
		this.v = -Bullet.V;

		this.obj = obj;
	}

	show() {
		this.showImg(Bullet.SRC.body);
	}

	move() {
		this.pos.add(0, this.v);
	}

	destroy() {
		this.obj.bulletDestroyed();
		super.destroy();
	}
}

class PlayerBullet extends Bullet {
	constructor(pos, obj) {
		super(pos, 0, obj);
	}
}

class EnemyBullet extends Bullet {
	constructor(pos, obj) {
		super(pos, Math.PI, obj);
		this.v *= -1;
	}
}