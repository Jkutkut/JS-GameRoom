let player;
let bola;
function setup() {
    createCanvas(600, 600);
    background(0);
    strokeWeight(2)
    fill(255);
    imageMode(CENTER);

    player = new Jugador(mouseX, mouseY - 35);
    bola = new Ball(width / 2, height / 2, 20);

}

function draw() {
    background(0);
    fill(255);
    player.show();
    player.update(600);
    bola.show();
    bola.update();
    bola.checkBoundaryCollision();
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        value == 255;
    }
    if (keyCode == RIGTH_ARROW) {
        value == 0;
    }

}


/*fill(255);
rect(600, mouseY - 35, 40, 70, 20);*/


    // new Ball(100, 400, 20);


