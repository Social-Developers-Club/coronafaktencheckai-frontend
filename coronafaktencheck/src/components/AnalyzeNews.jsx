import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

import { DetailedMap  } from './detailedMap';
import { PieChart  } from './Chart.jsx';


import { analyzeMenuStyles , StyledButton} from '../styles/analyzeMenuStyle';
import { fakeNewsData } from '../data/fake-news-mock-data' 
import colors from '../styles/colors'

export const AnalyzeNews = (props) => {
console.log(fakeNewsData);

  const classes = analyzeMenuStyles();
  console.log(props.location.state);

  const {news, percentage} = props.location.state;
  console.log(news);
  console.log(percentage);

  const formatPercentage = ((num)=> (num * 100).toFixed(2));

  return (
    <div className={classes.wrapper}>
      <div className={classes.containerPieChart}>
      {fakeNewsData.map((news => {
        let {fake, unknown, real} = news.classification;
        fake = formatPercentage(fake);
        unknown = formatPercentage(unknown);
        real = formatPercentage(real);

        return(
          <Fragment>
            <PieChart real={real} fake={fake} unknown={unknown} style={{width: '200px'}}/>
            {(Math.round(fake) > 0 && 
              <p>{"Diese Nachrichten sind zu "} <b style={{fontSize: '20px'}}>{Math.round(fake)}</b> {" % Fake News " } <br/> </p>
            )}
            {(Math.round(real) > 0 &&
              <p>{"...und zu "} <b style={{fontSize: '20px'}}>{Math.round(real)}</b> {" % wahr."}</p>
            )}
            {(Math.round(unknown) > 0 &&
              <p>{"Diese Nachrichten sind zu "} <b style={{fontSize: '20px'}}>{Math.round(unknown)}</b> {" % nicht zuordbar."}</p>
            )}
          </Fragment>
        );
        }))
      }
      </div>
      {/* <div className={classes.containerMap}>
        <DetailedMap/>
      </div> */}
    </div>
  )
}
