var canvas;
var music;
var sur1, sur2, sur3, sur4
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    sur1 = createSprite(100, 580, 190, 10)
    sur1.shapeColor = ("green")
    sur2 = createSprite(300, 580, 190, 10)
    sur2.shapeColor = ("orange")
    sur3 = createSprite(500, 580, 190, 10)
    sur3.shapeColor = ("red")
    sur4 = createSprite(700, 580, 190, 10)
    sur4.shapeColor = ("blue")

    //create box sprite and give velocity
    ball = createSprite(random(20, 750), 10, 20, 20)
    ball.velocityX = 1
    ball.velocityY = 4
}

function draw() {
    background(0);
    //create edgeSprite
    if(ball.x < 10 || ball.x > 790){
        ball.velocityX = -ball.velocityX
    }
    if(ball.y < 10){
        ball.velocityY = -ball.velocityY
    }

    //add condition to check if box touching surface and make it box
    if(sur1.isTouching(ball) && ball.bounceOff(sur1)){
        ball.shapeColor = ("green")
    }
    if(sur2.isTouching(ball)){
        ball.velocityY = 0
        ball.velocityX = 0
        ball.shapeColor = ("orange")
        music.play()

    }
    if(sur3.isTouching(ball) && ball.bounceOff(sur3)){
        ball.shapeColor = ("red")
    }
    if(sur4.isTouching(ball) && ball.bounceOff(sur4)){
        ball.shapeColor = ("blue")
    }

    drawSprites()
}
