class BasicEnemyAnimation extends SyncAnimation {
	static HORIZONTAL_MOVEMENT = 40;
	static HORIZONTAL_SPEED = 0.05;

	static OFFSET = 0;

	constructor(obj) {
		if (!(obj instanceof BasicEnemy))
			throw new Error("Error: BasicEnemyAnimation needs a BasicEnemy object");
		super(obj);
		this.objPos = obj.pos.copy();
	}

	tick() {
		super.tick();
		let pos = BasicEnemyAnimation.HORIZONTAL_MOVEMENT * Math.sin(BasicEnemyAnimation.OFFSET);

		this.obj.tp(this.objPos.x + pos);
	}

	static masterTick() {
		BasicEnemyAnimation.OFFSET += BasicEnemyAnimation.HORIZONTAL_SPEED;
	}
}

SyncAnimation.TYPES.push(BasicEnemyAnimation);