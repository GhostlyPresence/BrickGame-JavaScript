function Ball(gameWidth, gameHeight)
{
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.ball = document.getElementById("ball_img");
    this.pos = {
        x: 220,
        y: 230
    };
    
    this.speed = {
        x: 5,
        y: 5
    };
    this.width = 20;
    this.height = 20;

    this.draw = function(ctx)
    {
        ctx.drawImage(this.ball, this.pos.x, this.pos.y, this.width, this.height);
    }

    this.update = function(deltaTime)
    {
        //left or right wall
        if(this.pos.x  <=0 || this.pos.x + this.width >= this.gameWidth) 
                this.speed.x = -this.speed.x;

        //top of the wall
        if(this.pos.y  <=0 ) 
                this.speed.y = -this.speed.y;
        
        //bottom of the wall
        if(this.pos.y + this.height >= this.gameHeight)
        {
            this.speed.x = this.speed.y = 0;
            document.getElementById("gameScreen").style.backgroundColor = "red";
            alert("you lose");
            this.pos.y = this.gameHeight - this.height - 1;

        }

        //with the paddle
        let d = DetectCollision(this, paddle);
        if( d === 1) {
            this.speed.y = -this.speed.y;
            this.pos.y = paddle.pos.y - this.height;
        }

        


        else if(d === 2) 
        {
            
            this.speed.y = -this.speed.y;
            this.speed.x = -this.speed.x;
            //this.pos.x = paddle.pos.x + t*paddle.width - this.width;
            this.pos.y = paddle.pos.y - this.height;
        }
        
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }

}