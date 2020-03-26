import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Input } from '@material-ui/core';
import { homeSearchInputStyles , StyledButton} from '../styles/homeSearchInputStyles';
import { DetailedMap  } from './detailedMap';

import clsx from 'clsx'

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
        <p className={classes.disclaimer}>
          Bei dieser Website handelt es sich um unseren ersten Prototypen aus dem <b className={classes.disclaimerHighlight}>#WirVsVirus Hackathon</b>. 
          Für die Korrektheit der Klassifizierung übernehmen wir keine Verantwortung. 
          Wir arbeiten derzeit weiterhin fleißig an der Weiterentwicklung.
          {' '}
          <br/>
          <b className={classes.disclaimerHighlight}>STAY TUNED!</b>
        </p>

      <div className={classes.containerInput}>
        <Input className={clsx(classes.focused, classes.fullWidth)} onChange={handleChange} name="search" placeholder="Bitte Link zu einem Tweet hier einfügen" value={input.search} />
        <Link 
        to={{
          pathname: "/analyze",
          state: {
              news: input.search,
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
