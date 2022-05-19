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