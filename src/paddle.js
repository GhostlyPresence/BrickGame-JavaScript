
function Paddle(gameWidth, gameHeight){

    
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 150;
        this.height = 15;
        this.maxSpeed = 10;
        this.paddle = this.brick = document.getElementById("paddle_img");
        this.id = "paddle";
            
        this.speed = 0;

        this.pos = {
            x: this.gameWidth/2 - this.width/2,
            y: this.gameHeight - this.height - 10
        };
    

    this.draw = function(ctx)
    {
        //ctx.fillStyle = "#660066";
        ctx.drawImage(this.paddle, this.pos.x, this.pos.y, this.width, this.height);
    }

    this.moveLeft = function()
    {
        this.speed = -this.maxSpeed;
    }

    this.moveRight = function()
    {
        this.speed = this.maxSpeed;
    }

    this.stop = function()
    {
        this.speed = 0;
    }

    this.update = function(deltaTime)
    {
       if(this.pos.x  <=0) this.pos.x = 0;
       if(this.pos.x + this.width >= this.gameWidth) this.pos.x = this.gameWidth - this.width;

        this.pos.x += this.speed;
       //console.log(this.speed);
    }


}