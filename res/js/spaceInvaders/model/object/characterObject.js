class CharacterObject extends PhysicsObject {

	constructor(pos, size, angle, health, maxBullets) {
		super(pos, size, angle);
		this.health = health;
		this.maxHealth = health;
		this.maxBullets = maxBullets;

		this.cooldown = 0;
		this.bullets = 0;

		this.onPath = false;
	}

	hit() {
		this.health--;
		if (this.health < 0)
			return null;
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
	}

	fire() {}
}