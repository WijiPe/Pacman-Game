var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,2,3,2,0,4,0,0,5,0,2,1,1,1,1,1,10,1,1,1,1,1,1,1,1,1,1,1,9,2],
    [2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,9,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,2,2,2,1,2,1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,1,2,2,2,2,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,1,1,1,2,1,1,2,1,2],
    [2,1,2,2,2,2,2,2,1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,1,2,10,2,1,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,2,0,0,2,1,1,1,1,1,2,1,2,1,2,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,1,2,1,2,1,2,1,2,0,0,2,1,2,10,2,1,2,1,2,1,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,2,2,2,1,2,2,2,1,2,1,2,1,2,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,1,2,1,1,1,1,1,1,1,1,6,7,8,1,1,1,2,1,2,2,2,2,2,2,2,2],
    [2,10,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,10,2],
    [2,1,2,2,2,2,2,2,1,2,1,2,1,1,1,1,1,4,2,0,9,0,9,0,2,1,1,1,2,2,2,2,2,2,1,2],
    [2,1,2,0,10,0,0,2,1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,1,2,0,0,10,0,2,1,2],
    [2,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,1,2,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2,1,2],
    [2,1,2,1,3,3,1,2,1,2,1,2,2,2,2,2,2,3,3,2,2,2,2,2,2,1,2,1,2,1,3,3,1,2,1,2],
    [2,1,2,1,3,3,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,3,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,2,0,2,1,1,1,1,1,1,1,1,1,1,1,1,2,0,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,2,0,2,1,2,2,2,2,1,1,2,2,2,2,1,2,0,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,2,4,2,1,2,1,3,2,1,1,2,3,1,2,1,2,5,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,2,1,1,2,2,1,2,2,2,1,2,1,1,2,1,1,2,1,1,2,1,2,2,2,1,2,2,1,1,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,1,2,2,1,2,2,2,1,2,1,2,1,3,3,1,2,1,2,1,2,2,2,1,2,2,1,1,2,2,1,2],
    [2,1,2,1,1,1,1,2,1,2,0,2,1,2,1,2,1,3,3,1,2,1,2,1,2,0,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,2,2,2,1,2,1,2,2,2,2,2,2,1,2,1,2,2,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,2,2,2,1,2,2,2,2,1,1,2,2,2,2,1,2,2,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,3,3,1,2,1,2,0,2,1,1,1,1,1,1,1,1,1,1,1,1,2,0,2,1,2,1,3,3,1,2,1,2],
    [2,1,2,1,3,3,1,2,1,2,2,2,1,2,2,2,2,1,1,2,2,2,2,1,2,2,2,1,2,1,3,3,1,2,1,2],
    [2,1,2,2,2,2,2,2,1,1,1,1,1,2,9,1,1,1,1,1,1,9,2,1,1,1,1,1,2,2,2,2,2,2,1,2],
    [2,9,1,1,1,1,1,1,1,2,2,2,2,2,9,1,1,1,1,1,1,9,2,2,2,2,2,1,1,1,1,1,1,1,9,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];
var score = 0;
var pacman = {
    x:1,
    y:1
};
var movingPacman = document.querySelector("#pacman");
var ghost1 = {
    x:12,
    y:17
};
var ghost2 = {
    x:1,
    y:30
};

var temp = 1;
var temp2 = 1;

function displayWorld(){
    var output ="";
    for(var i=0; i<world.length; i++){
        console.log(world[i].length);
        output += "\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            console.log(i,j);
            if(world[i][j] === 2){
                output += "<div class='brick'></div>";
            } else if(world[i][j] === 1){
                output += "<div class='coin'><img id='coin' src='coin-mario.gif' alt='Coin'></div>";
            } if(world[i][j] === 0){
                output += "<div class='empty'></div>";
            } else if(world[i][j] === 3){
                output += "<div class='coin'><img id='cherry' src='Cherry.png' alt='Cherry'></div>";    
            } if(world[i][j] === 4){
                output += "<div class='coin'><img id='ghost' src='redghost.png' alt='Ghost'></div>";
            }if(world[i][j] === 5){
                output += "<div class='coin'><img id='ghost' src='greenghost.png' alt='Ghost'></div>";
            } else if(world[i][j] === 6){
                output += "<div class='coin'><img id='k' src='k.png' alt='K Alphabet'></div>";
            }if(world[i][j] === 7){
                output += "<div class='coin'><img id='i' src='i.png' alt='I Alphabet'></div>";
            }else if(world[i][j] === 8){
                output += "<div class='coin'><img id='t' src='t.png' alt='K Alphabet'></div>";
            }if(world[i][j] === 9){
                output += "<div class='coin'><img id='apple' src='apple.png' alt='apple'></div>";
            }else if(world[i][j] === 10){
                output += "<div class='coin'><img id='banana' src='Banana.png' alt='Banana'></div>";
            }

        }output += "</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.x*20+"px";
    document.getElementById('pacman').style.left = pacman.y*20+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}
displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e){
    if(e.keyCode === 40 && world[pacman.x+1][pacman.y] !=2){
        pacman.x++;
        movingPacman.style.transform = "rotate(90deg)";
    }
    else if(e.keyCode === 38 && world[pacman.x-1][pacman.y] !=2){
        pacman.x--;
        movingPacman.style.transform = "rotate(270deg)";
    }else if(e.keyCode === 39 && world[pacman.x][pacman.y+1] !=2){
        pacman.y++;
        movingPacman.style.transform = "rotate(0deg)";
    }else if(e.keyCode === 37 && world[pacman.x][pacman.y-1] !=2){
        pacman.y--;
        movingPacman.style.transform = "scaleX(-1)";
    }
    
    if(world[pacman.x][pacman.y] == 1){
        world[pacman.x][pacman.y] = 0;
        score += 10;
        displayWorld();
        displayScore();
    }
    if(world[pacman.x][pacman.y] == 3){
        world[pacman.x][pacman.y] = 0;
        score += 50;
        displayWorld();
        displayScore();
    }
    if(world[pacman.x][pacman.y] == 6){
        world[pacman.x][pacman.y] = 0;
        score += 100;
        displayWorld();
        displayScore();
    }
    if(world[pacman.x][pacman.y] == 7){
        world[pacman.x][pacman.y] = 0;
        score += 100;
        displayWorld();
        displayScore();
    }
    if(world[pacman.x][pacman.y] == 8){
        world[pacman.x][pacman.y] = 0;
        score += 100;
        displayWorld();
        displayScore();
    }
    if(world[pacman.x][pacman.y] == 9){
        world[pacman.x][pacman.y] = 0;
        score += 50;
        displayWorld();
        displayScore();
    }
    if(world[pacman.x][pacman.y] == 10){
        world[pacman.x][pacman.y] = 0;
        score += 50;
        displayWorld();
        displayScore();
    }
    if(world[pacman.x][pacman.y] == 4){
        alert("You lost!");
        location. reload();
        displayWorld();
        displayScore();
    } else {
        displayPacman();
    }

    // console.log(e.keyCode);
}

setInterval( function() {
    var direction = Math.floor(Math.random()*4);
    if(direction === 0 && world[ghost1.x+1][ghost1.y] !=2 && world[ghost1.x+1][ghost1.y] != 5){
        world[ghost1.x][ghost1.y] = temp;
        ghost1.x = ghost1.x+1;
        temp = world[ghost1.x][ghost1.y];
        world[ghost1.x][ghost1.y] = 4;
        displayWorld();
    }
    if(direction === 1 && world[ghost1.x-1][ghost1.y] !=2 && world[ghost1.x-1][ghost1.y] != 5){
        world[ghost1.x][ghost1.y] = temp;
        ghost1.x = ghost1.x-1;
        temp = world[ghost1.x][ghost1.y];
        world[ghost1.x][ghost1.y] = 4;
        displayWorld();
    }
    if(direction === 2 && world[ghost1.x][ghost1.y+1] !=2 && world[ghost1.x][ghost1.y+1] != 5){
        world[ghost1.x][ghost1.y] = temp;
        ghost1.y = ghost1.y+1;
        temp = world[ghost1.x][ghost1.y];
        world[ghost1.x][ghost1.y] = 4;
        displayWorld();
    }
    if(direction === 3 && world[ghost1.x][ghost1.y-1] !=2 && world[ghost1.x][ghost1.y-1] != 5){
        world[ghost1.x][ghost1.y] = temp;
        ghost1.y = ghost1.y-1;
        temp = world[ghost1.x][ghost1.y];
        world[ghost1.x][ghost1.y] = 4;
        displayWorld();
    }
    if(ghost1.x === pacman.x && ghost1.y===pacman.y){
        alert("You lost!");
        location. reload();
    }
    var direction = Math.floor(Math.random()*4);
    if(direction === 0 && world[ghost2.x+1][ghost2.y] !=2 && world[ghost2.x+1][ghost2.y] != 4){
        world[ghost2.x][ghost2.y] = temp2;
        ghost2.x = ghost2.x+1;
        temp2 = world[ghost2.x][ghost2.y];
        world[ghost2.x][ghost2.y] = 5;
        displayWorld();
    }
    if(direction === 1 && world[ghost2.x-1][ghost2.y] !=2 && world[ghost2.x-1][ghost2.y] != 4){
        world[ghost2.x][ghost2.y] = temp2;
        ghost2.x = ghost2.x-1;
        temp2 = world[ghost2.x][ghost2.y];
        world[ghost2.x][ghost2.y] = 5;
        displayWorld();
    }
    if(direction === 2 && world[ghost2.x][ghost2.y+1] !=2 && world[ghost2.x][ghost2.y+1] != 4){
        world[ghost2.x][ghost2.y] = temp2;
        ghost2.y = ghost2.y+1;
        temp2 = world[ghost2.x][ghost2.y];
        world[ghost2.x][ghost2.y] = 5;
        displayWorld();
    }
    if(direction === 3 && world[ghost2.x][ghost2.y-1] !=2 && world[ghost2.x][ghost2.y-1] != 4){
        world[ghost2.x][ghost2.y] = temp2;
        ghost2.y = ghost2.y-1;
        temp2 = world[ghost2.x][ghost2.y];
        world[ghost2.x][ghost2.y] = 5;
        displayWorld();
    }
    if(ghost2.x === pacman.x && ghost2.y===pacman.y){
        alert("You lost!");
        location. reload();
    }
}, 100);