var y = 0;
var x = 0;
var cont_rect = 0;
var r

function setup() {
	createCanvas(600, 600);
	background(0);
	strokeWeight(0);
}
	
function draw() {
	/*while ( y < 600 ) {
		if (cont_rect != 20) {
			rect(x, y, 30, 30);
			x += 30;
			cont_rect++;
		} else {
			cont_rect = 0;
			x = 0;
			y += 30;
		}
	}*/	
	for (let x = 0; x < 20; x++) {
		for (let y = 0; y < 20; y++) {
			if ((y + x * 19) % 2 == 0)
				fill(255);
			else
				fill(120);
			rect(x * 30, y * 30, 30, 30);
		}
		
	}
}