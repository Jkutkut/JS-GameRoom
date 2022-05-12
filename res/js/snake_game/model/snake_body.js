var canvas_lh = 600;

class Snake {

	static UP = 0;
	static DOWN = 1;
	static RIGHT = 2;
	static LEFT = 3;

	static SIZE = 30;

	constructor(x , y) {
		this._posicion =  new p5.Vector(x, y);
		this.orienta = Snake.UP;
		this.body = null;
		this.crecer = 5;
	}
  
	show() {
		//drawBackgroundPattern();
		fill('rgb(34,145,34)');
		rect(this.posicion.x, this.posicion.y, Snake.SIZE, Snake.SIZE);
		if (this.body != null)
			this.body.show();
	}
  
	get posicion() {
	  return this._posicion;
	}

	move() {
		if (!this.canMove())
			return;
		let x = this.posicion.x
		let y = this.posicion.y;
		if (this.orienta == Snake.UP){
			this.posicion.y = this.posicion.y - Snake.SIZE;
		}else if (this.orienta == Snake.DOWN){
			this.posicion.y = this.posicion.y + Snake.SIZE;
		} else if (this.orienta == Snake.LEFT){
			this.posicion.x = this.posicion.x - Snake.SIZE;
		} else if (this.orienta == Snake.RIGHT) {
			this.posicion.x = this.posicion.x + Snake.SIZE;
		}
		if (this.crecer > 0) {
			this.grow();
		}
		if (this.body != null)
			this.body.moveTo(x, y);
	}

	canMove() {
		let x = 0, y = 0;
		if (this.orienta == Snake.UP){
			y = this.posicion.y - Snake.SIZE;
		}else if (this.orienta == Snake.DOWN){
			y = this.posicion.y + Snake.SIZE;
		} else if (this.orienta == Snake.LEFT){
			x = this.posicion.x - Snake.SIZE;
		} else if (this.orienta == Snake.RIGHT) {
			x = this.posicion.x + Snake.SIZE;
		}


		if (x < 0){
			return false;
		}
		if (x + Snake.SIZE > width){
			return false;
		}
		  
		if (y < 0){
			return false;
		}
		else if (y + Snake.SIZE >  height){
			return false;
		}
		return true;
	}
  
	changeDirection(keyCode) {
		if (keyCode === UP_ARROW && this.orienta != Snake.DOWN ) {
			this.orienta = Snake.UP;
		  } else if (keyCode === DOWN_ARROW && this.orienta != Snake.UP ) {
			this.orienta = Snake.DOWN;
		  }
		  else if (keyCode === LEFT_ARROW && this.orienta != Snake.RIGHT ) {
			this.orienta = Snake.LEFT;

		  } else if (keyCode === RIGHT_ARROW && this.orienta != Snake.LEFT ) {
			this.orienta = Snake.RIGHT;
		  }
	}

	grow() {
		this.crecer--;

		if (this.body == null)
			this.body = new SnakeBody();
		else
			this.body.grow();
	}

}


class SnakeBody {
	constructor() {
		this._posicion =  new p5.Vector(0, 0);
		this.next = null;
	}
  
	show() {
		//drawBackgroundPattern();
		fill('rgb(34,145,34)');
		rect(this.posicion.x, this.posicion.y, Snake.SIZE, Snake.SIZE);
		if (this.next != null)
			this.next.show();
	}

	moveTo(x, y) {
		if (this.next != null)
			this.next.moveTo(this.posicion.x, this.posicion.y);
		this.posicion.x = x;
		this.posicion.y = y;
	}
  
	get posicion() {
	  return this._posicion;
	}

	grow() {
		if (this.next == null)
			this.next = new SnakeBody();
		else
			this.next.grow();
	}
}