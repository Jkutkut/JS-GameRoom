var snake = null, apple, velocity;
const CANVAS_SIZE = 600;
const REC_SIZE = 30;
const COLOR1 = 255;
const COLOR2 = 190;

const GAME_VELOCITY = 8;


function setup() {
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	noStroke();
}

function setDifficulty(difficulty) {
    if (difficulty == "easy") {
        velocity = 40;
    } else if (difficulty == "medium") {
        velocity = 50;
    } else if (difficulty == "impossible") {
		velocity = 60;
    }
	
	snake = new Snake(CANVAS_SIZE/2, CANVAS_SIZE/2);
	apple = new Apple();
	frameRate(velocity);
}
	
function draw() {
	if (snake == null)
		return;
	// Game velocity
	if (frameCount % GAME_VELOCITY != 0) // if no time to update
		return;
	
	drawBackgroundPattern();
	apple.show();
	snake.show();

	// text("(" + snake.posicion.x + ", " + snake.posicion.y + ")", 20, 20)
	// text("(" + apple.posicion.x + ", " + apple.posicion.y + ")", 20, 40)

	snake.move();
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
	if (keyCode == 82) // R pressed
		location.reload();
}

function gameOver(){
        document.getElementById("gameover").style.display = "flex";
        document.getElementById("gamemenu").style.display = "none";
        document.getElementsByClassName("p5Canvas")[0].style.display = "none";
}