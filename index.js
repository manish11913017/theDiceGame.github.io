var player10 = prompt("Enter Player1 Name");
var player20 = prompt("Enter Player2 Name");

document.querySelector("#player1").innerHTML = player10;
document.querySelector("#player2").innerHTML = player20;

document.querySelector(".btn").onclick = function(){
    var dice1 = Math.floor((Math.random() * 6) + 1);
    var dice2 = Math.floor((Math.random() * 6) + 1);

    var randomDiceImage1 = "dice" + dice1 + ".jpg";
    var randomDiceImage2 = "dice" + dice2 + ".jpg";

    document.querySelector("#dice1").setAttribute("src", randomDiceImage1);
    document.querySelector("#dice2").setAttribute("src", randomDiceImage2);
    
    /*for(var i=1; i<=dice1.lenght; i++){
        if(i == dice1 && dice1 == 1){
            document.querySelector("#dice1").innerHTML = 
        }
    }*/

    if(dice1 > dice2){
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").innerHTML = player10 + " Won!";
        document.querySelector(".alert").style.fontWeight = "900";
    }
    else if(dice1 < dice2){
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").innerHTML = player20 + " Won!";
        document.querySelector(".alert").style.fontWeight = "900";
    }
    else{
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").innerHTML = "Its a draw!";
        document.querySelector(".alert").style.fontWeight = "900";
    }
}