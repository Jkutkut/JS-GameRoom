class BasicEnemyAnimation extends SpcInvAnimation {
	static HORIZONTAL_MOVEMENT = 40;
	static HORIZONTAL_SPEED = 0.05;

	constructor(obj) {
		if (!(obj instanceof BasicEnemy))
			throw new Error("Error: BasicEnemyAnimation needs a BasicEnemy object");
		super(obj, Infinity, Infinity);
		this.objPos = obj.pos.copy();
		this.offset = 0;
	}

	tick() {
		super.tick();
		let pos = BasicEnemyAnimation.HORIZONTAL_MOVEMENT * Math.sin(this.offset);
		this.offset += BasicEnemyAnimation.HORIZONTAL_SPEED;

		this.obj.tp(this.objPos.x + pos);
	}

}