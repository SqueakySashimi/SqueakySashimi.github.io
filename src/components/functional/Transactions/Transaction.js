import React, { Component } from "react";
import PropTypes from "prop-types";

class Transaction extends Component {
  state = {
    from: "Jos Haarbos",
    description: "Voor de melk",
    amount: "30.00",
    currency: "€",
    date: "30-4-2018",

    showTransactionInfo: false
  };

  onShowClick = e => {
    this.setState({ showTransactionInfo: !this.state.showTransactionInfo });
  };

  render() {
    const {
      from,
      description,
      amount,
      date,
      currency,
      showTransactionInfo
    } = this.state;
    return (
      <div
        onClick={this.onShowClick}
        style={{ cursor: "pointer" }}
        className="card card-body mb-3"
      >
        <div className="d-flex justify-content-between">
          <h5>{from}</h5>{" "}
          <h5>
            {currency}
            {amount}
          </h5>
        </div>
        {showTransactionInfo ? (
          <ul className="list-group list-group-flush card-body">
            <li className="text-left list-group-item">
              <strong className="text-info">Description:</strong> {description}
            </li>
            <li className="text-left list-group-item">
              <strong className="text-info">Transferred on:</strong> {date}
            </li>
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
