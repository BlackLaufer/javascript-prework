
function playGame(argPlayerMove) {
  clearMessages();
    function getMoveName(argMoveId) {
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


    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*if(randomNumber === 1) {
    computerMove = 'kamień';
    }
    if(randomNumber === 2) {
      computerMove = 'papier';
    }

    if(randomNumber === 3) {
      computerMove = 'nożyce';
    }*/

    printMessage('Mój ruch to: ' + computerMove);

    /*let argPlayerMove = getMoveName (parseInt (prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')));

    console.log('Gracz wpisał: ' + argPlayerMove);*/

    displayResult(computerMove, argPlayerMove);

    function displayResult ( argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if (
          (argComputerMove === 'kamień' && argPlayerMove === 'papier')
      || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień)
      || (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
      } 

      if ( argComputerMove === 'papier' && argPlayerMove === 'kamień')
      || (argComputerMove === 'kamień' && argPlayerMove === 'nożyce')
      || (argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
          printMessage('Przegrywasz');
        } 


      if ( argComputerMove === 'kamień' && argPlayerMove === 'kamień')
      || (argComputerMove === 'papier' && argPlayerMove === 'papier')
      || (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce')  {
          printMessage('Remis');
      } 
}


function buttonClickedPaper(){
  playGame('2');
}

let testPaper = document.getElementById('play-paper');

testPaper.addEventListener('click', buttonClickedPaper);

function buttonClickedRock(){
  playGame('1');
}

let testRock = document.getElementById('play-rock');

testRock.addEventListener('click', buttonClickedRock);

function buttonClickedScissors(){
  playGame('3');
}

let testScissors = document.getElementById('play-scissors');

testScissors.addEventListener('click', buttonClickedScissors);





