class Game {
	constructor(size) {
		this._size = size;
		this._halfSize = new p5.Vector(size.x >> 1, size.y >> 1);
		this.animations = [];
	}

	show() {
		for (let i = 0; i < this.animations.length; i++) {
			this.animations[i].show();
		}
	}

	addAnimation(animation) {
		if (!animation instanceof SpcInvAnimation)
			throw new Error("Animation must be an instance of Animation");
		this.animations.push(animation);
	}

	get size() {
		return this._size;
	}

	get halfSize() {
		return this._halfSize;
	}

	tick() {
		let toAdd;
		for (let i = 0, j; i < this.animations.length; i++) {
			this.animations[i].tick();
			if (this.animations[i].ended() || 
				(this.animations[i].obj.destroyed && !(this.animations[i] instanceof ShipExplosionAnimation))) {
				toAdd = this.animations[i].destroy();
				this.animations.splice(i--, 1);
				for (j = 0; j < toAdd.length; j++)
					this.addAnimation(toAdd[j]);
				continue;
			}
		}
		for (let animation of SyncAnimation.TYPES)
			animation.masterTick();
	}

	keypress(keyCode) {
		// console.log("Pressed: " + keyCode);
	}
}