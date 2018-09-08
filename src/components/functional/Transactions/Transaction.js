import React, { Component } from "react";
import PropTypes from "prop-types";

class Transaction extends Component {
  state = {
    showTransactionInfo: false,
    currency: "€"
  };

  onShowClick = e => {
    this.setState({ showTransactionInfo: !this.state.showTransactionInfo });
  };

  render() {
    const { currency, showTransactionInfo } = this.state;
    const { i } = this.props;
    const {
      from,
      to,
      description,
      amount,
      date,
      debit
    } = this.props.transactions[i];
    console.log(`(${i}) debit: ${debit} amount: ${amount}`);
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
    let niceDate = new Date(date);
    let options = {};
    return (
      <div
        onClick={this.onShowClick}
        style={{ cursor: "pointer" }}
        className="card card-body"
      >
        <div className="d-flex justify-content-between">
          <h5>{fromToSwitch}</h5>
          <h6>
            {posNeg}
            {currency}
            {amountDebitSwitch}
          </h6>
        </div>
        {showTransactionInfo ? (
          <ul className="list-group list-group-flush card-body">
            <li className="text-left list-group-item">
              <strong className="text-info">Description:</strong> {description}
            </li>
            <li className="text-left list-group-item">
              <strong className="text-info">Transferred on:</strong>{" "}
              {niceDate.toLocaleDateString()}{" "}
              {niceDate.toLocaleTimeString("nl-NL", {
                hour: "2-digit",
                minute: "2-digit"
              })}
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
  date: PropTypes.string,
  to: PropTypes.string
};
export default Transaction;
