const widthBreakPoint = 580;

const getWindowSize = () => ({
   width: window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
   height: window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
})

export function getAppSize() {
   const { width } = getWindowSize();
   //console.log(width);
   return Math.min(1, width / widthBreakPoint);
}


export const updateAppSizes = () => ({
   type: 'RESIZE',
   newSize: getAppSize()
 });


