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
	
	constructor(pos, size, lives=1) {
		super(pos, size, Math.PI, lives);
		this.src = null;
	}

	show() {
		this.showImg(this.src);
	}
}

class TutorialEnemy extends Enemy {
	constructor(pos, size) {
		super(pos, size);
		this.src = TutorialEnemy.SRC.tutorial;
	}
}

class IceEnemy extends Enemy {
	constructor(pos, size) {
		super(pos, size);
		this.src = IceEnemy.SRC.ice;
	}
}

class FastIceEnemy extends Enemy {
	constructor(pos, size) {
		super(pos, size);
		this.src = FastIceEnemy.SRC.iceFast;
	}
}

class FireEnemy extends Enemy {
	constructor(pos, size) {
		super(pos, size);
		this.src = FireEnemy.SRC.fire;
	}
}

class FastFireEnemy extends Enemy {
	constructor(pos, size) {
		super(pos, size);
		this.src = FastFireEnemy.SRC.fireFast;
	}
}

// TODO BOSSES

Enemy.ENEMIES = [TutorialEnemy, IceEnemy, FastIceEnemy, FireEnemy, FastFireEnemy];