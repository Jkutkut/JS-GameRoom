
class Snake {

	static UP = 0;
	static DOWN = 1;
	static RIGHT = 2;
	static LEFT = 3;

	static SIZE = 30;

	static HEAD_COLOR = [32, 140, 36];
	static COLOR = [32, 140, 36];

	constructor(x , y) {
		this._posicion =  new p5.Vector(x, y);
		this.orienta = Snake.UP;
		this.body = null;
		this.crecer = 5;
	}
  
	show() {
		push();
		fill(...Snake.HEAD_COLOR);
		translate(this.posicion.x + Snake.SIZE / 2, this.posicion.y + Snake.SIZE / 2);
		if (this.orienta == Snake.DOWN)
			rotate(PI);
		else if (this.orienta == Snake.LEFT)
			rotate(-PI/2);
		else if (this.orienta == Snake.RIGHT)
			rotate(PI/2);
		rectMode(CENTER);
		rect(0, 0, Snake.SIZE, Snake.SIZE, 20, 20, 0 , 0);
		pop();
		if (this.body != null)
			this.body.show(this._posicion.x, this.posicion.y);
	}
  
	get posicion() {
	  return this._posicion;
	}

	move() {
		this.collisionApple();

		if (!this.canMove()) {
			console.log("Game Over");
			textSize(40);
			text("Game Over", width/2 - 90, height/2 - 60);
			textSize(35);
			text("Press R or right\n  click to restart", width/2 - 110, height/2 + 55);
			noLoop();
			return;
		}
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
		if ((keyCode === UP_ARROW || keyCode == 87) && this.orienta != Snake.DOWN ) {
			this.orienta = Snake.UP;
		  } else if ((keyCode === DOWN_ARROW || keyCode == 83) && this.orienta != Snake.UP ) {
			this.orienta = Snake.DOWN;
		  }
		  else if ((keyCode === LEFT_ARROW || keyCode == 65) && this.orienta != Snake.RIGHT ) {
			this.orienta = Snake.LEFT;

		  } else if ((keyCode === RIGHT_ARROW || keyCode == 68) && this.orienta != Snake.LEFT ) {
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

	collisionApple(){
		if (apple.posicion.x == this.posicion.x + (REC_SIZE/2) && apple.posicion.y == this.posicion.y + (REC_SIZE/2)){
			//borrar apple
			this.crecer++; 
			// console.log(this.crecer);
			apple = new Apple();
			
		}
	}

	collisionSnake() {
		if (this.body != null) {

		}
	}

	isIn(x, y) {
		if (this.posicion.x == x && this.posicion.y == y)
			return true;
		if (this.body != null)
			return this.body.isIn(x, y);
		return false;
	}
	
}

class SnakeBody {
	constructor() {
		this._posicion =  new p5.Vector(0, 0);
		this.next = null;
		this.color = [...Snake.COLOR];
	}
  
	show(head_x, head_y) {
		if(head_x == this.posicion.x && head_y == this.posicion.y){
			noLoop();
		}
		push();
		fill(...this.color);
		rect(this.posicion.x, this.posicion.y, Snake.SIZE, Snake.SIZE);
		pop();
		if (this.next != null)
			this.next.show(head_x, head_y);
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
		if (this.next == null) {
			this.next = new SnakeBody();
			this.next.color = this.color.map(x => x += 2);
		}
		else
			this.next.grow();
	}

	isIn(x, y) {
		if (this.posicion.x == x && this.posicion.y == y)
			return true;
		if (this.next != null)
			return this.next.isIn(x, y);
		return false;
	}

}