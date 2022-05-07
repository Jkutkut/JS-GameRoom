class SpcInvAnimation {

	constructor(obj) {
		this._obj = obj;
		this.done = false;
	}

	ended() {
		return this.done;
	}

	show() {}

	destroy() {}

	tick() {}

	// GETTERS
	get obj() {
		return this._obj;
	}
}