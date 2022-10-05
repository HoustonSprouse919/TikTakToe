let gameBoard = ["","","","","","","","",""];
let player1= new player("Houston", "X")
let player2= new player("Other guy", "O")
let currentPlayer = player1;
function player(name, marker){ //constructor for new book objects
    this.name = name
    this.marker = marker
}
function gameFlow(){
    if(gameBoard[0] == gameBoard[1] && gameBoard[2]){
        return("player " + currentPlayer.name+" wins!")
    } else if(gameBoard[0] == gameBoard[3] && gameBoard[6]){
        return("player " + currentPlayer.name+" wins!")
    }else if(gameBoard[0] == gameBoard[4] && gameBoard[8]){
        return("player " + currentPlayer.name+" wins!")
    }else if(gameBoard[3] == gameBoard[4] && gameBoard[5]){
        return("player " + currentPlayer.name+" wins!")
    }else if(gameBoard[6] == gameBoard[7] && gameBoard[8]){
        return("player " + currentPlayer.name+" wins!")
    }else if(gameBoard[2] == gameBoard[5] && gameBoard[8]){
        return("player " + currentPlayer.name+" wins!")
    }else if(gameBoard[2] == gameBoard[4] && gameBoard[6]){
        return("player " + currentPlayer.name+" wins!")
    }else if(gameBoard[1] == gameBoard[4] && gameBoard[7]){
        return("player " + currentPlayer.name+" wins!")
    } else{
        if (currentPlayer == player1){
            currentPlayer = player2;
        } else if(currentPlayer == player2){
            currentPlayer = player1;
        }
    }
}


function displayGameBoard(){ //this is here to show all of our books on the page using dom manipulation
    const container = document.querySelector('.container'); //selects container we are using
    container.replaceChildren(); //clears the container every time we call it so no duplicates
    for(var i = 0; i< gameBoard.length; i++){ 
    const content = document.createElement('div'); 
    content.classList.add('content')
    content.textContent= gameBoard[i] //adds book info 
    content.setAttribute("id", i)
    content.setAttribute("class", "box")


    content.addEventListener("click", function(){ //when button is clicked toggles between read and not read
         if(gameBoard[content.id] == ""){
            gameBoard[content.id] = "X";
         } else if (gameBoard[content.id] == "O" | "X"){
            console.log("already used")
         }
         displayGameBoard();
         console.log(gameFlow("1"))
      });
    


    container.appendChild(content);
        }
    }
    displayGameBoard();
