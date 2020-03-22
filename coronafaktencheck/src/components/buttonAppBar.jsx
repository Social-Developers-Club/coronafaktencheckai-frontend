import React from 'react';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import colors from '../styles/colors'
import Logo from '../images/Logo_Hackathon.png';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: '2em'
  },
  linkStyle: {
    color: colors.darkColor,
    textDecoration: 'none'
  },
  backgroundColor: {
    backgroundColor: 'white'
  },
  imageSize: {
    width: '60px',
    margin: '20px'
  }
}));

export const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.backgroundColor} position="static">
        <Toolbar>
          <img className={classes.imageSize} src={Logo} alt="coronafaktenchecker"/>
          <Typography variant="h1" className={classes.title}>
            <Link to="/" className={classes.linkStyle}>coronafaktencheck</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}