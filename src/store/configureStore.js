import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from '../reducers/game';
import sizesReducer from '../reducers/sizes';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      game: gameReducer,
      sizes: sizesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
