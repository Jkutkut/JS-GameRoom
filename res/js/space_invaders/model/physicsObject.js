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

	showImg(src, dx=0, dy=0) {
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.angle);
		image(src, 0, 0, this.size.x + dx, this.size.y + dy);
		pop();
	}

	// SETTERS
	rotate(angle) {
		this._angle += angle;
	}
}