 
function Level()
{
    this.buildLevel = function(gameWidth, gameHeight, level)
    {
        let bricks = [];

        level.forEach((row, rowIndex) => {
            row.forEach((brick, brickIndex) =>{
                if(brick === 1)
                {
                    let position = 
                    {
                        x: brickIndex*80,
                        y: 75 + rowIndex*35
                    }
                    //ctx.drawImage(this.brick, position.x, position.y, this.width, this.height);
                    bricks.push(new Brick(gameWidth, gameHeight, position));
                }
                
            });
        });

        return bricks;
    }
    
    
    
    this.level1 = [
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0]
    ]
}