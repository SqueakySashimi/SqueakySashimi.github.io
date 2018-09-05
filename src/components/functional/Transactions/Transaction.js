import React, { Component } from "react";
import Transactions from "./Transactions";
import PropTypes from "prop-types";

class Transaction extends Component {
  state = {
    from: "Jos Haarbos",
    description: "Voor de melk",
    amount: "30",
    date: "30-4-2018",
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { from, description, amount, date, showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {from} <span>{amount}</span>
          <i
            onClick={this.onShowClick}
            style={{ cursor: "pointer" }}
            className="fas fa-sort-down"
          />{" "}
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Description: {description}</li>
            <li className="list-group-item">Date: {date}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Transaction.propTypes = {
  from: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.string
};
export default Transaction;
