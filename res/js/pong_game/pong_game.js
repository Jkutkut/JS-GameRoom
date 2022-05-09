let player;
let enemy;
let bola;
function setup() {
    createCanvas(600, 600);
    background(0);
    strokeWeight(2)
    fill(255);
    imageMode(CENTER);

    player = new Jugador(0, mouseY - 35);
    enemy = new Jugador(600 - Jugador.ANCHURA, mouseY - 35);
    bola = new Ball(width / 2, height / 2, 20);

}

function draw() {
    background(0);
    fill(255);
    player.show();
    player.update(600);

    enemy.show();
    enemy.update(600);
    bola.show();
    bola.update(player, enemy);
    bola.checkBoundaryCollision();
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        value == 255;
    }
    if (keyCode == RIGHT_ARROW) {
        value == 0;
    }

}