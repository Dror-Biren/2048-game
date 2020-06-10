import React from 'react';
import { connect } from 'react-redux';

import { startNewGame } from '../actions/game';

export const Header = ({score, startNewGame}) => (
   <div className="header">
      <div className="gameTitle">
         <h1 className="gameTitle-text">
            2048
         </h1>

         <div className="scores-container">
            <div className="score curScore">
               <p>SCORE</p>
               <h3>{score}</h3>
            </div>
            <div className="score bestScore">
               <p>BEST</p>
               <h3>2172</h3>
            </div>
         </div>
      </div>

      <div className="subtitle">
         <div className="subtitle-texts">
            <h3>Play 2048 Game Online</h3>
            <p>Join the numbers and get to the <strong>2048 tile!</strong></p>
         </div>
         <button 
            className="restart-button"
            onClick={startNewGame}>
            New Game
         </button>
      </div>
   </div>
);

const mapStateToProps = (state) => ({
   score: state.game.score
});

const mapDispatchToProps = (dispatch) => ({
   startNewGame: () => dispatch(startNewGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);








