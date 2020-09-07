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


let Player1Start = 0; // starting positon
let Player2Start = 0; // starting positon


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


// draw board
const tilesWrapper = document.getElementById('tiles-wrapper');

tiles.forEach((tile) => {
  const tileDiv = document.createElement('div');
  tileDiv.className = 'tile';
  tileDiv.id = tile.id;
  tileDiv.style.left = tile.left + 'px';
  tileDiv.style.top = tile.top + 'px';
  tilesWrapper.appendChild(tileDiv);
});


// button and position logic
const button = document.getElementById('roll-button');
const player1 = document.getElementById('playerone');
const player2 = document.getElementById('playertwo');
let rollorder = 1;
button.addEventListener('click', (e) => {
    document.getElementById("goesfirst").style.display = "none";

  if (rollorder == 1) {
    const roll = rollDice();
    console.log(roll);
    document.getElementById('dice').innerHTML = roll;

    document.getElementById("turn").innerHTML = 'Turn: Player 1!';

  if (Player1Start + roll >= tiles.length) {
    // not enought tiles left, go to last
    Player1Start = tiles.length - 1;
  } else {
    Player1Start += roll;
  }
  if (roll == 6) {
    rollorder = 1;
} else {
    rollorder = 2;
}

}

 if (rollorder == 2) {

    const roll = rollDice();
    console.log(roll);
    document.getElementById('dice').innerHTML = roll;

    document.getElementById("turn").innerHTML = 'Turn: Player 2!';

     if (Player2Start + roll >= tiles.length) {
          // not enought tiles left, go to last
          Player2Start = tiles.length - 1;
        } else {
            Player2Start += roll;
          }
          if (roll == 6) {
            rollorder = 2;
        } else {
            rollorder = 1;
        }           
       
    }
  
  player1.style.left = tiles[Player1Start].left + 'px';
  player1.style.top = tiles[Player1Start].top + 'px';

  player2.style.left = tiles[Player2Start].left + 'px';
  player2.style.top = tiles[Player2Start].top + 'px';
  
  // if on last, WIN!

  if (Player1Start === tiles.length - 1) {
    setTimeout(() => alert(firstplayer + ' won!'), 1);
  }

  if (Player2Start === tiles.length - 1) {
    setTimeout(() => alert(secoundplayer + ' won!'), 1);
  }
});




