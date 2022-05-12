class BasicEnemy extends Enemy {
	static SRC = {
		"Beholder": null,
		"Emissary": null,
		"basic2": null,
		"basic3": null,
		"basic4": null,
		"basic5": null,
		"basic6": null
	};

	constructor(pos, size, type) {
		super(pos, size, Math.PI);
		this.src = BasicEnemy.SRC[type];
	}
}