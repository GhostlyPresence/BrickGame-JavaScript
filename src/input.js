 function keyPress()
 {
     document.addEventListener('keydown', function(event){
         switch(event.keyCode)
         {
            case 37:
                 paddle.moveLeft();
                 //alert("move left");
                 break;
            case 39:
                paddle.moveRight();
                //alert("move right");
                break;
            case 32:
                toggleGame()
                
                break;
            
         }
     });
     document.addEventListener('keyup', function(event){
        switch(event.keyCode)
        {
           case 37:
               if(paddle.speed < 0)
                paddle.stop();
                break;
           case 39:
               if(paddle.speed > 0)
               paddle.stop();
               break;
           
        }
    });

 }