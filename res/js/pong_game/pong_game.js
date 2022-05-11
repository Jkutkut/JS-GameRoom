let player;
let enemy;
let bola;

const HEIGHT = 600;
const WIDTH = 600;

function preload() {
    Ball.BALL_SOUND = loadSound("../res/js/pong_game/sounds/blip2.mp3");
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    background(0);
    strokeWeight(2)
    fill(255);
    imageMode(CENTER);

    player = new Jugador(0, mouseY);
    enemy = new EnemyIA(WIDTH - Jugador.ANCHURA, (HEIGHT - Jugador.ALTURA) / 2);
    bola = new Ball(WIDTH / 2, HEIGHT / 2);

}

function draw() {
    background(0);
    fill(255);
    player.show();
    player.update(HEIGHT);

    enemy.show();
    enemy.update(HEIGHT, bola);
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