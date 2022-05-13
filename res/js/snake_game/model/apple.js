class Apple {
  
	constructor() {
		let x, y;
		do{
			x = (int(random(0, 20)) * REC_SIZE ) + (REC_SIZE/2);
			y = (int(random(0, 20)) * REC_SIZE ) + (REC_SIZE/2);
		} while (snake.isIn(x - (REC_SIZE/2), y - (REC_SIZE/2)));
		
		console.log(x, y);
		console.log(snake.isIn(x, y));
	  	this._posicion = new p5.Vector(x, y);
	}
  
	show() {
		push();
		fill('#F44336');
		ellipse(this.posicion.x, this.posicion.y, REC_SIZE);
		pop();
	}
  
	get posicion() {
	  return this._posicion;
	}
}
