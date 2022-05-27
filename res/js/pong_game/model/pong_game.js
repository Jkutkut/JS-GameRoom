let player;
let enemy;
let bola;
let score;

const HEIGHT = 600;
const WIDTH = 800;



function preload() {
    Ball.BALL_SOUND = loadSound("../res/js/pong_game/sounds/blip2.mp3");
    //Sound over
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    background(0);
    strokeWeight(2)
    fill(255);
    imageMode(CENTER);
    textSize(50);


    player = new Jugador(0, mouseY);
    enemy = new EnemyIA(WIDTH - Jugador.ANCHURA, (HEIGHT - Jugador.ALTURA) / 2);
    bola = new Ball(WIDTH / 2, HEIGHT / 2);
    score = { j: 0, e: 0 };

}

function draw() {
    background(0);
    fill(255);

    //dibujar rectangulos dividiendo el canvas en 2
    push();
    fill(200, 200, 200);
    for (let i = 0; i < HEIGHT; i += 20) {
        if (i % 40 == 0) {
            rect(WIDTH / 2, i, 20, 30);
        }

    }
    pop();


    player.show();
    player.update(HEIGHT);


    enemy.show();
    enemy.update(HEIGHT, bola);
    text(score.j, WIDTH * 0.3, 40);
    text(score.e, WIDTH * 0.7, 40);
    bola.show();
    bola.update(player, enemy);
    bola.checkBoundaryCollision();


}

/*function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        value == 255;
    }
    if (keyCode == RIGHT_ARROW) {
        value == 0;
    }

}*/

function setDifficulty(difficulty) {
    if (difficulty == "easy") {
        enemy.speed = 3;
    } else if (difficulty == "medium") {
        enemy.speed = 5;
    } else if (difficulty == "hard") {
        enemy.speed = 7;
    }
}
