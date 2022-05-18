class ShipExplosionAnimation extends ImgAnimation {
	static SPRITES = null;
	static N_SPRITES = 7;
	static FRAME_COOLDOWN = 7;

	static IMG_WIDTH = 48;

	constructor(obj) {
		super(obj, ShipExplosionAnimation.N_SPRITES, ShipExplosionAnimation.FRAME_COOLDOWN);
		// this.obj.visible = false;
		this.obj.destroy();
	}

	show() {
		this.showFrame(
			ShipExplosionAnimation.SPRITES,
			ShipExplosionAnimation.IMG_WIDTH,
			1.5
		);
	}

	tick() {
		super.tick();
	}

	destroy() {
		return super.destroy();
	}
}
