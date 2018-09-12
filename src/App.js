import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";

import Accounts from "./components/functional/Accounts";
import Transactions from "./components/functional/Transactions/Transactions";

import Help from "./components/pages/Help";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Mocha Bank" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Accounts} />
                <Route exact path="/help" component={Help} />
                <Route path="/account" component={Transactions} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
