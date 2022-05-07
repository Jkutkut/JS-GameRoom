class Jugador {
  static ANCHURA = 20;
  static ALTURA = 100;

  constructor(posicion) {
    this._posicion = posicion;
  }

  show() {
    fill(255);
    rect(this.posicion.x, this.posicion.y, Jugador.ANCHURA, Jugador.ALTURA);
  }

  get posicion() {
    return this._posicion;
  }

  up() {
    this.posicion.y -= 10;
  }
}