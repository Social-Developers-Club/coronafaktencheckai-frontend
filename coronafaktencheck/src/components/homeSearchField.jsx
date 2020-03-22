import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Input } from '@material-ui/core';
import { homeSearchInputStyles , StyledButton} from '../styles/homeSearchInputStyles';
import { DetailedMap  } from './detailedMap';
import { fakeNewsData } from '../data/fake-news-mock-data' 


import colors from '../styles/colors'

export const HomeSearchField = () => {
  const classes = homeSearchInputStyles();

  const [input, setInput] = useState({
    search: ''
  });

  const handleChange = (e) => {
    setInput({ [e.target.name]: e.target.value })
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.containerInput}>
        <Input className={classes.focused , classes.fullWidth} onChange={handleChange} name="search" placeholder="Get your news checked" value={input.search} />
        <Link 
        to={{
          pathname: "/analyze",
          state: {
            //   news: input.search,
            news: "Atem anhalten als Selbsttest #covid19",
            percentage: '88.472'
            }
        }} 
        className={classes.linkStyleInput}
        >
          <StyledButton variant="contained" className={classes.submitButton} type="search" color="primary" size="small">
        Check
          </StyledButton>
        </Link>
      </div>
      <div className={classes.containerMap}>
        <DetailedMap/>
      </div>
    </div>
  )
}
