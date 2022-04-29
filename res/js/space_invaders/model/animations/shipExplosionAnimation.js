class ShipExplosionAnimation extends Animation {
	static SPRITES = [];
	static N_SPRITES = 7;
	constructor(obj, frames) {
		if (!(obj instanceof Ship))
			throw new Error("Error: ShipExplosionAnimation needs a Ship object");
		super(obj, frames);
	}

	show() {
		
	}
}