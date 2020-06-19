import React from 'react';
import { connect } from 'react-redux';

const ScoreAddition = ({addition}) => (
   (addition > 0) &&
   <div className="scoreAddition">
      +{addition}
   </div>
);

export const Score = ({ title, score, scoreAddition, style }) => (
   <div className="scoreContainer">
      <div className="score" style={style.box}>
         
         <ScoreAddition addition={scoreAddition} />
         
         <p style={style.p}>
            {title}
         </p>

         <h3 style={style.h3}>
            {score}
         </h3>

      </div>
   </div>
);

const mapStateToProps = (state) => ({
   style: state.sizes.scoreStyle
});

export default connect(mapStateToProps)(Score);
