class BasicEnemyAnimation extends SyncAnimation {
	static HORIZONTAL_MOVEMENT = 40;
	static HORIZONTAL_SPEED = 0.05;

	static OFFSET = 0;

	constructor(obj) {
		super(obj);
		this.objPos = obj.pos.copy();
	}

	tick() {
		if (this.done)
			return;
		let pos = BasicEnemyAnimation.HORIZONTAL_MOVEMENT * Math.cos(BasicEnemyAnimation.OFFSET);

		this.obj.tp(this.objPos.x + pos);
	}

	static masterTick() {
		BasicEnemyAnimation.OFFSET += BasicEnemyAnimation.HORIZONTAL_SPEED;
	}
}

SyncAnimation.TYPES.push(BasicEnemyAnimation);