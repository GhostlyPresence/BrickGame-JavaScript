function DetectCollision(ball, gameObject)
{

    let objPos = {
        top: gameObject.pos.y,
        bottom: gameObject.pos.y + gameObject.height,
        left: gameObject.pos.x,
        right: gameObject.pos.x + gameObject.width,
    };

    let ballPos = {
        top: ball.pos.y,
        bottom: ball.pos.y + ball.height,
        left: ball.pos.x,
        right: ball.pos.x + ball.width,
    };
    
     if(ballPos.bottom >= objPos.top &&
         (ballPos.right >= objPos.left &&
         ballPos.left <= objPos.right) &&
         ballPos.top <= objPos.bottom)
         {
            let audio = new Audio('sounds/pop.wav');
            
            if(gameObject.id === "paddle")
            {
                if(ball.speed.y > 0)
                {
                    if(ballPos.bottom === objPos.top) return 1;
                    else if(ballPos.bottom > objPos.top )
                    {
                        return 2;   
                    }
                }
            }
            else if(gameObject.id === "brick")
            {
                audio.play();
                console.log("collision detected");
                if(ball.speed.y > 0)
                {
                    if(ballPos.bottom === objPos.top) return 1;
                    else if(ballPos.bottom > objPos.top )
                    {
                        return 2;   
                    }
                } 
                else return 1;
                       
            }
            
         }
         
        
         return 0;
}