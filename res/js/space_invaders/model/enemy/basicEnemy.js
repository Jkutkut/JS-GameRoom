class BasicEnemy extends Enemy {
	static SRC = null;

	constructor(pos, size) {
		super(pos, size, Math.PI);
		this.src = BasicEnemy.SRC;
	}
}