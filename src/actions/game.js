

export const endGame = () => ({
   type:'GAME_OVER'
 });

export const setBoard = (board, scoreAddition, newCellsPos) => ({
   type: 'SET_BOARD',
   board,
   newCellsPos,
   scoreAddition
 });

 export const animateMovement = (posChanges) => ({
   type: 'ANIMATE_MOVEMENT',
   posChanges
 });


 /*
 export const startNewGame = () => ({
  type:'NEW_GAME'
});
 */