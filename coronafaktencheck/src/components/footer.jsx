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
  footer_text: {
    fontSize: '1em',
    color: colors.darkColor,
    backgroundColor: 'white',
    padding: '10px',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  footer_link: {
    color: colors.darkColor,
    textDecoration: 'none',
    marginLeft: '30px'
  },
  footer_imageSize: {
    width: '40px',
    height: 'auto',
    margin: '10px'
  }
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <img className={classes.footer_imageSize} src={Logo} alt="coronafaktenchecker" position="static" />
        <Typography variant="h1" className={classes.footer_text}>
          CoronaFaktenCheck 2020. 
          <a className={classes.footer_link} href="./impressum.html">Impressum</a>
          <a className={classes.footer_link} href="./datenschutz.html">Datenschutzerklärung</a>
          <a className={classes.footer_link} href="mailto:coronafaktencheck.de">Kontakt</a>
        </Typography>
    </footer>
  );
}