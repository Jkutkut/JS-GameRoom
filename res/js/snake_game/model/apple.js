class Apple {
  
	constructor() {
		let x, y;
		do{
			x = (int(random(0, 20)) * REC_SIZE ) + (REC_SIZE/2);
			y = (int(random(0, 20)) * REC_SIZE ) + (REC_SIZE/2);
		} while (snake.posicion.x == x && snake.posicion.y == y);
		
	  	this._posicion = new p5.Vector(x, y);
	}
  
	show() {
		
		fill('#F44336');
		ellipse(this.posicion.x, this.posicion.y, REC_SIZE);
	}
  
	get posicion() {
	  return this._posicion;
	}
	  
}


/*
function setup() { 
  createCanvas(canvas_hl, canvas_hl);
  noStroke();
  background(220);
  drawBackgroundPattern();
  drawRdCircle();
}*/
/*
function drawRdCircle() {

//TODO : draw apple randomly making sure it is not drawn on the snake

  let x_circle = (int(random(0, 20)) * 30 ) +15;
  let y_circle = (int(random(0, 20)) * 30 ) +15;
  
  fill('#F44336');
  ellipse(x_circle, y_circle, circle_hl);
}

function drawBackgroundPattern(){
  	for (let x = 0; x < 20; x++) {
		for (let y = 0; y < 20; y++) {
			if ((y + x * 19) % 2 == 0)
				fill(255);
			else
				fill(120);
			rect(x * 30, y * 30, 30, 30);
		}
		
	}
}*/