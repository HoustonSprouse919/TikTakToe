let gameBoard = ["x","x","x","x","x","x","x","x","x"];
function player(name, marker){ //constructor for new book objects
    this.name = name
    this.marker = marker
}
function gameFlow(){

    if(gameBoard[0] == gameBoard[1] && gameBoard[2]){
        return("player " + gameBoard[0]+" wins!")
    }
}

console.log(gameFlow())