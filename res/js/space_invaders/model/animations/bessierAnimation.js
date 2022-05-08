class BessierAnimation extends SpcInvAnimation {
	static CURVES = null;

	constructor(obj, curveArray) {
		if (!(obj instanceof Ship))
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
