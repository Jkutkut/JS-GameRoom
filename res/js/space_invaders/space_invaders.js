function setup() {
	createCanvas(600, 600);
	background(0);

	let size = 80;

	let offsetH = size / 20, offsetV = size * 0.6;
	for (let i = 0; i < 600 + size; i+=offsetH) {
		for (let j = 0; j < 600; j+=offsetV) {
			ellipse(i, j, size, size);
		}
	}
}

function draw() {
}