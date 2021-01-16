import { createMuiTheme } from '@material-ui/core/styles';
import { styleColor } from './styleThem';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: styleColor.primary,
    },
    secondary: {
      main: styleColor.secondary,
    },
    common: {
      arcBlue: '#0B72B9',
      arcOrange: '#FFBA60',
    },
  },
  typography: {
    tab: {
      fontWeight: 700,
      color: 'white',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h1: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: styleColor.primary,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: styleColor.primary,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: styleColor.primary,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: styleColor.primary,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: styleColor.color.arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
      color: styleColor.color.arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: styleColor.color.arcGrey,
    },
    learnButton: {
      borderColor: styleColor.primary,
      borderWidth: 2,
      textTransform: 'none',
      color: styleColor.primary,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
});

export { theme };
