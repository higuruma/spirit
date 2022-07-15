/*Add your JavaScript here*/

var pScore = 0; // Store the pooh score
var tScore = 0; // Store the tigger score
var finalScore = document.getElementById("poohOrTigger");


// Listen for click on answer buttons and call function if clicked
function q1a1(){
    pooh();
}
function q1a2(){
    tigger();
}
function q2a1(){
    pooh();
}
function q2a2(){
    tigger();
}
function q3a1(){
    pooh();
    final();
}
function q3a2(){
    tigger();
    final();
}






function pooh() {
  pScore += 1; 

  console.log(pScore);
}
function tigger() {
  tScore += 1;

  console.log(tScore);
  

}

function final(){
    console.log(tScore);
    console.log(pScore);
    if (tScore>pScore){
        finalScore.innerHTML = "Tigger!";
    } else if (pScore>tScore){
        finalScore.innerHTML = "Pooh!";
    }
}
