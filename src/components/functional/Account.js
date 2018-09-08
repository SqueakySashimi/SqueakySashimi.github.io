import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Account extends Component {
  render() {
    const { name, iban, balance } = this.props.accounts;
    const { id } = this.props;
    return (
      <Link to={`/account/${id}`}>
        <div className="d-flex justify-content-between m-3">
          <i className="bg-info ml-3 mt-2 mb-2 p-2 flav fas fa-coins" />
          <h5 className="p-2">
            {name} - {iban}
          </h5>
          <h5 className="p-2">
            Balance: <strong>{balance}</strong>
          </h5>
        </div>
      </Link>
    );
  }
}
