
import { getNewGameState } from '../gameMechanism/startNewGame';

export default (state = getNewGameState(), action) => {
   switch (action.type) {
      case 'NEW_GAME':
         return getNewGameState();
      case 'SET_BOARD':
         //console.log('---',action.board);
         return {
            ...state,
            board: action.board
         };
      default:
         return state;
   }
};



