class ShipExplosionAnimation extends Animation {
	static SPRITES = null;
	static N_SPRITES = 7;
	static FRAME_COOLDOWN = 10;

	static IMG_WIDTH = 48;

	constructor(obj, frames) {
		if (!(obj instanceof Ship))
			throw new Error("Error: ShipExplosionAnimation needs a Ship object");
		super(obj, frames, ShipExplosionAnimation.FRAME_COOLDOWN);
	}

	show() {
		this.showFrame(
			ShipExplosionAnimation.SPRITES,
			ShipExplosionAnimation.IMG_WIDTH,
			1.8
		);
	}
}