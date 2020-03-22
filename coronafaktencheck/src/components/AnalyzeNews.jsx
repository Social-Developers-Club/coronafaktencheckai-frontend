import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { DetailedMap  } from './detailedMap';
import { PieChart  } from './Chart.jsx';


import { analyzeMenuStyles , StyledButton} from '../styles/analyzeMenuStyle';

import colors from '../styles/colors'

export const AnalyzeNews = (props) => {
  const classes = analyzeMenuStyles();
  console.log(props.location.state);

  const {news, percentage} = props.location.state;
  console.log(news);
  console.log(percentage);

  
  return (
    <div className={classes.wrapper}>
      <div className={classes.containerPieChart}>
        <PieChart percentage={percentage} news={news} style={{width: '200px'}}/>
        <p>{"Diese Nachrichten sind zu "} <b style={{fontSize: '20px'}}>{Math.round(percentage)}</b> {" % Fake News"}</p>
      </div>
      {/* <div className={classes.containerMap}>
        <DetailedMap/>
      </div> */}
    </div>
  )
}
