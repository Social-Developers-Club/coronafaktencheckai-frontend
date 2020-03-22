import React, { Fragment, useEffect, useState } from 'react';

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
  const {news} = props.location.state;

  // const newsCheck = news.toLowerCase().split(" ").join("");

  const formatPercentage = ((num)=> (num * 100).toFixed(2));

  const twitterlink = "https://twitter.com/linuscodes/status/1241804756147986432"
  const twitterId = twitterlink.slice(-19)
  console.log(twitterId);

  const [newsData, setNewsData] = useState([]);

  useEffect(()=> {
      // Fetching data 
      fetch(twitterId)
        .then(response => response.json())
        .then(data =>
          setNewsData({data})
        )
        // Catch any errors we hit and update the app
        .catch(error => console.log(error));
  })

  return (
    <div className={classes.wrapper}>
      <div className={classes.containerPieChart}>
      <img className={classesImage.logoStyle} src={Logo} alt="coronafaktenchecker"/>
      {fakeNewsData.map((news => {
        {/* const compareNewsCheck = news.text.toLowerCase().split(" ").join(""); */}
        const newsId = news.id
        if(twitterId === newsId){

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
