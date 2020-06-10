export const getCreatedAloneCell_Value = () => Math.random() < 0.8 ? 2 : 4;

export let boardHeight = 4;
export let boardWidth = 4;

export function setBoardSize() {
   const heightInput = parseInt(prompt("Enter board height: \n(Integer between 3 and 6)"));
   const widthInput = parseInt(prompt("Enter board width: \n(Integer between 3 and 6)"));

   if([3,4,5,6].includes(heightInput))
      boardHeight = heightInput;

   if([3,4,5,6].includes(widthInput))
      boardWidth = widthInput;   
}
