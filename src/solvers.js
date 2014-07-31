/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({"n":n});
  for(var y = 0; y < n; y++){
    for(var x = 0; x < n; x++){
      if(board._currentAttributes[x][y] === 1){
        board._currentAttributes[x][y] = 0;
        continue;
      }
      if(board._currentAttributes[x][y] === 0){
        board._currentAttributes[x][y] = 1;
        if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()) {
          board._currentAttributes[x][y] = 0;
        }
      }
    }
  }

  var results = [];
  for (var i = 0; i < n; i++) {
    results.push(board._currentAttributes[i]);
  }

  return results;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var numberOfBoards = 0;
  var validBoardsFound = [];
  for(var i = 0; i < n; i++){
    validBoardsFound.push(null);
  }
  var board = new Board({"n":n});
  for(var y = 0; y <= n; y++){
    if ((x === n && validBoardsFound[0] === null) || (isNaN(x) && numberOfBoards > 0)) {
      break;
    }
    for(var x = 0; x <= n; x++){
      if (x === n && validBoardsFound[y]) {
        x = validBoardsFound[y];
      }
      if (x === n && !validBoardsFound[y]) {
        y--;
        x = validBoardsFound[y] - 1;
        continue;
      }

      if(board._currentAttributes[x][y] === 1){
        board._currentAttributes[x][y] = 0;
        validBoardsFound[y] = null;
        continue;
      }
      if(board._currentAttributes[x][y] === 0){
        board._currentAttributes[x][y] = 1;
        if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()) {
          board._currentAttributes[x][y] = 0;
          continue;
        }
        validBoardsFound[y] = x;
        if(validBoardsFound.indexOf(null) === -1){
          ++numberOfBoards;
        }

        break;
      }
    }
  }
return numberOfBoards;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
