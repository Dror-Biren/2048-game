import { getAppSize } from '../actions/sizes';

export default (state = getSizes(getAppSize()), action) => {
   switch (action.type) {
      case 'RESIZE':
         return getSizes(action.newSize);
      default:
         return state;
   }
};

function getSizes(scale) {

   const px = val => (val * scale) + "px";
   const pxWithMinValue = val => {
      const newSCale = Math.max(scale, 0.7);
      return (val * newSCale) + "px";
   };

   return {
      cell: {
         size: 106 * scale,
         margin: 7 * scale,
         fontSize: 55 * scale
      },

      contentStyle: {
         width: px(500)
      },
      
      headerStyle: {
         paddingLeft: px(15)
      },

      titleStyle: {
         fontSize: px(74),
         lineHeight: px(66)
      },

      scoreStyle: {
         box: {
            padding: `0 ${px(25)}`,
            marginLeft: px(6)
         },

         h3: {
            fontSize: px(25),
            margin: `${px(-5)} 0 ${px(-4)} 0`
         },

         p: {
            fontSize: pxWithMinValue(12),
            margin: `${px(7)} 0 0 0`
         }
      },

      restartButtonStyle: {
         fontSize: pxWithMinValue(16),
         height: px(40),
         lineHeight: px(40),
         padding: `0 ${px(20)}`
      },
      
      subtitleStyle: {
         h3: {
            fontSize: pxWithMinValue(17)     
         },
         p: {
            fontSize: pxWithMinValue(15),
            marginBottom: px(30)
         }
      },

      endOfGameStyle: {
         fontSize: px(30)
      },

      rulesStyle: {
         title: {
            fontSize: pxWithMinValue(18)
         },

         all: {
            margin: `${px(20)} 0`,
            fontSize: pxWithMinValue(15)
         }
      }
   };
}



/*
case 'RESIZE':
         if (action.newSize === 1)
            return defaultSizes;

         const newSizes = {};
         for (let key in state)
            newSizes[key] = defaultSizes[key] * action.newSize;
         return newSizes;
*/




