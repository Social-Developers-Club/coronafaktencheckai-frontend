import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import colors from '../styles/colors'
import Logo from '../images/Logo_Hackathon.png';


const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: "calc(100vh - 80px)",
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  footerText: {
    fontSize: '1em',
    color: colors.darkColor,
    backgroundColor: 'white',
    padding: '10px',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  footerLink: {
    color: colors.darkColor,
    textDecoration: 'none',
    marginLeft: '30px'
  },
  footerImageSize: {
    width: '40px',
    height: 'auto',
    margin: '10px'
  }
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <img className={classes.footerImageSize} src={Logo} alt="coronafaktenchecker" position="static" />
        <Typography variant="h1" className={classes.footerText}>
          CoronaFaktenCheck 2020. 
          <a className={classes.footerLink} href="./impressum.html">Impressum</a>
          <a className={classes.footerLink} href="./datenschutz.html">Datenschutzerklärung</a>
          <a className={classes.footerLink} href="mailto:coronafaktencheck.de">Kontakt</a>
        </Typography>
    </footer>
  );
}