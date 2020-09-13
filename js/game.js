const tiles = [{
    left: 750,
    top: 750,
    id: 0
},
{
    left: 650,
    top: 750,
    id: 1
},
{
    left: 550,
    top: 750,
    id: 2
},
{
    left: 450,
    top: 750,
    id: 3
},
{
    left: 350,
    top: 750,
    id: 4
},
{
    left: 350,
    top: 650,
    id: 5
},
{
    left: 450,
    top: 650,
    id: 6
},
{
    left: 550,
    top: 650,
    id: 7
},
{
    left: 650,
    top: 650,
    id: 8
},
{
    left: 750,
    top: 650,
    id: 9
},
{
    left: 750,
    top: 550,
    id: 10
},
{
    left: 650,
    top: 550,
    id: 11
},
{
    left: 550,
    top: 550,
    id: 12
},
{
    left: 450,
    top: 550,
    id: 13
},
{
    left: 350,
    top: 550,
    id: 14
},
{
    left: 350,
    top: 450,
    id: 15
},
{
    left: 450,
    top: 450,
    id: 16
},
{
    left: 550,
    top: 450,
    id: 17
},
{
    left: 650,
    top: 450,
    id: 18
},
{
    left: 750,
    top: 450,
    id: 19
},
{
    left: 750,
    top: 350,
    id: 20
},
{
    left: 650,
    top: 350,
    id: 21
},
{
    left: 550,
    top: 350,
    id: 22
},
{
    left: 450,
    top: 350,
    id: 23
},
{
    left: 350,
    top: 350,
    id: 24
},
{
    left: 350,
    top: 250,
    id: 25
},
{
    left: 450,
    top: 250,
    id: 26
},
{
    left: 550,
    top: 250,
    id: 27
},
{
    left: 650,
    top: 250,
    id: 28
},
{
    left: 750,
    top: 250,
    id: 29,
},
]




var firstplayer = localStorage.getItem('player1');
var secoundplayer = localStorage.getItem('player2');
document.getElementById("goesfirst").innerHTML = firstplayer + ' will first start the journey for the castle, please roll the dice!';
document.getElementById("gplayerPlaceholder").innerHTML = firstplayer ;
document.getElementById("gplayer2Placeholder").innerHTML = secoundplayer ;

function PlayerImgs() {
    document.getElementById("imageplayer").style.backgroundImage = "url('img/"+firstplayer+".jpg')";
    document.getElementById("image2player").style.backgroundImage = "url('img/"+secoundplayer+".jpg')";
    document.getElementById("image2player").style.opacity = "0.5";
  }


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}



const tilesWrapper = document.getElementById('tiles-wrapper');

tiles.forEach((tile) => {
  const tileDiv = document.createElement('div');
  tileDiv.className = 'tile';
  tileDiv.id = tile.id;
  tileDiv.style.left = tile.left + 'px';
  tileDiv.style.top = tile.top + 'px';
  tilesWrapper.appendChild(tileDiv);
});



