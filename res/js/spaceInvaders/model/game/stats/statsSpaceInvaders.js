class StatsSpaceInvaders {

	static RESULT_LABELS = [
		"scoreTutorial",
		"scoreIce",
		"scoreIceFast",
		"scoreFire",
		"scoreFireFast",
		"scoreBeholder",
		"scoreEmissary",
	];

	constructor() {
		this.enemies = [];
		for (let i = 0; i < StatsSpaceInvaders.RESULT_LABELS.length; i++)
			this.enemies.push(0);
	}

	enemyDestroyed(enemy) {
		for (let i = 0; i < Enemy.ENEMIES.length; i++)
			if (enemy.constructor === Enemy.ENEMIES[i])
				this.enemies[i]++;
	}

	getStats() {
		let stats = {};
		for (let i = 0; i < StatsSpaceInvaders.RESULT_LABELS.length; i++)
			stats[StatsSpaceInvaders.RESULT_LABELS[i]] = this.enemies[i];
		return stats;
	}
}