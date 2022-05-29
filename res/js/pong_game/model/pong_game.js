let player = null;
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
}

function draw() {
    if (player == null)
        return;
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

    if(score.j == 5 || score.e == 5){
        gameOver();
    }


}

function setDifficulty(difficulty) {
    if (difficulty == "easy") {
        EnemyIA.V = 2;
    } else if (difficulty == "medium") {
        EnemyIA.V = 10;
        Ball.A = 0.0009;
    } else if (difficulty == "impossible") {
        EnemyIA.V = 100;
        Ball.A = 0.002;
    }

    player = new Jugador(0, mouseY);
    enemy = new EnemyIA(WIDTH - Jugador.ANCHURA, (HEIGHT - Jugador.ALTURA) / 2);
    bola = new Ball(WIDTH / 2, HEIGHT / 2);
    score = { j: 0, e: 0 };
}

function gameOver(){
        document.getElementById("gameover").style.display = "flex";
        document.getElementById("gamemenu").style.display = "none";
        document.getElementsByClassName("p5Canvas")[0].style.display = "none";
}