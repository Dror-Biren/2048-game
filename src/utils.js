import { boardHeight, boardWidth } from './appConsts';

export const refreshePage = () => window.location.reload(false);

export function getStorgeNumber(key, deafultValue) {
   const value = localStorage.getItem(key);
   return value ? parseInt(value) : deafultValue;
}

export function setBoardSize() {
   const heightInput = prompt("Enter board height: \n(Integer between 2 and 6)");
   const widthInput = prompt("Enter board width: \n(Integer between 2 and 6)");

   const isInRange = input => [...'23456'].includes(input);

   if (isInRange(heightInput))
      localStorage.setItem('boardHeight', heightInput);

   if (isInRange(widthInput))
      localStorage.setItem('boardWidth', widthInput);

   refreshePage();
}

export function getBoardPosMap(posChanges = {}) {
   const allPositions = [];
   for (let i = 0; i < boardHeight; i++) {
      allPositions[i] = [];
      for (let j = 0; j < boardWidth; j++) {
         const pos = '' + i + j
         allPositions[i][j] = posChanges[pos] || pos;
      }
   }
   return allPositions;
}

export function updateScores(prvScores, scoreAddition) {
   const score = prvScores.score + scoreAddition;
   const bestScore = Math.max(prvScores.bestScore, score);
   const bestScoreAddition = bestScore - prvScores.bestScore;

   localStorage.setItem('bestScore', bestScore);
   return {
      score,
      scoreAddition,
      bestScore,
      bestScoreAddition,
   };
}
