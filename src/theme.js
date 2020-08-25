import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Custom theme for app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#008bde',
        },
        secondary: {
            main: '#ffdd3e',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;