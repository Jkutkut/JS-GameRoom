class Enemy extends CharacterObject {
	static SRC = {
		Beholder: null,
		Emissary: null,
		tutorial: null,
		ice: null,
		iceFast: null,
		fire: null,
		fireFast: null,
	};

	static ENEMIES = [];

	static COOLDOWN = 100;
	static MAX_BULLETS = 1;
	
	constructor(pos, lives=1, size=SpaceInvaders.BASE_SIZE.copy()) {
		super(pos, size, Math.PI, lives, Enemy.MAX_BULLETS);
		this.src = null;
	}

	show() {
		this.showImg(this.src);
	}

	fire() {
		let bullet = new EnemyBullet(this.pos.copy(), this);
		bullet.pos.add(0, this.size.y / 2);
		this.cooldown = Enemy.COOLDOWN;
		this.bullets++;
		return bullet;
	}
}

class TutorialEnemy extends Enemy {
	constructor(pos) {
		super(pos);
		this.src = TutorialEnemy.SRC.tutorial;
	}
}

class IceEnemy extends Enemy {
	constructor(pos) {
		super(pos);
		this.src = IceEnemy.SRC.ice;
	}
}

class FastIceEnemy extends Enemy {
	constructor(pos) {
		super(pos);
		this.src = FastIceEnemy.SRC.iceFast;
	}
}

class FireEnemy extends Enemy {
	constructor(pos) {
		super(pos, 2);
		this.src = FireEnemy.SRC.fire;
	}
}

class FastFireEnemy extends Enemy {
	constructor(pos) {
		super(pos, 2);
		this.src = FastFireEnemy.SRC.fireFast;
	}
}

class BeholderEnemy extends Enemy {
	constructor(pos) {
		super(pos, 5, SpaceInvaders.BASE_SIZE.copy().mult(1.2));
		this.src = BeholderEnemy.SRC.Beholder;
	}
}

class EmissaryEnemy extends Enemy {
	constructor(pos) {
		super(pos, 5, SpaceInvaders.BASE_SIZE.copy().mult(1.2));
		this.src = EmissaryEnemy.SRC.Emissary;
	}
}

Enemy.ENEMIES = [TutorialEnemy, IceEnemy, FastIceEnemy, FireEnemy, FastFireEnemy, BeholderEnemy, EmissaryEnemy];