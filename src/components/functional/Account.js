import React, { Component } from "react";
import { Link } from "react-router-dom";
import fetchTransactions from "../../data/transactions";
export default class Account extends Component {
  state = {
    account: {
      id: "ABCDEFG"
    }
  };
  render() {
    const { account } = this.state;
    fetchTransactions();
    return (
      <Link to={`/account/${account.id}`}>
        <div className="d-flex justify-content-between m-3">
          <i className="bg-info ml-3 mt-2 mb-2 p-2 flav fas fa-coins" />
          <h5 className="p-2">Account 1 - HTB0001234567</h5>
          <h5 className="p-2">
            Balance: <strong>€500</strong>
          </h5>
        </div>
      </Link>
    );
  }
}
