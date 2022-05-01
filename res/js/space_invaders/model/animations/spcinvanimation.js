class SpcInvAnimation {

	constructor(obj, frames, frameCooldown) {
		this._obj = obj;
		this._currentFrame = 0;
		this._frames = frames;
		this._frameCooldown = frameCooldown;
		this.cooldown = frameCooldown;
	}

	ended() {
		return this._currentFrame >= this._frames.length;
	}

	tick() {
		if (this.cooldown == 0) {
			this._currentFrame++;
			this.cooldown = this._frameCooldown;
		}
		else
			this.cooldown--;
	}

	showFrame(src, imgWidth, scale=1) {
		if (this.ended())
			return;
		push();
		translate(this.obj.pos.x, this.obj.pos.y);
		rotate(this.obj.angle);
		image(
			src,
			0, 0,
			imgWidth * scale, imgWidth * scale,
			this.frame * imgWidth, 0,
			imgWidth, imgWidth
		);
		pop();
	}

	show() {}

	// GETTERS

	get obj() {
		return this._obj;
	}

	get frame() {
		return this._currentFrame;
	}

	get frameCooldown() {
		return this._frameCooldown;
	}
}