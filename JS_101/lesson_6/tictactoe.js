const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // coumns
  [1, 5, 9], [3, 5, 7]            // diagonal
];
const WINNING_SCORE = 1;
const FIRST_MOVE = 'choose';

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}
function initalizeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(msg) {
  console.log(` => ${msg}`);
}

function pause() {
  let now = Date.now();
  let end = now + 3000;
  while (now < end) {
    now = Date.now();
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(array, delimiter = ', ', string = 'or') {

  if (array.length > 2) {
    return `${array.slice(0, array.length - 1).join(`${delimiter}`)} ${string} ${array[array.length - 1]}`;
  } else if (array.length === 2) {
    return array.join(` ${string} `);
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else if (array.length === 0) {
    return "";
  }
  return null;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findThreat(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findThreat(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  if (!square) {
    if (emptySquares(board).includes('5')) {
      square = '5';
    }
  }
  if(!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}
function currentScore(score, board) {

  if (detectWinner(board) === 'Player') {
    score.player += 1;
  } else if (detectWinner(board) === 'Computer') {
    score.computer += 1;
  } else {
    return score;
  }
  return null;
}

function displayScore(score) {
  prompt(`Current score is: Player has ${score.player}, Computer has ${score.computer}`);
}

function overallWinner(score) {
  if (score.player === WINNING_SCORE) {
    return 'Player';
  } else if (score.computer === WINNING_SCORE) {
    return 'Computer';
  }
  return null;
}

function findThreat(line, board, marker) {
  let currentMarkers = line.map(square => board[square]);

  if (currentMarkers.filter(el => el === marker).length === 2) {
    let openSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (openSquare !== undefined) {
      return openSquare;
    }
  }
  return null;
}
function playFirst(board, currentPlayer) {
  if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  } else {
    playerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'computer' ? 'player' : 'computer';
}

function chooseFirstPlayer() {
  let chosenPlayer;
  while (true) {
    prompt('Who will play first? Enter computer or player: ');
    chosenPlayer = readline.question().toLowerCase();
    if (chosenPlayer === 'player' || chosenPlayer === 'computer') break;

    prompt("Sorry, that's not a valid choice.");
  }
  return chosenPlayer;
}

function playAgain() {
  let answer;
  while (true) {
    prompt('Play again? (y or n)');
    let answer = readline.question().toLowerCase();
    if (answer === 'y' || answer === 'n') break;
    prompt("Sorry that's not a valid input");
  }
  if (answer !== 'y') {
    return false;
  }
  return null;
}

// Main game loop

while (true) {

  let score = {player: 0, computer: 0};
  let firstPlayer = FIRST_MOVE === 'choose' ? chooseFirstPlayer() : FIRST_MOVE;

  while (true) {
    let board = initalizeBoard();
    console.log(`Current Score is ${score.player}`);

    let currentPlayer = firstPlayer;

    while (true) {

      displayBoard(board);

      playFirst(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It'a a tie!");
    }
    currentScore(score, board);
    displayScore(score);
    pause();

    if (overallWinner(score)) {
      prompt(`${overallWinner(score)} is the winner!`);
      break;
    }
  }
  if (playAgain() === false) break;
}
prompt('Thanks for playing! Goodbye');
