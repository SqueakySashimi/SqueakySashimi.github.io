import React, { Component } from "react";
import { Link } from "react-router-dom";
import { currencyConv } from "../layout/transactionLayout";

export default class Account extends Component {
  render() {
    const { name, iban, balance } = this.props.accounts;
    const { currency } = this.props.currency;

    return (
      <Link to={"/account"} className="links">
        <div className="d-flex justify-content-between m-3">
          <i className="bg-info p-2 flav fas fa-coins" />
          <h5 className="p-2">
            {name} - {iban}
          </h5>
          <h5 className="p-2">
            Balance:{" "}
            <strong>
              {currencyConv(currency)}
              {balance}
            </strong>
          </h5>
        </div>
      </Link>
    );
  }
}
