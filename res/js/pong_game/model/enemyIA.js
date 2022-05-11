class EnemyIA extends Jugador {
  static V = 5;
  update(limite, ball) {
    let dist = ball.posicion.y - (this.posicion.y + Jugador.ALTURA / 2);
    let newY;
    if (dist > 0) {
      newY = this.posicion.y + Math.min(dist, EnemyIA.V);
    } else {
      newY = this.posicion.y + Math.max(dist, -EnemyIA.V);
    }

    if (newY < 0) {
      newY = 0;
    }
    if (newY + Jugador.ALTURA > limite) {
      newY = limite - Jugador.ALTURA;
    }
    this.posicion.y = newY;
  }
}