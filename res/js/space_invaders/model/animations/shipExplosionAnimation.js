class ShipExplosionAnimation extends ImgAnimation {
	static SPRITES = null;
	static N_SPRITES = 7;
	static FRAME_COOLDOWN = 7;

	static IMG_WIDTH = 48;

	constructor(obj) {
		if (!(obj instanceof Ship))
			throw new Error("Error: ShipExplosionAnimation needs a Ship object");
		super(obj, ShipExplosionAnimation.N_SPRITES, ShipExplosionAnimation.FRAME_COOLDOWN);
		this.obj.visible = false;
	}

	show() {
		this.showFrame(
			ShipExplosionAnimation.SPRITES,
			ShipExplosionAnimation.IMG_WIDTH,
			1.8
		);
	}

	tick() {
		super.tick();
	}

	destroy() {
		this.obj.destroy();
		return super.destroy();
	}
}