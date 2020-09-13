function WinnerImg() {
  var victory = localStorage.getItem('victory');
  document.getElementById("winner").style.backgroundImage = "url('img/"+victory+".jpg')";
  document.getElementById("congrats").innerHTML = victory + ' congratulation you are the winner!';
}


function NewGame(){
    window.location.href = "index.html";

}
