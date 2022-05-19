class CharacterObject extends PhysicsObject {

	static HEALTH = 3;

	constructor(pos, size, angle, health, maxBullets) {
		super(pos, size, angle);
		this.health = health;
		this.maxHealth = CharacterObject.HEALTH;
		this.maxBullets = maxBullets;

		this.cooldown = 0;
		this.bullets = 0;
	}

	hit() {
		this.health--;
		if (this.health == 0)
			return new ShipExplosionAnimation(this);
		return new ShipHitAnimation(this, this.maxHealth - this.health);
	}

	get alive() {
		return this.health > 0;
	}

	// Firing logic

	tick () {
		if (this.cooldown > 0)
			this.cooldown--;
	}

	canFire() {
		return this.cooldown == 0 && this.bullets < this.maxBullets;
	}

	bulletDestroyed() {
		this.bullets--;
		console.log("bullet destroyed");
	}

	fire() {}
}