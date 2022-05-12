var canvas_lh = 600;

class SnakeBody {

	static UP = 0;
	static DOWN = 1;
	static RIGHT = 2;
	static LEFT = 3;

	static SIZE = 30;

	constructor(x , y,) {
		this._posicion =  new p5.Vector(x, y);
		this.orienta = SnakeBody.UP;
	}
  
	show() {
		//drawBackgroundPattern();
		fill('rgb(34,145,34)');
		rect(this.posicion.x, this.posicion.y, SnakeBody.SIZE, SnakeBody.SIZE);
	}
  
	get posicion() {
	  return this._posicion;
	}

	move() {
		if (!this.canMove())
			return;
		if (this.orienta == SnakeBody.UP){
			this.posicion.y = this.posicion.y - SnakeBody.SIZE;
		}else if (this.orienta == SnakeBody.DOWN){
			this.posicion.y = this.posicion.y + SnakeBody.SIZE;
		} else if (this.orienta == SnakeBody.LEFT){
			this.posicion.x = this.posicion.x - SnakeBody.SIZE;
		} else if (this.orienta == SnakeBody.RIGHT) {
			this.posicion.x = this.posicion.x + SnakeBody.SIZE;
		}
	}

	canMove() {
		let x = 0, y = 0;
		if (this.orienta == SnakeBody.UP){
			y = this.posicion.y - SnakeBody.SIZE;
		}else if (this.orienta == SnakeBody.DOWN){
			y = this.posicion.y + SnakeBody.SIZE;
		} else if (this.orienta == SnakeBody.LEFT){
			x = this.posicion.x - SnakeBody.SIZE;
		} else if (this.orienta == SnakeBody.RIGHT) {
			x = this.posicion.x + SnakeBody.SIZE;
		}


		if (x < 0){
			return false;
		}
		if (x + SnakeBody.SIZE > width){
			return false;
		}
		  
		if (y < 0){
			return false;
		}
		else if (y + SnakeBody.SIZE >  height){
			return false;
		}
		return true;
	}
  
	changeDirection(keyCode) {
		if (keyCode === UP_ARROW && this.orienta != SnakeBody.DOWN ) {
			this.orienta = SnakeBody.UP;
		  } else if (keyCode === DOWN_ARROW && this.orienta != SnakeBody.UP ) {
			this.orienta = SnakeBody.DOWN;
		  }
		  else if (keyCode === LEFT_ARROW && this.orienta != SnakeBody.RIGHT ) {
			this.orienta = SnakeBody.LEFT;

		  } else if (keyCode === RIGHT_ARROW && this.orienta != SnakeBody.LEFT ) {
			this.orienta = SnakeBody.RIGHT;
		  }
	}
}

function keyPressed() {
	snake.changeDirection(keyCode);
}