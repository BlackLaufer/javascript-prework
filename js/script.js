
(function() {
const playGame = function(argPlayerMove) {
    

    const printMessage = function(msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
      }
    
    const clearMessages = function(){
        document.getElementById('messages').innerHTML = '';
      }

      clearMessages();

    const getMoveName = function(argMoveId) {
        if (argMoveId === 1) {
          return 'kamień';
        }

        if (argMoveId === 2) {
            return 'papier';
        }

        if (argMoveId === 3) {
            return 'nożyce';
        }
    }


    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    /*if(randomNumber === 1) {
    computerMove = 'kamień';
    }
    if(randomNumber === 2) {
      computerMove = 'papier';
    }

    if(randomNumber === 3) {
      computerMove = 'nożyce';
    }*/

    

    /*let argPlayerMove = getMoveName (parseInt (prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')));

    console.log('Gracz wpisał: ' + argPlayerMove);*/

    

    const displayResult = function( argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if ((argComputerMove === 'kamień' && argPlayerMove === 'papier')
        || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
        || (argComputerMove === 'papier' && argPlayerMove === 'nożyce')) {
          printMessage('Ty wygrywasz!');
        } 

        if (( argComputerMove === 'papier' && argPlayerMove === 'kamień')
        || (argComputerMove === 'kamień' && argPlayerMove === 'nożyce')
        || (argComputerMove === 'nożyce' && argPlayerMove === 'papier')) {
            printMessage('Przegrywasz');
          } 


        if (( argComputerMove === 'kamień' && argPlayerMove === 'kamień')
        || (argComputerMove === 'papier' && argPlayerMove === 'papier')
        || (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce'))  {
            printMessage('Remis');
        } 
      }

      displayResult(computerMove, argPlayerMove);
}

const buttonClickedPaper = function(){
    playGame('papier');
}

    let testPaper = document.getElementById('play-paper');

    testPaper.addEventListener('click', buttonClickedPaper);

const buttonClickedRock = function(){
    playGame('kamień');
}

    let testRock = document.getElementById('play-rock');

    testRock.addEventListener('click', buttonClickedRock);

const buttonClickedScissors = function(){
    playGame('nożyce');
}

    let testScissors = document.getElementById('play-scissors');

    testScissors.addEventListener('click', buttonClickedScissors);
  })()