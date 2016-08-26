import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "../components/App";

import HomeContainer from "../containers/HomeContainer";
import DashboardContainer from "../containers/DashboardContainer";
import CompanyContainer from "../containers/CompanyContainer";

const routes = (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={HomeContainer} />
      <Route path='socialCommittee' component={DashboardContainer}/>
      <Route path='companyOverview' component={CompanyContainer}/>
    </Route>
  </Router>
);

export default routes;
