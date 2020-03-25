import React, { Fragment, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
// import { DetailedMap  } from './detailedMap';
import { PieChart  } from './Chart.jsx';


import { analyzeMenuStyles } from '../styles/analyzeMenuStyle';
// import { fakeNewsData } from '../data/fake-news-mock-data' 
import Logo from '../images/Logo_Hackathon.png';

const useStyles = makeStyles(theme => ({
  logoStyle: {
    width: '150px',
    margin: '20px',
    position: 'relative',
    display: 'inline-block',
    transform: 'translateY(174%)',
    zIndex: '-1'
  }
}));

export const AnalyzeNews = (props) => {
  const classesImage = useStyles();

  const classes = analyzeMenuStyles();
  const {news} = props.location.state;

  // const newsCheck = news.toLowerCase().split(" ").join("");

  const formatPercentage = ((num)=> (num * 100).toFixed(2));

  const twitterlink = news;
  const twitterId = twitterlink.slice(-19);

  const [newsData, setNewsData] = useState({
    data: [],
    real: Number,
    fake: Number,
    unknown: Number,
  });
 

  useEffect(()=> {
      // Fetching data 
      fetch(`http://127.0.0.1:8000/twitter_post/${twitterId}`)
        .then(response => response.json())
        .then(data =>
          setNewsData({
            data,
            real: formatPercentage(data.classification.real),
            fake: formatPercentage(data.classification.fake),
            unknown: formatPercentage(data.classification.unknown),
          })
        )
        // Catch any errors we hit and update the app
        .catch(error => console.log(error));
  }, [twitterId])

  return (
    <div className={classes.wrapper}>
      <div className={classes.containerPieChart}>
      <img className={classesImage.logoStyle} src={Logo} alt="coronafaktenchecker"/>
      {/* {fakeNewsData.map((news => { */}
        {/* const compareNewsCheck = news.text.toLowerCase().split(" ").join(""); */}
        {/* const newsId = news.id */}
        {/* if(twitterId === newsId){ */}
          {/* return( */}
            <Fragment>
              <PieChart real={newsData.real} fake={newsData.fake} unknown={newsData.unknown} style={{width: '800px'}}/>
              {(Math.round(newsData.fake) > 0 && 
                <p>{"Diese Nachrichten sind zu "} <b style={{fontSize: '20px'}}>{Math.round(newsData.fake)}</b> {" % Fake News " } <br/> </p>
              )}
              {(Math.round(newsData.real) > 0 &&
                <p>{"...und zu "} <b style={{fontSize: '20px'}}>{Math.round(newsData.real)}</b> {" % wahr."}</p>
              )}
              {(Math.round(newsData.unknown) > 0 &&
                <p>{"Diese Nachrichten sind zu "} <b style={{fontSize: '20px'}}>{Math.round(newsData.unknown)}</b> {" % nicht zuordbar."}</p>
              )}
            </Fragment>
          {/* );
        }
      }))
      } */}
      </div>
      {/* <div className={classes.containerMap}>
        <DetailedMap/>
      </div> */}
    </div>
  )
}
