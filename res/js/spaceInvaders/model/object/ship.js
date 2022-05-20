class Ship extends CharacterObject {
	static SRC = null;

	static SIZE = null;

	static V = 4;
	static COOLDOWN = 10;
	static MAX_BULLETS = 3;

	static HEALTH = 3;

	constructor(pos, angle) {
		super(pos, Ship.SIZE, angle, Ship.HEALTH, Ship.MAX_BULLETS);
	}

	show() {
		this.showImg(Ship.SRC);
	}

	move(x, y) {
		this.pos.add(x * Ship.V, y * Ship.V);
	}

	canMove(x, y, screenSize) {
		let newX = this.pos.x + x * Ship.V;
		let newY = this.pos.y + y * Ship.V;
		if (x > 0 && newX + this.halfSize.x > screenSize.x)
			return false;
		if (x < 0 && newX - this.halfSize.x < 0)
			return false;
		if (y > 0 && newY + this.halfSize.y > screenSize.y)
			return false;
		if (y < 0 && newY - this.halfSize.y < 0)
			return false;
		return true;
	}

	fire() {
		let bullet = new PlayerBullet(this.pos.copy(), this);
		bullet.pos.add(0, -this.size.y / 2);
		this.cooldown = Ship.COOLDOWN;
		this.bullets++;
		return bullet;
	}
}