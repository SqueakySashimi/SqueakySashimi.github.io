import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import Accounts from "./components/functional/Accounts";
import Balance from "./components/functional/Balance";
import Help from "./components/pages/Help";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Mocha Bank" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Accounts} />
              <Route exact path="/help" component={Help} />
              <Route exact path="/balance" component={Balance} />
              <Route function={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
