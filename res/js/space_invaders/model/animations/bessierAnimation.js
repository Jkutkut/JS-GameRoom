class BessierAnimation extends SpcInvAnimation {
	constructor(obj, curve) {
		if (!(obj instanceof Ship))
			throw new Error("BessierAnimation: obj must be an instance of Ship");
		super(obj);

		this._curve = curve;
		this.initPos = obj.pos.copy();
		this.index = 0;
	}

	tick() {
		if (this.done)
			return;
		this.obj.tp(this._curve[this.index].x, this._curve[this.index].y);
		this.index++;
		if (this.index == this._curve.length)
			this.done = true;
	}

	static CURVES = [
	
	];
}
