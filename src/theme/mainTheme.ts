import { createTheme } from '@mui/material';

const athenaFontUrl = `${process.env.PUBLIC_URL}/assets/fonts/athena.ttf`
const lightmanFontUrl = `${process.env.PUBLIC_URL}/assets/fonts/lightman.ttf`
const noNameFontUrl = `${process.env.PUBLIC_URL}/assets/fonts/noName.ttf`

/**
 * Thresholds:
 * 
 *   0% - 
 * 
 * @param isInBack 
 * @returns 
 */
// const generateRotateCss = (isInBack = false) => {
//   let css = ''
//   for(let i = 0; i < 100; i++) {
    
//     css += `
//       @keyframes rotateClockwiseAt${i} {
        
//       }
//     `
//   }
//   return css
// }

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#FFC600'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'sans-serif',
      color: 'white'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        .bgImage {
          width: 100vw;
          filter: blur(3px);
          WebkitFilter: blur(3px);
          position: absolute;
          zIndex: -1;
        }

        .flexRow {
          display: flex;
          flex-direction: row;
        }

        .flexCol {
          display: flex;
          flex-direction: column;
        }

        @font-face {
          font-family: 'Athena';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Athena'), local('Athena-light'), url(${athenaFontUrl}) format('truetype');
        }
        
        @font-face {
          font-family: 'Lightman';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Lightman'), local('Lightman-light'), url(${lightmanFontUrl}) format('truetype');
        }

        @font-face {
          font-family: 'NoName';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('NoName'), local('NoName-light'), url(${noNameFontUrl}) format('truetype');
        }

        @keyframes flickerName {
          0% {
            opacity: 1;
          }
          1% {
            opacity: 0.5;
          }
          1.5% {
            opacity: 0.85;
          }
          2% {
            opacity: 1;
          }
          2.2% {
            opacity: 0.5;
          }
          2.6% {
            opacity: 1;
          }
          2.9% {
            opacity: 0.4;
          }
          3.4% {
            opacity: 1;
          }
          59% {
            opacity: 1;
          }
          60% {
            opacity: 0.5;
          }
          60.5% {
            opacity: 1;
          }
          61% {
            opacity: 0.2;
          }
          62% {
            opacity: 1;
          }
        }

        @keyframes flickerNameLow {
          0% {
            opacity: 1;
          }
          1% {
            opacity: 0.5;
          }
          1.5% {
            opacity: 0.85;
          }
          2% {
            opacity: 1;
          }
          2.2% {
            opacity: 0.5;
          }
          2.6% {
            opacity: 1;
          }
          2.9% {
            opacity: 0.4;
          }
          3.4% {
            opacity: 1;
          }
          59% {
            opacity: 1;
          }
          60% {
            opacity: 0.5;
          }
          60.5% {
            opacity: 1;
          }
          61% {
            opacity: 0.2;
          }
          62% {
            opacity: 0.25;
          }
        }

        @keyframes rotateClockwise {
          0% {
            transform: translate(0px, 0px) scale(1);
            z-index: 7;
            filter: drop-shadow(0 0 10px black);
            animation-timing-function: ease-out;
          }
          10% {
            animation-timing-function: ease-out;
            filter: drop-shadow(0 0 10px black);
            z-index: 6;
          }
          20% {
            transform: translate(-580px, -20px) scale(0.98);
            z-index: 5;
            filter: blur(.5px) drop-shadow(0 0 10px black);
            animation-timing-function: ease-out;
          }
          25% {
            transform: translate(-600px, -32px) scale(0.95);
            filter: brightness(0.90) blur(1px) drop-shadow(0 0 10px black);
            animation-timing-function: ease-in;
            z-index: 4;
          }
          30% {
            transform: translate(-580px, -44px) scale(0.92);
            filter: brightness(0.80) blur(1.5px) drop-shadow(0 0 10px black);
            animation-timing-function: ease-in;
            z-index: 3;
          }
          40% {
            animation-timing-function: ease-in;
            filter: brightness(0.80) blur(2px) drop-shadow(0 0 10px black);
            z-index: 2;
          }
          50% {
            transform: translate(0px, -64px) scale(0.90);
            animation-timing-function: ease-out;
            filter: brightness(0.80)blur(3px) drop-shadow(0 0 10px black);
            z-index: 1;
          }
          60% {
            animation-timing-function: ease-out;
            filter: brightness(0.80)blur(2px) drop-shadow(0 0 10px black);
            z-index: 2;
          }
          70% {
            transform: translate(580px, -44px) scale(0.92);
            animation-timing-function: ease-out;
            filter: brightness(0.9) blur(1px) drop-shadow(0 0 10px black);
            z-index: 3;
          }
          75% {
            transform: translate(600px, -32px) scale(0.95);
            filter: brightness(1) blur(.5px) drop-shadow(0 0 10px black);
            animation-timing-function: ease-in;
            z-index: 4;
          }
          80% {
            transform: translate(580px, -20px) scale(0.98);
            animation-timing-function: ease-in;
            filter: drop-shadow(0 0 10px black);
            z-index: 5;
          }
          90% {
            z-index: 6;
            filter: drop-shadow(0 0 10px black);
            animation-timing-function: ease-in;
          }
          100% {
            transform: translate(0px, 0px) scale(1);
            filter: drop-shadow(0 0 10px black);
            animation-timing-function: ease-out;
            z-index: 7;
          }
        }
      `
    }
  }
})
