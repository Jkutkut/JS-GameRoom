class EnemyIA extends Jugador {
  static V = 10;
  update(limite, ball) {
    if (ball.posicion.y < this.posicion.y + (Jugador.ALTURA / 2)) {
      this.up(limite);
    } else if (ball.posicion.y > this.posicion.y + (Jugador.ALTURA / 2)) {
      this.down(limite);
    } else {

    }
  }

  up(limite) {
    let newY = this.posicion.y - EnemyIA.V;
    if (newY < 0) {
      newY = 0;
    }
    this.posicion.y = newY;
  }

  down(limite) {
    let newY = this.posicion.y + EnemyIA.V;
    if (newY + Jugador.ALTURA > limite) {
      newY = limite - Jugador.ALTURA;
    }
    this.posicion.y = newY;
  }
}