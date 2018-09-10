import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  fromToSwitch,
  niceDate,
  amountDebitSwitch,
  posNegSwitch,
  currencyConv
} from "../../layout/transactionLayout";

class Transaction extends Component {
  state = {
    showTransactionInfo: false
  };

  onShowClick = e => {
    this.setState({ showTransactionInfo: !this.state.showTransactionInfo });
  };

  render() {
    //define all props for this component, for semantic clarity
    const { showTransactionInfo } = this.state;
    const { i } = this.props;
    const {
      from,
      to,
      description,
      amount,
      date,
      debit
    } = this.props.transactions[i];
    const { currency } = this.props;

    return (
      <div
        onClick={this.onShowClick}
        style={{ cursor: "pointer" }}
        className="card-body"
      >
        <div className="d-flex justify-content-between">
          <h5>{fromToSwitch(from, to)}</h5>
          <h6 className={from ? "text-success" : "text-danger"}>
            {posNegSwitch(from, to)}
            {currencyConv(currency)}
            {amountDebitSwitch(amount, debit)}
          </h6>
        </div>
        {showTransactionInfo ? (
          <div className={showTransactionInfo ? "slide-down" : "slide-up"}>
            <ul className="list-group list-group-flush card-body click-animation">
              <li className="text-left list-group-item">
                <strong className="text-info">Description:</strong>{" "}
                {description}
              </li>
              <li className="text-left list-group-item">
                <strong className="text-info">Transferred on:</strong>{" "}
                {niceDate(date)}
              </li>
            </ul>
          </div>
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
  to: PropTypes.string,
  debit: PropTypes.string
};
export default Transaction;
