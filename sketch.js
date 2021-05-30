
var canvas = document.getElementById('gameScreen');
var ctx = canvas.getContext('2d');
var stopId;
var GAME_STATE = 1;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
let level = new Level();
let bricks = level.buildLevel(GAME_WIDTH, GAME_HEIGHT, level.level1);


keyPress();

let lastTime = 0;
let gameObjects = [paddle, ball, ...bricks];
var t=0;

function gameLoop(timeStamp)
{
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    

    gameObjects.forEach((element) => {
        element.update(deltaTime);
    });

    gameObjects.forEach((element) => {
        element.draw(ctx);
    });

   

    
    stopId = requestAnimationFrame(gameLoop);
    var l = bricks.length;
     

    if( l === 0 && t!=-1) 
    {
       t--;
    }
    else if( t === -1) 
    {
        alert("level complete");
       cancelAnimationFrame(stopId);
       
        
    }
    gameObjects = gameObjects.filter((element) => !element.markedForDeletion);
    bricks = bricks.filter((element) => !element.markedForDeletion);
}
requestAnimationFrame(gameLoop);

function toggleGame()
{
    if(GAME_STATE){
        GAME_STATE = 0;
        cancelAnimationFrame(stopId);
        document.getElementById("gameScreen").style.backgroundColor = "#66ff66";
        
    }

    else{
        GAME_STATE = 1;
        requestAnimationFrame(gameLoop);
        document.getElementById("gameScreen").style.backgroundColor = "#ff9966";
        //document.getElementById("brick_img").src = "images/green_brick.png";
    }
}




