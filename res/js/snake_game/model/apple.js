class Apple {
	static ANCHURA = 30;
	static ALTURA = 30;
  
	constructor(posicion) {
	  this._posicion = posicion;
	}
  
	show() {
		let x_circle = (int(random(0, 20)) * 30 ) +15;
		let y_circle = (int(random(0, 20)) * 30 ) +15;
		
		fill('#F44336');
		ellipse(x_circle, y_circle, circle_hl);
	}
  
	get posicion() {
	  return this._posicion;
	}
	  
}

var circle_hl = 30;
var canvas_hl = 600;
var y = 0;
var x = 0;
var cont_rect = 0;

/*
function setup() { 
  createCanvas(canvas_hl, canvas_hl);
  noStroke();
  background(220);
  drawBackgroundPattern();
  drawRdCircle();
}*/

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
}