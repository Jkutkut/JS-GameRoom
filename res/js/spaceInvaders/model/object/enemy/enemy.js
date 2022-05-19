class Enemy extends CharacterObject {
	static SRC = {
		"basic1": null,
		"basic2": null,
		"basic3": null,
		"basic4": null,
		"basic5": null
	};
	
	constructor(pos, size, lives=1) {
		super(pos, size, Math.PI, lives);
		this.src = null;
	}

	show() {
		this.showImg(this.src);
	}
}

class BasicEnemy extends Enemy {

	constructor(pos, size, type) {
		super(pos, size);
		if (type < 1)
			type = 1;
		if (type > 5)
			type = type % 5 + 1;

		this.src = BasicEnemy.SRC[`basic${type}`];
	}
}

class TutorialEnemy extends Enemy {
	constructor(pos, size) {
		super(pos, size);
		this.src = TutorialEnemy.SRC; // TODO
	}

}