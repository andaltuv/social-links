import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { SocialLinksScreen } from '../SocialLinks/SocialLinksScreen';
import ReactGA from 'react-ga';
import { NewsLetterScreen } from '../NewsLetter/NewsLetterScreen';

  export const SocialLinksRoutes = () => {
    useEffect(() => {
      ReactGA.initialize("YOUR GA ID");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return(
        <>

            <Router basename="/links" >
                <Switch>
                    <Route exact path="/" component = { SocialLinksScreen } />
                    <Route exact path="/boletin" component = { NewsLetterScreen } />
                </Switch>
            </Router>

        </>
    )

  }
