import React, { Component } from "react";
import PropTypes from "prop-types";

class Transaction extends Component {
  state = {
    showTransactionInfo: false
  };

  onShowClick = e => {
    this.setState({ showTransactionInfo: !this.state.showTransactionInfo });
  };

  render() {
    const { showTransactionInfo } = this.state;
    const { i } = this.props;
    const {
      from,
      to,
      description,
      amount,
      date,
      currency,
      debit
    } = this.props.transactions[i];
    let fromToSwitch;
    let posNeg;
    if (from === undefined && to !== undefined) {
      fromToSwitch = to;
      posNeg = "-";
    } else if (from !== undefined && to !== undefined) {
      console.log("Error, both from and to defined for this instance");
    } else {
      fromToSwitch = from;
      posNeg = "+";
    }
    let amountDebitSwitch;

    if (amount === undefined && debit !== undefined) {
      amountDebitSwitch = debit;
    } else if (amount !== undefined && debit !== undefined) {
      console.log("Error, both amount and debit defined for this instance");
    } else {
      amountDebitSwitch = amount;
    }

    return (
      <div
        onClick={this.onShowClick}
        style={{ cursor: "pointer" }}
        className="card card-body"
      >
        <div className="d-flex justify-content-between">
          <h5>{fromToSwitch}</h5>
          <h5>
            {posNeg}
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
