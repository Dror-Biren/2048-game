import React from 'react';
import { connect } from 'react-redux';

import Score from './Score';

export const HeaderTitle = ({ scores, titleStyle }) => (
   <div className="gameTitle">
      <h1 
         className="gameTitle-text"
         style={titleStyle}>
         2048
      </h1>

      <div className="scores-container">
         <Score
            title="SCORE"
            score={scores.score}
            scoreAddition={scores.scoreAddition}
         />
         <Score
            title="BEST"
            score={scores.bestScore}
            scoreAddition={scores.bestScoreAddition}
         />
      </div>
   </div>
);

const mapStateToProps = (state) => ({
   scores: state.game.scores,
   titleStyle: state.sizes.titleStyle
});

export default connect(mapStateToProps)(HeaderTitle);







