function getMoveName(argMoveId){
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

let argPlayerMove = getMoveName (parseInt (prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')));

console.log('Gracz wpisał: ' + argPlayerMove);

displayResult(computerMove, argPlayerMove)

function displayResult ( argComputerMove, argPlayerMove); {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if ( argComputerMove === 'kamień' && argPlayerMove === 'papier') {
    printMessage('Ty wygrywasz!');
  } 

  if ( argComputerMove === 'papier' && argPlayerMove === 'kamień') {
      printMessage('Przegrywasz');
    } 

  if ( argComputerMove === 'kamień' && argPlayerMove === 'nożyce') {
      printMessage('Przegrywasz');
  } 

  if ( argComputerMove === 'nożyce' && argPlayerMove === 'kamień) {
      printMessage('Ty wygrywasz!');
  } 

  if ( argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
      printMessage('Przegrywasz');
  } 

  if ( argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
      printMessage('Ty wygrywasz!');
  } 

  if ( argComputerMove === 'kamień' && argPlayerMove === 'kamień') {
      printMessage('Remis');
  } 

  if ( argComputerMove === 'papier' && argPlayerMove === 'papier') {
      printMessage('Remis');
  } 

  if ( argComputerMove === 'nożyce' && argPlayerMove === 'nożyce') {
      printMessage('Remis');
  
  } 
}



