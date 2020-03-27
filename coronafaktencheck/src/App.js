import React, { useEffect, useState } from 'react';
import CookieBanner from 'react-cookie-banner';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { theme } from './theme';

import { ThemeProvider } from '@material-ui/core/styles';
import { HomeSearchField } from './components/homeSearchField.jsx';
import {AnalyzeNews } from './components/AnalyzeNews.jsx';
import { ErrorPage  } from './components/errorPage.jsx';
import { ButtonAppBar } from './components/buttonAppBar.jsx';
import { Footer } from './components/footer.jsx'
import { RealTimeTweets } from './components/realTimeTweets.jsx';

function App() {

  return (
      <ThemeProvider theme={theme}>
          <div>
            <CookieBanner
              message={<div>Diese Webseite verwendet Cookies, um das Nutzerverhalten zu analysieren
              und unsere Dienste zu verbessern. Falls sie damit nicht einverstanden sind, können sie 
              auf der Seite unserer <a href='datenschutz.html'>Datenschutzerklärung</a> widersprechen.</div>}
              onAccept={() => {
                var _paq = window._paq || [];
                _paq.push(['rememberConsentGiven'])
              }}
              styles={{
                message:{
                  display: 'inline-block',
                  maxWidth: '800px',
                  lineHeight: '20px'
                }
              }}
              buttonMessage="Einverstanden"
              cookie="user-has-accepted-cookies" />
          </div>
          <Router>
            <ButtonAppBar />
            <Route path="/" exact component={HomeSearchField} />
            <Route path="/analyze" exact component={AnalyzeNews} />
            {// <Route component={ErrorPage} />
            }
          </Router>
          <Footer />
      </ThemeProvider>
  );
}

export default App;
