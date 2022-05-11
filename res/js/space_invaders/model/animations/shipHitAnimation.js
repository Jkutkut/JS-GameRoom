class ShipHitAnimation extends ImgAnimation {
	static FRAME_COOLDOWN = 4;

	constructor(obj, hits=3) {
		if (!(obj instanceof Ship))
			throw new Error("Error: ShipExplosionAnimation needs a Ship object");
		super(obj, ShipExplosionAnimation.N_SPRITES, ShipHitAnimation.FRAME_COOLDOWN);

		this.hits = hits;
		this.hitsLocation = [];
		for (let i = 0; i < hits; i++) {
			this.hitsLocation.push(new p5.Vector(
				RandomGenerator.getCentered(this.obj.halfSize.x * 0.8),
				RandomGenerator.getCentered(this.obj.halfSize.y * 0.8)
			));
		}
	}

	show() {
		for (let i = 0; i < this.hits; i++) {
			this.showFrame(
				ShipExplosionAnimation.SPRITES,
				ShipExplosionAnimation.IMG_WIDTH,
				0.5,
				this.hitsLocation[i]
			);
		}
	}

	tick() {
		super.tick();
	}

	destroy() {
		// this.obj.destroy();
		return super.destroy();
	}
}
