class SpcInvAnimation {

	constructor(obj) {
		this._obj = obj;
	}

	ended() {
		return false;
	}

	show() {}

	destroy() {}

	tick() {}

	// GETTERS

	get obj() {
		return this._obj;
	}
}