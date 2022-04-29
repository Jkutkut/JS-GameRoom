class Animation {
	constructor(obj, frames) {
		this._obj = obj;
		this._currentFrame = 0;
		this._frames = frames;
	}

	ended() {
		return this._currentFrame >= this._frames.length;
	}

	tick() {
		this._currentFrame++;
	}

	show() {}
}