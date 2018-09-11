import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import ErrorMessage from "../../error handling/ErrorMessage";
import Transaction from "./Transaction";
import { getTransactions } from "../../../actions/actions";

class Transactions extends Component {
  componentDidMount() {
    //load in the data
    this.props.getTransactions();
  }
  //if GET request returns no errors load transactions
  renderErrorOrTransactions() {
    const errorResponse = this.props.error.response;
    const { transactions } = this.props;
    if (errorResponse) {
      return <ErrorMessage {...this.props} />;
    } else {
      return (
        <React.Fragment>
          {transactions.map((transaction, i) => (
            <Transaction
              {...this.props}
              key={i}
              i={i}
              className="card card-body"
            />
          ))}
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <div className=" card card-header">
          <h2>
            <span className="text-info">Transaction</span> <span>Overview</span>
          </h2>
        </div>
        <div className="card card-body">{this.renderErrorOrTransactions()}</div>
      </div>
    );
  }
}
Transactions.propTypes = {
  transactions: PropTypes.array,
  getTransactions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  transactions: state.transactions.transactions,
  error: state.error.errors,
  currency: state.transactions.currency
});

export default connect(
  mapStateToProps,
  { getTransactions }
)(Transactions);
