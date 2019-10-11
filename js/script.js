
(function() {
    const playGame = function(argPlayerMove) {
        
        const printMessage = function(msg) {
            const div = document.createElement('div');
            div.innerHTML = msg;
            document.getElementById('messages').appendChild(div);
        }
        
        const clearMessages = function() {
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

        const computerMove = getMoveName(randomNumber);
        
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

    const buttonClickedPaper = function() {
        playGame('papier');
    }

    const testPaper = document.getElementById('play-paper');
    testPaper.addEventListener('click', buttonClickedPaper);

    const buttonClickedRock = function() {
        playGame('kamień');
    }

    const testRock = document.getElementById('play-rock');
    testRock.addEventListener('click', buttonClickedRock);

    const buttonClickedScissors = function() {
        playGame('nożyce');
    }

    const testScissors = document.getElementById('play-scissors');
    testScissors.addEventListener('click', buttonClickedScissors);
})()