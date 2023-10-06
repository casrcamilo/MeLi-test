import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff159',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#ebebeb',
    },
    text: {
      primary: '#333'
    }
  },
  typography: {
    fontFamily: 'Metropolis,-apple-system,Helvetica Neue,helvetica,roboto,arial,sans-serif',
  },
});

export type CustomTheme = typeof theme;

export default theme;