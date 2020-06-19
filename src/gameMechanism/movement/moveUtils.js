import { boardHeight, boardWidth } from '../../appConsts';

function getEmptyBoard() {
   const emptyBoard = [];

   for (let i = 0; i < boardHeight; i++) {
      emptyBoard[i] = [];
      for (let j = 0; j < boardWidth; j++)
         emptyBoard[i][j] = null;
   }

   return emptyBoard;
}

export function getInitMoveObj() {
   const movementsAnimation = {};
   const mergingsPositions = [];
   const newBoard = getEmptyBoard();

   const addMovement = (cell, posDestination, isMerging) => {
      const [i, j] = [...posDestination];
      try {
         newBoard[i][j] = cell.value;
      } catch(e) {
         return;
      }

      if (cell.originalPos !== posDestination)
         movementsAnimation[cell.originalPos] = posDestination;
      
      if (isMerging)
         mergingsPositions.push(posDestination);
   }

   return {
      movementsAnimation,
      newBoard,
      mergingsScore: 0,
      mergingsPositions,
      addMovement
   }
}

export function getBoardWithoutSpaces(board, isHorizontal) {
   const result = getEmptyBoard();

   const getNewCell = (i, j) => ({
      value: board[i][j],
      originalPos: '' + i + j
   });


   if (isHorizontal)
      for (let i = 0; i < boardHeight; i++) {
         let amountNotEmpty = 0;
         for (let j = 0; j < boardWidth; j++)
            if (board[i][j]) {
               result[i][amountNotEmpty] = getNewCell(i, j);
               amountNotEmpty++;
            }
      }

   else
      for (let j = 0; j < boardWidth; j++) {
         let amountNotEmpty = 0;
         for (let i = 0; i < boardHeight; i++)
            if (board[i][j]) {
               result[amountNotEmpty][j] = getNewCell(i, j);
               amountNotEmpty++;
            }
      }

   //console.log(result);
   return result;
}

export const handleIfMerging = (board, moveObj, i, j, isHorizontal) => {
   let curCell, nextCell, isMerging;
   try {
      curCell = board[i][j];
      nextCell = isHorizontal ? board[i][j + 1] : board[i+1][j];
      isMerging = nextCell && curCell.value === nextCell.value;
   }
   catch(e) {
      return false;
   }
   
   if (isMerging) {
      const newValue = 2 * curCell.value;
      curCell.value = nextCell.value = newValue;
      moveObj.mergingsScore += newValue;
   }
   return isMerging;
};

/*
export function getBoardWithoutSpaces(board, isHorizontal) {
   const result = [];
   const resultLength = isHorizontal ? boardHeight : boardWidth;
   for (let i = 0; i < resultLength; i++)
      result[i] = [];

   const addCellIfNotEmpty = (i, j) => {
      const newCell = {
         value: board[i][j],
         originalPos: '' + i + j
      }
      if (newCell.value) {
         const resultRow = isHorizontal ? i : j;
         result[resultRow].push(newCell);
      }
   };


   if (isHorizontal)
      for (let i = 0; i < boardHeight; i++)
         for (let j = 0; j < boardWidth; j++)
            addCellIfNotEmpty(i, j);

   else
      for (let j = 0; j < boardWidth; j++)
         for (let i = 0; i < boardHeight; i++)
            addCellIfNotEmpty(i, j);

   return result;
}
*/