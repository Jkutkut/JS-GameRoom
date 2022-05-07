class SnakeBody {
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

var x = 200;
var y = 200;
var canvas_lh = 600;
var rect_lh = 30;
var ori = 'u' // r(igth), l(eft), u(p), d(own)


function setup() { 
  createCanvas(canvas_lh, canvas_lh);
  noStroke();
} 

function draw() { 
  background(220);
  fill('rgb(34,145,34)');
  rect(x, y , rect_lh, rect_lh);
  
  if (ori === 'u'){
    y = y - rect_lh;
  }else if (ori === 'd'){
    y = y + rect_lh;
  } else if (ori === 'l'){
    x = x - rect_lh;
  } else if (ori === 'r') {
     x = x + rect_lh;
  }
 
  if (x <= 0){
    x = 0;
  }else if (x >= canvas_lh - rect_lh){
    x = canvas_lh - rect_lh
  }
  
  if (y <= 0){
    y = 0;
  } else if (y >=  canvas_lh - rect_lh){
    y =  canvas_lh - rect_lh
  }
 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    ori = 'u';
    //y = y - rect_lh;
  } else if (keyCode === DOWN_ARROW) {
    ori = 'd';
    //y = y + rect_lh;
  }
  if (keyCode === LEFT_ARROW) {
    ori = 'l';
    //x = x - rect_lh;
  } else if (keyCode === RIGHT_ARROW) {
    ori = 'r';
    //x = x + rect_lh;
  }
  
}