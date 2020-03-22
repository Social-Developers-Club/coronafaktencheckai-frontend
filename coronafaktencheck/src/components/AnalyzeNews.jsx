import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { DetailedMap  } from './detailedMap';
import { PieChart  } from './Chart.jsx';


import { analyzeMenuStyles } from '../styles/analyzeMenuStyle';
import { fakeNewsData } from '../data/fake-news-mock-data' 
import Logo from '../images/Logo_Hackathon.png';

const useStyles = makeStyles(theme => ({
  logoStyle: {
    width: '150px',
    margin: '20px',
    position: 'relative',
    display: 'inline-block',
    transform: 'translateY(174%)'
  }
}));

export const AnalyzeNews = (props) => {
  const classesImage = useStyles();
console.log(fakeNewsData);

  const classes = analyzeMenuStyles();
  console.log(props.location.state);

  const {news} = props.location.state;
  console.log(news);
  const newsCheck = news.toLowerCase().split(" ").join("");
  console.log(newsCheck);

  const formatPercentage = ((num)=> (num * 100).toFixed(2));

  

  return (
    <div className={classes.wrapper}>
      <div className={classes.containerPieChart}>
      <img className={classesImage.logoStyle} src={Logo} alt="coronafaktenchecker"/>
      {fakeNewsData.map((news => {
        const compareNewsCheck = news.text.toLowerCase().split(" ").join("");
        if(newsCheck === compareNewsCheck){

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
        }
      }))
      }
      </div>
      {/* <div className={classes.containerMap}>
        <DetailedMap/>
      </div> */}
    </div>
  )
}
