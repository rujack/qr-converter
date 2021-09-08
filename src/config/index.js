import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import FooterComp from "../components/Footer";
import HeaderComp from "../components/Header";
import NotFoundComp from "../NotFound";
import Scan from "../Scan";

const ConfigRoute = () => {
  return (
    <Router>
      <div className="main-content">
        <HeaderComp />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/scan">
            <Scan />
          </Route>
          <Route path="*">
            <NotFoundComp/>
          </Route>
        </Switch>
        <FooterComp />
      </div>
    </Router>
  );
};

export default ConfigRoute;
