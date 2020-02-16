import { deepPurple, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = deepPurple;

export default createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            dark: primaryColor[300],
            light: red.A200,
            main: primaryColor[400],
        },
        secondary: {
            dark: red.A700,
            light: '#ffffff',
            main: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
    },
});
