class BasicEnemy extends Enemy {
	static SRC = {
		"basic1": null,
		"basic2": null,
		"basic3": null,
		"basic4": null,
		"basic5": null
	};

	constructor(pos, size, type) {
		super(pos, size, Math.PI);
		if (type < 1)
			type = 1;
		if (type > 5)
			type = type % 5 + 1;

		this.src = BasicEnemy.SRC[`basic${type}`];
	}
}