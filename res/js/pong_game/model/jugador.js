class Jugador {
  static ANCHURA = 40;
  static ALTURA = 90;

  constructor(x, y, tipoInput) {
    let posicion = new p5.Vector(x, y);
    this._posicion = posicion;
    this._tipoInput = tipoInput;
  }

  show() {
    fill(255);
    rect(this.posicion.x, this.posicion.y, Jugador.ANCHURA, Jugador.ALTURA, 20);
  }


  get posicion() {
    return this._posicion;
  }

  update(limite) {
    if (this._tipoInput == "mouse") {
      this._posicion.y = mouseY;

      let newY = mouseY - Jugador.ALTURA / 2;
      if (newY < 0) {
        newY = 0;
      }
      if (mouseY + Jugador.ALTURA / 2 > limite) {
        newY = limite - Jugador.ALTURA;
      }
      this.posicion.y = newY;

    } else if (this._tipoInput == "tecladoA") {
      let newY = this.posicion.y + (keyIsDown(87) ? -5 : 0) + (keyIsDown(83) ? 5 : 0);
      if (newY < 0) {
        newY = 0;
      }
      if (newY > limite - Jugador.ALTURA) {
        newY = limite - Jugador.ALTURA;
      }
      this.posicion.y = newY;
      
    }else if(this._tipoInput == "tecladoB"){
      let newY = this.posicion.y + (keyIsDown(UP_ARROW) ? -5 : 0) + (keyIsDown(DOWN_ARROW) ? 5 : 0);
      if (newY < 0) {
        newY = 0;
      }
      if (newY > limite - Jugador.ALTURA) {
        newY = limite - Jugador.ALTURA;
      }
      this.posicion.y = newY;
    }


  }


}