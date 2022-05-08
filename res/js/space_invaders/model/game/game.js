class Game {
	constructor(size) {
		this._size = size;
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

	tick() {
		let toAdd = [];
		for (let i = 0, j; i < this.animations.length; i++) {
			this.animations[i].tick();
			if (this.animations[i].ended() || this.animations[i].obj.destroyed) {
				let toAdd = this.animations[i].destroy();
				this.animations.splice(i--, 1);
				for (j = 0; j < toAdd.length; j++) {
					this.addAnimation(toAdd[j]);
				}
			}
		}
	}

	keypress(keyCode) {
		// console.log("Pressed: " + keyCode);
	}
}