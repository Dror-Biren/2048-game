import { boardMovementTime } from '../../appConsts';

export const getCellStyle = ({ 
      value, 
      position, 
      transitionProperty, 
      size, 
      margin, 
      fontSize
   }) => {
   const [top, left] = getDistances(position, size, margin);
   const cellSize = size + "px";

   return {
      top,
      left,
      width: cellSize,
      height: cellSize,
      lineHeight: cellSize,

      transitionProperty,
      transitionDuration: `${boardMovementTime}ms`,

      background: backgroundColor(value),
      color: textColor(value),
      fontSize: fontSizeByNumLength(value, fontSize),
      
   }
};

function getDistances(position, cellSize, margin) {
   const positionIndexToDistance = index => {
      const positionDistance = index * (cellSize + 2 * margin);
      return margin + positionDistance + 'px';
   };

   return [...position].map(positionIndexToDistance);
}

function fontSizeByNumLength(num, fontSize) {
   num = '' + Math.max(num, 10);
   return (fontSize * 2 / num.length) + 'px';
}



function backgroundColor(value) {
   switch (value) {
      case 2: return "#eee4da";
      case 4: return "#ede0c8";
      case 8: return "#f2b179";
      case 16: return "#f59563";
      case 32: return "#f67c5f";
      case 64: return "#f65e3b";
      case 128: return "#edcf72";
      case 256: return "#edcc61";
      case 512: return "#edcc61";
      case 1024: return "#edcc61";
      case 2048: return "#edcc61";
      case 4096: return "#edcc61";
      default: return "rgba(0,0,0,0)";
   }
}

function textColor(value) {
   if ([2, 4].includes(value))
      return "#776e65";

   //if ([8, 16, 32, 64, 128, 256].includes(value))
   return "#f9f6f2";

}



