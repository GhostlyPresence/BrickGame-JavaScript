 function Brick(gameWidth, gameHeight,position)
 {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.brick = document.getElementById("brick_img");
   
    this.width = 80;
    this.height = 35;
    this.id = "brick";

    this.pos = position;

    this.bricks = [];
    this.markedForDeletion = 0;

    this.draw = function(ctx)
    {
        ctx.drawImage(this.brick, this.pos.x, this.pos.y, this.width, this.height);
        
    }

    this.update = function(deltaTime){
        
        let error = 5;
        
            let d = DetectCollision(ball, this);
            if(d === 1) 
            {
                if(ball.speed.y > 0)
                {
                    ball.speed.y = -ball.speed.y;
                    ball.pos.y = this.pos.y - ball.height - error; 
                }
                else 
                {
                    ball.speed.y = -ball.speed.y;
                    ball.pos.y = this.pos.y + this.height + error;  
                }
                this.markedForDeletion = 1;
                 
                
            }
           else if(d === 2) 
            {
                
                if(ball.speed.y > 0)
                {
                    ball.speed.y = -ball.speed.y;
                    ball.speed.x = -ball.speed.x;
                    ball.pos.y = this.pos.y - ball.height - error; 
                    
                }
                else 
                {
                    ball.speed.y = -ball.speed.y;
                    ball.speed.x = -ball.speed.x;
                    ball.pos.y = this.pos.y + this.height + error;
                     
                }
                this.markedForDeletion = 1;

            }

        
     
       }

       

 }

   