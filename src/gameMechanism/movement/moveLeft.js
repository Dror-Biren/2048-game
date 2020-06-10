import { boardHeight, boardWidth } from '../../appConsts';

export default (board) => {
   const boardStep1 = [];
   for (let i = 0; i < boardHeight; i++) {
      boardStep1[i] = [];

      for (let j = 0; j < boardWidth; j++)
         if (board[i][j])
            boardStep1[i].push(board[i][j]);
   }

   for (let i = 0; i < boardHeight; i++)
      for (let j = 0; j < boardStep1[i].length - 1; j++)
         if (boardStep1[i][j] === boardStep1[i][j + 1]) {
            boardStep1[i][j] *= 2;
            boardStep1[i][j + 1] = null;
         }

   const finalBoard = [];
   for (let i = 0; i < boardHeight; i++) {
      finalBoard[i] = [];
      for (let j = 0; j < boardStep1[i].length; j++)
         if (boardStep1[i][j])
            finalBoard[i].push(boardStep1[i][j]);
   }

   for (let i = 0; i < boardHeight; i++) 
      for (let j = finalBoard[i].length; j < boardWidth; j++)
         finalBoard[i][j] = null;

   //console.log(finalBoard);
   return finalBoard;
}