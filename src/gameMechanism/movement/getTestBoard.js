const n = null;
export default () => {
   switch (prompt("enter board index")) {
      case '1':
         return [
            [n, 64, n, n],
            [8, n, n, 2],
            [n, n, 2, 16],
            [4, n, n, 16],
         ];

      case '2':
         return [
            [n, 2, n, 2],
            [n, n, 4, n],
            [n, n, n, n],
            [n, n, n, n],
         ];

      case '3':
         return [
            [2, 2, 2, 2],
            [n, n, n, n],
            [n, 2, 2, 4],
            [n, 4, 2, 2],
         ];

      default:
         return [
            [2, 32, 512, 8192],
            [4, 64, 1024, 16384],
            [8, 128, 2048, n],
            [16, 256, 4096, n],
         ];
   }
};