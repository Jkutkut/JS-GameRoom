class ShipExplosionAnimation extends Animation {
	static SPRITES = null;
	static N_SPRITES = 7;

	static IMG_WIDTH = 48;

	constructor(obj, frames) {
		if (!(obj instanceof Ship))
			throw new Error("Error: ShipExplosionAnimation needs a Ship object");
		super(obj, frames);
	}

	show() {
		
	}
}