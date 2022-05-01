class PhysicsObject {
	constructor(pos, size, angle) {
		this._pos = pos;
		this._size = size;
		this._angle = angle;
		this._halfSize = new p5.Vector(size.x >> 1, size.y >> 1);
		this._visible = true;
	}

	collides(obj) {
		return (this.pos.x - this.halfSize.x < obj.pos.x + obj.halfSize.x &&
				this.pos.x + this.halfSize.x > obj.pos.x - obj.halfSize.x &&
				this.pos.y - this.halfSize.y < obj.pos.y + obj.halfSize.y &&
				this.pos.y + this.halfSize.y > obj.pos.y - obj.halfSize.y);
	}

	showImg(src, dx=0, dy=0) {
		if (!this.visible)
			return;
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

	get visible() {
		return this._visible;
	}

	// SETTERS
	rotate(angle) {
		this._angle += angle;
	}

	set visible(visible) {
		if (visible != true && visible != false)
			throw new Error("Error: visible must be true or false");
		this._visible = visible;
	}
}