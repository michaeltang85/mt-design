import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'MainPage.js';
import PricingPage from 'pages/PricingPage.js';

const Main = () => {
    return (
        <Switch>{/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={MainPage}></Route>
            <Route exact path='/pages/PricingPage' component={PricingPage}></Route>
        </Switch>
    )
}

export default Main;