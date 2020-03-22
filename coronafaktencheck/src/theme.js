import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

// theme options:
// https://material-ui.com/customization/default-theme/#default-theme

export const theme = createMuiTheme({
  palette: {
    primary: blue, // can be switched to normal hex 
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});