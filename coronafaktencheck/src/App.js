import React, { useEffect, useState } from 'react';
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
