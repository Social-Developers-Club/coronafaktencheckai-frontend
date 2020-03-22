import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import { mockData } from '../data/mockData';
import { Typography } from '@material-ui/core';
import Moment from 'react-moment';
import { Tweet } from './tweet';

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
  },
  wrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 100%",
    flexWrap: "wrap",
  },
}));

export const RealTimeTweets = () => {
  const classes = useStyles();
  
  const [state, setState] = useState({
    response: mockData,
    endpoint: "http://localhost:4001",
    count: [1, 2, 3, 4, 5]
  })  
  
  const { created_at, text, user: { name, profile_image_url_https }, extended_tweet: { full_text }} = state.response;

  return (
    <div className={classes.wrapper}>
        {state.count.map(e => (
          <Tweet createdAt={created_at} name={name} profileImage={profile_image_url_https} text={full_text} />
        ))}
    </div>
  )
}