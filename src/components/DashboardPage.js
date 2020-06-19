import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Board from './Board';
import Rules from './Rules';

import HandleArrowKeysClick from '../gameMechanism/HandleArrowKeysClick';
import { updateAppSizes } from '../actions/sizes';

const DashboardPage = ({isGameOver, updateAppSizes, contentStyle}) => {
      window.onresize = updateAppSizes;
      
      return (
         <div 
            className="pageContent"
            style={contentStyle}>
            <Header />
            <Board />
            <Rules />
            {
               !isGameOver &&
               <HandleArrowKeysClick />
            }
         </div>
      );
   
};

const mapStateToProps = (state) => ({
   isGameOver: state.game.isGameOver,
   contentStyle: state.sizes.contentStyle
});

const mapDispatchToProps = (dispatch) => ({
   updateAppSizes: () => dispatch(updateAppSizes())
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
