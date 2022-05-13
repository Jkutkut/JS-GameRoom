class SpcInvAnimation {

	constructor(obj) {
		this._obj = obj;
		this.done = false;
	}

	ended() {
		return this.done;
	}

	show() {}

	destroy() {
		return [];
	}

	tick() {
		if (this.obj.ended)
			this.done = true;
	}

	// GETTERS
	get obj() {
		return this._obj;
	}
}