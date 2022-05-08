class Ship extends PhysicsObject {
	static SRC = {
		body: null,
		propulsor: null
	};

	static SIZE = null;

	static V = 4;
	static COOLDOWN = 10;

	constructor(pos, angle) {
		super(pos, Ship.SIZE, angle);
		this.cooldown = 0;
	}

	tick () {
		if (this.cooldown > 0)
			this.cooldown--;
	}

	show() {
		this.showImg(Ship.SRC.body);
		this.showImg(Ship.SRC.propulsor, 0, 10);
	}

	move(x, y) {
		this.pos.add(x * Ship.V, y * Ship.V);
	}

	canMove(x, y, screenSize) {
		let newPos = this.pos.copy();
		newPos.add(x * Ship.V, y * Ship.V);
		return newPos.x >= this.halfSize.x && newPos.x + this.halfSize.x <= screenSize.x &&
			newPos.y >= this.halfSize.y && newPos.y + this.halfSize.y <= screenSize.y;
	}

	canFire() {
		return this.cooldown == 0;
	}

	fire() {
		let bullet = new PlayerBullet(this.pos.copy());
		bullet.pos.add(0, -this.size.y / 2);
		this.cooldown = Ship.COOLDOWN;
		return bullet;
	}
}