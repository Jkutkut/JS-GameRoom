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

	/*newApple() {
		let x, y;
		do{
			x = (int(random(0, 20)) * REC_SIZE ) + (REC_SIZE/2);
			y = (int(random(0, 20)) * REC_SIZE ) + (REC_SIZE/2);
		} while (snake.posicion.x == x && snake.posicion.y == y || snake.body.posicion.x == x && snake.body.posicion.y == y);
	  
}*/
}