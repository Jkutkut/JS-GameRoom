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
	constructor(obj, finalPos, indexOffset=0) {
		super(obj, Bessier.bessier(
			BessierAnimation.ANIMATIONS["spawn"].steps,
			...BessierAnimation.ANIMATIONS["spawn"].animation,
			finalPos
		));

		this.indexOffset = indexOffset * EnemySpawnAnimation.OFFSET;
	}

	tick() {
		if (this.indexOffset > 0) {
			this.indexOffset--;
			return;
		}
		super.tick();
	}
}