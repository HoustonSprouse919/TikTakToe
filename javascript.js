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

function displayGameBoard(){ //this is here to show all of our books on the page using dom manipulation
    const container = document.querySelector('.container'); //selects container we are using
    container.replaceChildren(); //clears the container every time we call it so no duplicates
    for(var i = 0; i< gameBoard.length; i++){ 
    const content = document.createElement('div'); 
    content.classList.add('content')
    content.textContent= gameBoard[i] //adds book info 
    content.setAttribute("id", i)
    content.setAttribute("class", "box")
    content.addEventListener("click", function(marker){ //when button is clicked toggles between read and not read
         if(gameBoard[div.id] == ""){
            gameBoard[div.id] = marker;
         } else if (gameBoard[div.id] == "O" | "X"){
            console.log("already used")
         }
         displayBooks();
      });
    
    container.appendChild(content);
        }
    }
    displayGameBoard();