import React from 'react';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import colors from '../styles/colors'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    color: colors.darkColor,
    textDecoration: 'none'
  },
  backgroundColor: {
    backgroundColor: 'white'
  }
}));

export const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.backgroundColor} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.linkStyle}>coronafaktencheck.ai</Link>
          </Typography>
          <Link to="/" className={classes.linkStyle}><Button color="inherit">Home</Button></Link>
          <Link to="/tweets" className={classes.linkStyle}><Button color="inherit">Tweets</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}