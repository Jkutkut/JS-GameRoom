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
		// this.obj.destroy();
		return super.destroy();
	}
}

class ShipHitAnimation extends ImgAnimation {
	static SPRITES = null;
	static N_SPRITES = 7;
	static FRAME_COOLDOWN = 5;

	static IMG_WIDTH = 48;

	constructor(obj, hits=3) {
		if (!(obj instanceof Ship))
			throw new Error("Error: ShipExplosionAnimation needs a Ship object");
		super(obj, ShipExplosionAnimation.N_SPRITES, ShipExplosionAnimation.FRAME_COOLDOWN);

		this.hits = hits;
		this.hitsLocation = [];
		for (let i = 0; i < hits; i++) {
			this.hitsLocation.push(new p5.Vector(
				random(-this.obj.halfSize.x, this.obj.halfSize.x),
				random(-this.obj.halfSize.y, this.obj.halfSize.y)
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
