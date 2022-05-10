class Ball {
  static R = 20;
  constructor(x, y) {
    this.posicion = new p5.Vector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(3);

    this.r = Ball.R;
  }
  update(player, enemy) {
    this.posicion.add(this.velocity);
    this.playerCollision(player);
    this.playerCollision(enemy);
  }
  show() {
    fill(255);
    ellipse(this.posicion.x, this.posicion.y, this.r * 2);
  }

  checkBoundaryCollision() {
    if (this.posicion.x > width - this.r) {
      this.posicion.x = width - this.r;
      this.velocity.x *= -1;
    } else if (this.posicion.x < this.r) {
      this.posicion.x = this.r;
      this.velocity.x *= -1;
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
      if (player.posicion.x == 0) {
        this.posicion.x = Jugador.ANCHURA + this.r;
        console.log("jugador izquierda")
      } else {
        this.posicion.x = player.posicion.x - this.r;
        console.log("jugador d")
      }
      //this.posicion.add(this.velocity);
    }
  }
}