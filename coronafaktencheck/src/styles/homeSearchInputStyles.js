import { makeStyles , withStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import colors from '../styles/colors'

export const homeSearchInputStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    display: "flex",
    height: "40%",
    width: "100%",
    color: colors.bright,
    justifyContent: "center",
    alignItems: "center",
  },
  containerMap: {
    display: "flex",
    height: "60%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  focused: {
    color: colors.darkColor,
  },
  fullWidth: {
    width: '20%',
  },
  linkStyleInput: {
    color: colors.bright,
    textDecoration: 'none'
  },
});

export const StyledButton = withStyles({
  root: {
  marginLeft: "15px",
  backgroundColor: colors.darkColor,
},
})(Button);
