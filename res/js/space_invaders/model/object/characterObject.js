class CharacterObject extends PhysicsObject {

	static HEALTH = 1;

	constructor(pos, size, angle, health) {
		super(pos, size, angle);
		this.health = health;
		this.maxHealth = health;

		this.cooldown = 0;
		this.bullets = 0;
	}

	hit() {
		if (this.health == 0)
			return new ShipExplosionAnimation(this);
		this.health--;
		return new ShipHitAnimation(this, this.maxHealth - this.health);
	}


	// Firing logic

	tick () {
		if (this.cooldown > 0)
			this.cooldown--;
	}

	canFire() {
		return this.cooldown == 0 && this.bullets < Ship.MAX_BULLETS;
	}

	bulletDestroyed() {
		this.bullets--;
	}
}