var snake, apple;
const CANVAS_SIZE = 600;
const VELOCITY = 30;
const GAME_VELOCITY = 4;
const REC_SIZE = 30;
const COLOR1 = 255;
const COLOR2 = 190;


function setup() {
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	frameRate(VELOCITY);
	noStroke();
	snake = new Snake(CANVAS_SIZE/2, CANVAS_SIZE/2);
	apple = new Apple();

}
	
function draw() {	
	drawBackgroundPattern();
	apple.show();
	snake.show();

	text("(" + snake.posicion.x + ", " + snake.posicion.y + ")", 20, 20)
	text("(" + apple.posicion.x + ", " + apple.posicion.y + ")", 20, 40)

	// Game velocity
	if (frameCount % GAME_VELOCITY == 0) {
		snake.move();
	}
}

function drawBackgroundPattern(){
	push();
	for (let x = 0; x < (CANVAS_SIZE / REC_SIZE) ; x++) {
		for (let y = 0; y < (CANVAS_SIZE / REC_SIZE); y++) {
			if ((y + x * ((CANVAS_SIZE / REC_SIZE)-1)) % 2 == 0)
				fill(COLOR1);
			else
				fill(COLOR2);
			rect(x * REC_SIZE, y * REC_SIZE, REC_SIZE, REC_SIZE);
		} 
	}
	pop();
}

function keyPressed() {
	snake.changeDirection(keyCode);
}