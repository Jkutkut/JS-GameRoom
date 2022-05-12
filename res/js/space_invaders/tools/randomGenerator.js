class RandomGenerator {
	static getCentered(max) {
		return Math.random() * (max * 2) - max;
	}

	static getCenteredOffset(max, offset=0) {
		return RandomGenerator.getRandomCentered(max) + offset;
	}
}