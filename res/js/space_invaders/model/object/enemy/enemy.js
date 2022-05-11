class Enemy extends PhysicsObject {
	constructor(pos, size, angle) {
		super(pos, size, angle);
		this.src = null;
	}

	show() {
		this.showImg(this.src);
	}
}