class HoverAnimation extends SpcInvAnimation {
	static ANGLE = Math.PI / 720;
	static HORIZONTAL_MOVEMENT = 0.5;

	static SPEED = 0.04;

	constructor(obj) {
		super(obj);
		this.initialAngle = obj.angle;
		this.objPos = obj.pos.copy();

		this.offset = 0;
	}

	tick() {
		if (this.done)
			return;
		let angle = HoverAnimation.ANGLE * Math.cos(this.offset);
		let pos = HoverAnimation.HORIZONTAL_MOVEMENT * Math.sin(this.offset);

		this.obj.moveBy(pos);
		this.obj.rotate(angle);

		this.offset += HoverAnimation.SPEED;
	}
}