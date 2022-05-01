class Game {
	constructor(size) {
		this._size = size;
		this.animations = [];
	}

	show() {
		for (let i = 0; i < this.animations.length; i++) {
			this.animations[i].show();
			if (this.animations[i].ended()) {
				this.animations.splice(i--, 1);
			}
		}
	}

	addAnimation(animation) {
		if (!animation instanceof Animation)
			throw new Error("Animation must be an instance of Animation");
		this.animations.push(animation);
	}

	get size() {
		return this._size;
	}

	tick() {
		for (let animation of this.animations) {
			animation.tick();
		}
	}

	keypress(keyCode) {
		// console.log("Pressed: " + keyCode);
	}
}