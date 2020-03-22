import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: "20px"
  },
  typoStyle: {
    margin: "5px 0 10px 0"
  }
}));

export const Tweet = (props) => {
  const classes = useStyles();
  
  return (
          <div style={{ display: 'flex', width: '70%', margin: "20px 0" }}>
            <Avatar className={classes.large} sizes="200px" src={props.profileImage} />
            <div>
              <Typography varian="h6">{props.name}</Typography>
              <Typography variant="body2" className={classes.typoStyle}>{props.text}</Typography>
              <Moment style={{fontSize: "14px", color: '#888' }} format="DD.MM.YYYY">{props.createdAt}</Moment>
            </div>
          </div>
  )
}