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
      debugger;
      //if x is 1 make 0 -> continue to next x
      if(board._currentAttributes[x][y] === 1){
        board._currentAttributes[x][y] = 0;
        continue;
      }
      if(board._currentAttributes[x][y] === 0){
        board._currentAttributes[x][y] = 1;
        if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()) {
          board._currentAttributes[x][y] = 0;
        }
        //board._currentAttributes[x][y]
      }
      //if x === 0 make 1
      //check horz && vert for 1
        //if good leave -> continue to next y
        //if bad x = 0 got to next x
        //if x > boardSize{ x = 0   y--}
      //endcase y === n && x === n
 //     board._currentAttributes.push([]);
    }
  }

  return board;


//  var solution = undefined; //fixme

//  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
