class Ship extends CharacterObject {
	static SRC = null;

	static SIZE = null;

	static V = 4;
	static COOLDOWN = 10;
	static MAX_BULLETS = 3;

	static HEALTH = 3;

	constructor(pos, angle) {
		super(pos, Ship.SIZE, angle, Ship.HEALTH);
	}

	show() {
		this.showImg(Ship.SRC);
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

	fire() {
		let bullet = new PlayerBullet(this.pos.copy());
		bullet.pos.add(0, -this.size.y / 2);
		this.cooldown = Ship.COOLDOWN;
		this.bullets++;
		return bullet;
	}
}