import { createTheme } from '@material-ui/core/styles';
import colorPalette from './colorPalette'

const theme = createTheme({
  palette: {
    primary: {
      light: colorPalette.primary,
      main: colorPalette.primary,
      dark: colorPalette.primary,
      contrastText: '#fff',
    },
    secondary: {
      light: colorPalette.secondary,
      main: colorPalette.secondary,
      dark: colorPalette.secondary,
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 425,
      lg: 768,
      xl: 1024,
    },
  },
  typography: {
    htmlFontSize: 10,
    button: {
      textTransform: "none"
    },
    MuiTypography: {
      root: {
        fontSize: '1rem',
      }
    },
    fontFamily: [
      '"Hannari"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  props: {
    MuiCheckbox: {
      color: "primary"
    },
    MuiRadio: {
      color: "primary"
    },
    MuiSwitch: {
      color: "primary"
    },
    MuiTextField: {
      variant: "outlined"
    }
  },
});
export default theme;