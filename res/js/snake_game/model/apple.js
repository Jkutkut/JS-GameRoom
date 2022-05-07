class Apple {
	static ANCHURA = 20;
	static ALTURA = 20;
  
	constructor(posicion) {
	  this._posicion = posicion;
	}
  
	show() {
	  fill(0);
	  rect(this.posicion.x, this.posicion.y, SnakeBody.ANCHURA, SnakeBody.ALTURA);
	}
  
	get posicion() {
	  return this._posicion;
	}
	  
}

var circle_hl = 30;
var canvas_hl = 600;

function setup() { 
  createCanvas(canvas_hl, canvas_hl);
  noStroke();
  background(220);
  drawRdCircle();
} 


function drawRdCircle() {
  let x_circle = random(canvas_hl - circle_hl);
  let y_circle = random(canvas_hl - circle_hl);
  fill('#F44336');
  ellipse(x_circle,y_circle,circle_hl,circle_hl);
}