class PhysicsObject {
	constructor(pos, size, angle) {
		this._pos = pos;
		this._size = size;
		this._angle = angle;
	}

	get pos() {
		return this._pos;
	}

	get size() {
		return this._size;
	}

	get angle() {
		return this._angle;
	}

	showImg(src) {
		push();
		rotate(this.angle);
		image(src, this.pos.x, this.pos.y, this.size.x, this.size.y);
		pop();
	}

	// SETTERS
	rotate(angle) {
		this._angle += angle;
	}
}