class CharacterObject extends PhysicsObject {

	static LIVES = null;

	constructor(pos, size, angle, lives) {
		super(pos, size, angle);
		this.lives = lives;
		this.maxLives = lives;
	}

	hit() {
		this.lives--;
		if (this.lives <= 0)
			return new ShipExplosionAnimation(this);
		return new ShipHitAnimation(this, this.maxLives - this.lives);
	}
}