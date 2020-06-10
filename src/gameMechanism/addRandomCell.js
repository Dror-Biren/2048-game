import { boardHeight, boardWidth, getCreatedAloneCell_Value } from '../appConsts';

export default board => {
   const allEmptyPositions = [];
   for (let i = 0; i < boardHeight; i++)
      for (let j = 0; j < boardWidth; j++)
         if (!board[i][j])
            allEmptyPositions.push({ i, j });

   if (allEmptyPositions.length > 0) {
      const randomEmptyPositionIndex = Math.floor(Math.random() * allEmptyPositions.length);
      const { i, j } = allEmptyPositions[randomEmptyPositionIndex];
      board[i][j] = getCreatedAloneCell_Value();
   }

   return board;
}