class Jugador {
  static ANCHURA = 40;
  static ALTURA = 70;

  constructor(x, y) {
    let posicion = new p5.Vector(x, y);
    this._posicion = posicion;
  }

  show() {
    fill(255);
    rect(this.posicion.x, this.posicion.y, Jugador.ANCHURA, Jugador.ALTURA, 20);
  }


  get posicion() {
    return this._posicion;
  }

  update(limite) {
    let newY = mouseY - Jugador.ALTURA / 2;
    if (newY < 0) {
      newY = 0;
    }
    if (mouseY + Jugador.ANCHURA / 2 > limite) {
      newY = limite - Jugador.ALTURA;
    }
    this.posicion.y = newY;

  }

  up() {
    this.posicion.y -= 10;
  }

  down() {
    this.posicion.y += 10;
  }
}