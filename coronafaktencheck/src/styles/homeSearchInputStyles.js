import { makeStyles , withStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import colors from '../styles/colors'

export const homeSearchInputStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  containerInput: {
    display: "flex",
    height: "30%",
    padding: '5%',
    color: colors.bright,
    justifyContent: "center",
  },
  containerMap: {
    display: "flex",
    height: "40%",
    width: "100%",
  },
  focused: {
    color: colors.darkColor,
  },
  fullWidth: {
    width: '30%',
  },
  linkStyleInput: {
    color: colors.bright,
    textDecoration: 'none'
  },
  disclaimer: {
    width: '30%',
    height: '30%',
    fontSize: '1.2rem',
    justifyContent: "center",
    alignItems: "center",
    margin: '2% auto',
    paddingTop: '25px',
    lineHeight: '1.5rem'
  },
  disclaimerHighlight: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

export const StyledButton = withStyles({
  root: {
  marginLeft: "15px",
  backgroundColor: colors.darkColor,
},
})(Button);
