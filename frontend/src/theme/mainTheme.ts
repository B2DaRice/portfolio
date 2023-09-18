import { createTheme } from '@mui/material';

const athenaFontUrl = `${process.env.PUBLIC_URL}/assets/fonts/athena.ttf`
const lightmanFontUrl = `${process.env.PUBLIC_URL}/assets/fonts/lightman.ttf`

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#FFC600'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'Athena',
      color: '#FFC600'
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
          },
          61% {
            opacity: 0.2;
          },
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
          },
          61% {
            opacity: 0.2;
          },
          62% {
            opacity: 0.25;
          }
        }
      `
    }
  }
})
