fetch("https://raw.githubusercontent.com/sindrem1/jsonfetch/master/characters.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughChars(json);
    });

    function loopThroughChars(charObject) {
    const charArray = charObject.characters;

    var newHTML = "";

    charArray.forEach(function(card) {
        newHTML += `<div class="characters" onclick="save('${card.Name}')()">
        <img class="char-img" src="${card.imageUrl}" alt="Card image cap">
        <h3 class="char-title">${card.Name}</h3>
        <p class="char-text">${card.Aliases[0]}</p>
        <p class="char-text">Born: ${card.Born}</p>
    </div>`;
    });
    const container = document.querySelector(".card");
    cards.innerHTML = newHTML;
}


var setStorage = window.localStorage;

var PlayerSet = 'player1';

function GameOn(){
  var firstSelected = setStorage.getItem('player1');
  var secoundSelected = setStorage.getItem('player2');
  if(firstSelected && secoundSelected){
    PlayerSelectedInsert()
    document.getElementById("start").style.display = "block";
    document.getElementById("reset").style.display = "block";
    
  }
}

function PlayerSelectedInsert() {
    var firstplayer = localStorage.getItem('player1');
    var secoundplayer = localStorage.getItem('player2');
    document.getElementById("playerPlaceholder").innerHTML = 'Player one has selected ' + firstplayer;
    document.getElementById("player2Placeholder").innerHTML = 'Player two has selected ' +  secoundplayer;
  }

setStorage.clear();


function save(charName){

    setStorage.setItem(PlayerSet, charName);
    var SelectedPlayers = setStorage.getItem(PlayerSet);
    PlayerSet = 'player2';

    GameOn();
}

function StartGame(charName){

    window.location.href = "gamepage.html";

}

function ResetGame(charName){

    setStorage.clear();
    location.reload();

}

