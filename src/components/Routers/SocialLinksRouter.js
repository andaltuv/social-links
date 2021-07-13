import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { SocialLinksScreen } from '../SocialLinks/SocialLinksScreen';
import ReactGA from 'react-ga';

  export const SocialLinksRoutes = () => {
    useEffect(() => {
      ReactGA.initialize("UA-55225481-1");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return(
        <>

            <Router>
                <Switch>
                    <Route path ="/" component = { SocialLinksScreen } />
                </Switch>
            </Router>

        </>
    )

  }