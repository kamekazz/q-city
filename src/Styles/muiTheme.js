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
  },
});

export { theme };
