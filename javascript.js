let gameBoard = [" "," "," "," "," "," "," "," "," "];
/*function player(name, marker, points){ //constructor for new book objects
    this.name = name
    this.marker = marker
    this.points = points
} */
let player = (name, marker, points) => { //factory for making new players
    return { name, marker, points};
  };
let player1= player("You", "X", 0)
let player2= player("Other guy", "O", 0)
let currentPlayer = player1;
const boardLogic= (() => { 
function winStatus(){    //basically just the logic to see if it goes across 3 in a row on the board
    if((gameBoard[0] == gameBoard[1]) & (gameBoard[0] ==gameBoard[2]) & (gameBoard[0] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        currentPlayer.points += 1;
        displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
  } else if((gameBoard[0] == gameBoard[3]) & (gameBoard[0] == gameBoard[6]) & (gameBoard[0] != " ")){
    gameBoard = [" "," "," "," "," "," "," "," "," "];
    currentPlayer.points += 1;
    displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
     }else if((gameBoard[0] == gameBoard[4]) & (gameBoard[0] == gameBoard[8]) & (gameBoard[0] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        currentPlayer.points += 1;
        displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
    }else if((gameBoard[3] == gameBoard[4]) & (gameBoard[3] == gameBoard[5]) & (gameBoard[3] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        currentPlayer.points += 1;
        displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
     }else if((gameBoard[6] == gameBoard[7]) & (gameBoard[6] == gameBoard[8]) & (gameBoard[6] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        currentPlayer.points += 1;
        displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
    }else if((gameBoard[2] == gameBoard[5]) & (gameBoard[2] == gameBoard[8]) & (gameBoard[2] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        currentPlayer.points += 1;
        displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
    }else if((gameBoard[2] == gameBoard[4]) & (gameBoard[2] == gameBoard[6]) & (gameBoard[2] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        currentPlayer.points += 1;
        displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
    }else if((gameBoard[1] == gameBoard[4]) & (gameBoard[1] == gameBoard[7]) & (gameBoard[1] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        currentPlayer.points += 1;
        displayGameBoard()
        displayWinStatus(currentPlayer.name+" wins!" + "\nand the score is currently\n player 1= " +player1.points+ "\n player 2= " + player2.points )
     }else if((gameBoard[0] != " ") & (gameBoard[1] != " ") & (gameBoard[2] != " ") & (gameBoard[3] != " ") & (gameBoard[4] != " ") & (gameBoard[5] != " ") & (gameBoard[6] != " ") & (gameBoard[7] != " ") & (gameBoard[8] != " ")){
        gameBoard = [" "," "," "," "," "," "," "," "," "];
        displayGameBoard()
        return("It's a tie")
        
    } else{
        if (currentPlayer == player1){
            currentPlayer = player2;
        } else if(currentPlayer == player2){
            currentPlayer = player1;
        }
    }
    console.log(player1)
    console.log(player2)
}


function displayGameBoard(){ //this is here to show our array that makes up the game board
    const container = document.querySelector('.container'); //selects container we are using to hold everything
    container.replaceChildren(); //clears the container every time we call it so no duplicates
    for(var i = 0; i< gameBoard.length; i++){ 
    const content = document.createElement('div'); 
    content.classList.add('content')
    content.textContent= gameBoard[i] //adds whatever marker we are using
    content.setAttribute("id", i)
    content.setAttribute("class", "box")


    content.addEventListener("click", function(){ //basically when a user clicks a square it changes it to their marker
         if(gameBoard[content.id] == " "){
            gameBoard[content.id] = currentPlayer.marker;
            console.log(currentPlayer.marker)
            console.log(gameBoard)
         } else if (gameBoard[content.id] == "O" | "X"){
            console.log("already used")
         }
         displayGameBoard();
         console.log(winStatus())
      });
    container.appendChild(content);
        }
    }
    function displayWinStatus(message){
        const container = document.querySelector('.messageBox'); //selects container we are using to hold everything
        container.replaceChildren(); //clears the container every time we call it so no duplicates
        const content = document.createElement('div'); 
        content.classList.add('content')
        content.textContent= message //adds whatever marker we are using
        container.appendChild(content);


    }
    displayGameBoard();
})();

function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function changePlayerInfo(player1Name,player1Marker,player2Name){
    player1.name = player1Name;
    player1.marker = player1Marker;
    player2.name = player2Name;
    if(player1Marker =="O"){
        player2.marker = "X"
    }
    gameBoard = [" "," "," "," "," "," "," "," "," "];
  }