export const getCellStyle = value => ({
   background: backgroundColor(value),
   color: textColor(value)
});

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
      case 512: return "#FFFEC9";
      case 1024: return "#FFFEC9";
      case 2048: return "#FFFEC9";
      case 4096: return "#FFFEC9";
      default: return "rgba(238,228,218,.35)";
   }
}

function textColor(value) {
   if ([2,4].includes(value))
      return "#776e65";

   if ([8,16,32,64,128,256].includes(value))
      return "#f9f6f2";
}

/*
export const cellColor = value => {
   const colors = {
      2: "#eee4da",
      4: "#ede0c8",
      8: "#f2b179",
      16: "#f59563",
      32: "#f67c5f",
      64: "#f65e3b",
      128: "#edcf72",
      256: "#edcc61",
      512: "#FFFEC9",
      1024: "#FFFEC9",
      2048: "#FFFEC9",
      4096: "#FFFEC9"
   };

   const textColors = {
      2: "#776e65",
      8: "#f9f6f2",
   }

   if (colors[value])
      return colors[value];
   return "rgba(238,228,218,.35)";
}
*/