const button = document.getElementById('roll-button');
const player1 = document.getElementById('playerone');
const player2 = document.getElementById('playertwo');
document.getElementById("dice").style.color = "#727D71";
let Player1Start = 0; // starting positon
let Player2Start = 0; // starting positon
let rollorder = 1;
button.addEventListener('click', (e) => {
    document.getElementById("goesfirst").style.display = "none";
    if (rollorder == 1) {
        document.getElementById("imageplayer").style.opacity = "0.5";
        document.getElementById("image2player").style.opacity = "1";
        const roll = rollDice();
        console.log(roll);
        document.getElementById('dice').innerHTML = roll;
        document.getElementById("turn").innerHTML = 'Turn: Player 2!';
        document.getElementById("dice").style.color = "#727D71";
        if (Player1Start + roll >= tiles.length) {
            Player1Start = tiles.length - 1;
        } else {
            Player1Start += roll;
        }

        if (roll == 6) {
            rollorder = 1;
            document.getElementById("image2player").style.opacity = "0.5";
            document.getElementById("imageplayer").style.opacity = "1";
            document.getElementById("turn").innerHTML = 'Turn: Player 1!';
            document.getElementById("dice").style.color = "#727D71";
        } else {
            rollorder = 2;
        }
        if (Player1Start === 7) {
            Player1Start = 7;
            Player1Start = 4;
            trap1()            
        }

        if (Player1Start === 14) {
            Player1Start = 14;
            Player1Start = 9;
            trap2()            
        }

        if (Player1Start === 17) {
            Player1Start = 17;
            Player1Start = 15;
            trap3()         
        }

        if (Player1Start === 20) {
            Player1Start = 20;
            Player1Start = 16;
            trap4()  
        }

        if (Player1Start === 25) {
            Player1Start = 25;
            Player1Start = 22;
            trap5()              
        }
        
        player1.style.left = tiles[Player1Start].left + 'px';
        player1.style.top = tiles[Player1Start].top + 'px';

} else {
    document.getElementById("image2player").style.opacity = "0.5";
    document.getElementById("imageplayer").style.opacity = "1";
            const roll = rollDice();
            console.log(roll);
            document.getElementById('dice').innerHTML = roll;
            document.getElementById("turn").innerHTML = 'Turn: Player 1!';
            document.getElementById("dice").style.color = "#6D4C3D";
            if (Player2Start + roll >= tiles.length) {
                Player2Start = tiles.length - 1;
            } else {
                Player2Start += roll;
            }
    
            if (roll == 6) {
                rollorder = 2;
                document.getElementById("image2player").style.opacity = "1";
                document.getElementById("imageplayer").style.opacity = "0.5";
                document.getElementById("turn").innerHTML = 'Turn: Player 2!';
                document.getElementById("dice").style.color = "#6D4C3D";
            } else {
                rollorder = 1;
            }
            if (Player2Start === 7) {
                Player2Start = 7;
                Player2Start = 4;
                strap1()            
            }
    
            if (Player2Start === 14) {
                Player2Start = 14;
                Player2Start = 9;
                strap2()            
            }
    
            if (Player2Start === 17) {
                Player2Start = 17;
                Player2Start = 15;
                strap3()         
            }
    
            if (Player2Start === 20) {
                Player2Start = 20;
                Player2Start = 16;
                strap4()  
            }
    
            if (Player2Start === 25) {
                Player2Start = 25;
                Player2Start = 22;
                strap5()              
            }
            player2.style.left = tiles[Player2Start].left + 'px';
            player2.style.top = tiles[Player2Start].top + 'px';

    }

    function trap1() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = firstplayer + ' tried crossing the bridge but was ambushed, you where sent 3 steps back' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function trap2() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = firstplayer + ' got caught in a snowstorm and was sent back 5 steps to recover' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function trap3() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = firstplayer + ' got challenged to a duel, unfortunately you lost and must take 2 steps back to get energy back' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function trap4() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = firstplayer + ' did not check the map before starting, a big mountain appears and you have to go 4 steps back and find a way around' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function trap5() 
{ 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = firstplayer + ' got lost in the town, take 3 steps back and try find another way' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}

function strap() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = secoundplayer + ' tried crossing the bridge but was ambushed, you where sent 3 steps back' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function strap2() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = secoundplayer + ' got caught in a snowstorm and was sent back 5 steps to recover' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function strap3() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = secoundplayer + ' got challenged to a duel, unfortunately you lost and must take 2 steps back to get energy back' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function strap4() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = secoundplayer + ' did not check the map before starting, a big mountain appears and you have to go 4 steps back and find a way around' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}
function strap5() 
{ 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    document.getElementById("traps").innerHTML = secoundplayer + ' got lost in the town, take 3 steps back and try find another way' ;
    setTimeout(function(){
        modal.style.display = "none";
      },3000)
}



  if (Player1Start === tiles.length - 1) {
    localStorage.setItem('victory', firstplayer);
    setTimeout(() => alert(firstplayer + ' won!'), 1);
    location.href = 'win.html';
  }

  if (Player2Start === tiles.length - 1) {
    localStorage.setItem('victory', secoundplayer);
    setTimeout(() => alert(secoundplayer + ' won!'), 1);
    location.href = 'win.html';
  }
});




