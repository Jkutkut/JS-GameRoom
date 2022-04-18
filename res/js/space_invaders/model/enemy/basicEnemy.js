class BasicEnemy extends Enemy {
	static SRC = null;

	constructor(pos, size, angle) {
		super(pos, size, angle);
		this.src = BasicEnemy.SRC;
		this.rotate(Math.PI);
	}

	show() {
		this.showImg(this.src);
	}
}