class ImgAnimation extends SpcInvAnimation {

	constructor(obj, frames, frameCooldown) {
		super(obj);
		this._currentFrame = 0;
		this._frames = frames;
		this._frameCooldown = frameCooldown;
		this.cooldown = frameCooldown;
	}

	ended() {
		return this._currentFrame > this._frames;
	}

	tick() {
		super.tick();
		if (this.done)
			return;
		if (this.cooldown == 0) {
			this._currentFrame++;
			this.cooldown = this._frameCooldown;
		}
		else
			this.cooldown--;
	}

	showFrame(src, imgWidth, scale=1, offSetV=null, startX=this.frame, startY=0) {
		if (this.ended())
			return;
		push();
		translate(this.obj.pos.x, this.obj.pos.y);
		if (offSetV)
			translate(offSetV.x, offSetV.y);
		rotate(this.obj.angle);
		image(
			src,
			0, 0,
			imgWidth * scale, imgWidth * scale,
			startX * imgWidth, startY * imgWidth,
			imgWidth, imgWidth
		);
		pop();
	}

	// GETTERS

	get frame() {
		return this._currentFrame;
	}

	get frameCooldown() {
		return this._frameCooldown;
	}
}