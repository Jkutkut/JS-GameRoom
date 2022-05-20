class BessierAnimation extends SpcInvAnimation {
	static ANIMATIONS = null;
	static CURVES = null;

	constructor(obj, curveArray) {
		if (!(obj instanceof Ship) && !(obj instanceof Enemy))
			throw new Error("BessierAnimation: obj must be an instance of Ship");
		super(obj);
		this._curveArray = curveArray;
		this.initPos = obj.pos.copy();
		this.index = 0;
	}

	tick() {
		super.tick();
		if (this.done)
			return;
		this.obj.tp(this._curveArray[this.index].x, this._curveArray[this.index].y);
		this.index++;
		if (this.index == this._curveArray.length)
			this.done = true;
	}
}

class EnemySpawnAnimation extends BessierAnimation {
	static OFFSET = 30;
	constructor(obj, curveArray, indexOffset) {
		super(obj, curveArray);

		this.indexOffset = indexOffset * EnemySpawnAnimation.OFFSET;
		this.inSync = false;
	}

	ended() {
		return this.done && this.inSync;
	}

	tick() {
		if (this.indexOffset > 0) {
			this.indexOffset--;
			return;
		}
		super.tick();
		if (this.done &&
			Math.cos(BasicEnemyAnimation.OFFSET) - Math.cos(BasicEnemyAnimation.OFFSET + 0.01)  >= 0 &&
			Math.cos(BasicEnemyAnimation.OFFSET) > 0.5)
				this.inSync = true;
	}

	destroy() {
		this.obj.moveBy(-BasicEnemyAnimation.HORIZONTAL_MOVEMENT);
		return [
			new BasicEnemyAnimation(this.obj)
		];
	}
}

class NormalSpawnAnimation extends EnemySpawnAnimation {
	constructor(obj, finalPos, indexOffset) {
		super(
			obj,
			Bessier.bessier(
				BessierAnimation.ANIMATIONS["spawn"].steps,
				...BessierAnimation.ANIMATIONS["spawn"].animation,
				new p5.Vector(finalPos.x + BasicEnemyAnimation.HORIZONTAL_MOVEMENT, finalPos.y)
			),
			indexOffset
		);
	}
}

class FastSpawnAnimation extends EnemySpawnAnimation {
	constructor(obj, finalPos, indexOffset) {
		super(
			obj,
			Bessier.bessier(
				BessierAnimation.ANIMATIONS["spawn"].steps * 0.72,
				...BessierAnimation.ANIMATIONS["spawn"].animation,
				new p5.Vector(finalPos.x + BasicEnemyAnimation.HORIZONTAL_MOVEMENT, finalPos.y)
			),
			indexOffset
		);
	}
}

class AttackAnimation extends EnemySpawnAnimation {
	constructor(obj, victim, indexOffset) {
		super(
			obj,
			Bessier.bessier(
				BessierAnimation.ANIMATIONS["attack"].steps,
				obj.pos,
				victim.pos,
				victim.pos,
				victim.pos,
				victim.pos,
				new p5.Vector(obj.pos.x + BasicEnemyAnimation.HORIZONTAL_MOVEMENT, obj.pos.y)
			)
		);
		this.indexOffset = indexOffset;
	}
}