import { boardHeight, boardWidth, getCreatedAloneCell_Value } from '../appConsts';

export function getNewGame_Board() {
   const initalNumbersPositions = getInitalNumbersPositions();
   
   const board = [];
   for (let i = 0; i < boardHeight; i++) {
      board[i] = [];
      for (let j = 0; j < boardWidth; j++) {
         const cellPosition = '' + i + j;
         const isCellNotEmpty = initalNumbersPositions.includes(cellPosition);
         const cellContent = isCellNotEmpty ? getCreatedAloneCell_Value() : null;
         board[i][j] = cellContent;
      }
   }

   return board;
}

function getInitalNumbersPositions() {
   const allPositions = [];
   for (let i = 0; i < boardHeight; i++)
      for (let j = 0; j < boardWidth; j++)
         allPositions.push('' + i + j);
   const getRandomPositionIndex = () => Math.floor(Math.random() * allPositions.length);

   const i1 = getRandomPositionIndex();
   let i2;
   do {
      i2 = getRandomPositionIndex();
   } while (i1 === i2);

   return [allPositions[i1], allPositions[i2]];
}