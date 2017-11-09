import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/App';
import MCQPage from './components/mcq/MCQPage';
import WrittenPage from './components/written/WrittenPage';
import HomePage from './components/home/HomePage';
import SupervisorsPage from './components/supervisors/SupervisorsPage';


export default (
    <Route path={"/"} component={App}>
        <IndexRoute component={HomePage}/>
        <Route path={"mcq"} component={MCQPage}/>
        <Route path={"written"} component={WrittenPage}/>
        <Route path={"supervisors"} component={SupervisorsPage}/>
    </Route>
);