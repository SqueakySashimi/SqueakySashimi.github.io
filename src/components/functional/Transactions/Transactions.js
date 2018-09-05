import React, { Component } from "react";
import Transaction from "./Transaction";

class Transactions extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 mb-2">
          <span className="text-primary">Balance</span> Overview
        </h1>
        <Transaction />
      </div>
    );
  }
}
export default Transactions;
