class Enemy extends CharacterObject {
	constructor(pos, size, angle) {
		super(pos, size, angle);
		this.src = null;
	}

	show() {
		this.showImg(this.src);
	}
}