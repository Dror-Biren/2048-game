
import { getNewGame_Board } from '../gameMechanism/newGame_board';
import { getBoardPosMap, getStorgeNumber, updateScores } from '../utils';

const getNewGameState = () => ({
   board: getNewGame_Board(), // [[Integer]],
   boardPositionsMap: getBoardPosMap(), // [[String]]
   animateChanges: false,
   newCellsPos: [], // [String]
   scores: {
      score: 0,
      scoreAddition: 0,
      bestScore: getStorgeNumber('bestScore', 0),
      bestScoreAddition: 0,
   },
   isGameOver: false,
   isNewGame: true
});



export default (state = getNewGameState(), action) => {
   switch (action.type) {
      case 'SET_BOARD':
         //console.log('---',action.board);

         return {
            ...state,
            animateChanges: false,
            board: [...action.board],
            scores: updateScores(state.scores, action.scoreAddition),
            newCellsPos: action.newCellsPos,
            boardPositionsMap: getBoardPosMap()
         };
      case 'ANIMATE_MOVEMENT':
         return {
            ...state,
            isNewGame: false,
            animateChanges: true,
            scores: updateScores(state.scores, 0),
            newCellsPos: [],
            boardPositionsMap: getBoardPosMap(action.posChanges)
         }
      case 'GAME_OVER':
         return {
            ...state,
            isGameOver: true
         }
      default:
         return state;
   }
};

/*
case 'NEW_GAME':
         return getNewGameState();
*/




