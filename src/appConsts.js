import { getWindowSize, getStorgeNumber } from './utils';

export const boardMovementTime = 200;


export const getCellSize = () => getWindowSize().width > 1000 ? 106 : 50;

export const getCreatedAloneCell_Value = () => Math.random() < 0.8 ? 2 : 4;

export const boardHeight = getStorgeNumber('boardHeight', 4);
export const boardWidth = getStorgeNumber('boardWidth', 4);




