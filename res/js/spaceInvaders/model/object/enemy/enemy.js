class Enemy extends CharacterObject {
	constructor(pos, size, angle) {
		super(pos, size, angle, 1);
		this.src = null;
	}

	show() {
		this.showImg(this.src);
	}
}