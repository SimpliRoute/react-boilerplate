import { blue, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = blue;

export default createMuiTheme({
    palette: {
        primary: {
            dark: primaryColor[600],
            light: red.A200,
            main: primaryColor[700]
        },
        secondary: {
            dark: red.A700,
            light: '#ffffff',
            main: '#ffffff'
        }
    },
    typography: {
        fontFamily: 'Lato, sans-serif'
    }
});
