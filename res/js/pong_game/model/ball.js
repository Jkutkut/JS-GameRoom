class Ball {

  static BALL_SOUND = null;

  static A = 0.0001;

  static R = 20;
  constructor(x, y) {
    this.posicion = new p5.Vector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(5);

    // this.velocity = new p5.Vector(1, 1);
    //this.velocity.mult(10);
    this.r = Ball.R;
  }
  update(player, enemy) {
    this.posicion.add(this.velocity);
    this.velocity.mult(1 + Ball.A);
    this.playerCollision(player);
    this.playerCollision(enemy);
  }
  show() {
    fill(255);
    ellipse(this.posicion.x, this.posicion.y, this.r * 2);
  }

  checkBoundaryCollision() {

    if (this.posicion.x > width - this.r) {
      //this.posicion.x = width - this.r;
      //this.velocity.x *= -1;
      score.j++;
      this.posicion.x = width / 2;
      this.posicion.y = height / 2;
      this.velocity = p5.Vector.random2D();
      this.velocity.mult(5);

      return;
    } else if (this.posicion.x < this.r) {
      //this.posicion.x = this.r;
      //this.velocity.x *= -1;
      score.e++;
      this.posicion.x = width / 2;
      this.posicion.y = height / 2;
      this.velocity = p5.Vector.random2D();
      this.velocity.mult(5);


      return;
    } else if (this.posicion.y > height - this.r) {
      this.posicion.y = height - this.r;
      this.velocity.y *= -1;
    } else if (this.posicion.y < this.r) {
      this.posicion.y = this.r;
      this.velocity.y *= -1;
    }
  }

  playerCollision(player) {
    if (player.posicion.y > this.posicion.y + this.r) {
      return;
    }
    if (player.posicion.y + Jugador.ALTURA < this.posicion.y - this.r) {
      return;
    }
    if (this.posicion.x - this.r <= player.posicion.x + Jugador.ANCHURA &&
      this.posicion.x + this.r >= player.posicion.x) {
      this.velocity.x *= -1;
      this.playSound();
      if (player.posicion.x == 0) {
        this.posicion.x = Jugador.ANCHURA + this.r;
        //console.log("jugador izquierda")
      } else {
        this.posicion.x = player.posicion.x - this.r;
        //console.log("jugador d")
      }
      //this.posicion.add(this.velocity);
    }
  }

  playSound() {
    Ball.BALL_SOUND.play();
  }
}
