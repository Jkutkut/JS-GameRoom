class PhysicsObject {
	constructor(pos, size, angle) {
		this._pos = pos;
		this._size = size;
		this._angle = angle;
		this._halfSize = new p5.Vector(size.x >> 1, size.y >> 1);
	}

	collides(obj) {
		return (this.pos.x < obj.pos.x + obj.size.x &&
				this.pos.x + this.size.x > obj.pos.x &&
				this.pos.y < obj.pos.y + obj.size.y &&
				this.pos.y + this.size.y > obj.pos.y);
	}

	showImg(src, dx=0, dy=0) {
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.angle);
		image(src, 0, 0, this.size.x + dx, this.size.y + dy);
		pop();
	}

	// GETTERS

	get pos() {
		return this._pos;
	}

	get size() {
		return this._size;
	}

	get angle() {
		return this._angle;
	}

	get halfSize() {
		return this._halfSize;
	}

	// SETTERS
	rotate(angle) {
		this._angle += angle;
	}
}