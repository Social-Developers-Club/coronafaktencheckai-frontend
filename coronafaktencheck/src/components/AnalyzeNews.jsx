import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { DetailedMap  } from './detailedMap';
import { PieChart  } from './Chart.jsx';


import { homeSearchInputStyles , StyledButton} from '../styles/homeSearchInputStyles';

import colors from '../styles/colors'

export const AnalyzeNews = (props) => {
  const classes = homeSearchInputStyles();
  console.log(props.location.state);

  const {news, percentage} = props.location.state;
  console.log(news);
  console.log(percentage);

  
  return (
    <div className={classes.wrapper}>
      <div className={classes.containerInput}>
     <PieChart percentage={percentage} news={news} style={{
					width: '200px',
				}}/>
    </div>
      {/* <div className={classes.containerMap}>
        <DetailedMap/>
      </div> */}
    </div>
  )
}
