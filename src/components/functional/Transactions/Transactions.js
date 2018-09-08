import React, { Component } from "react";
import Transaction from "./Transaction";
import { getTransactions } from "../../../actions/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Transactions extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }
  render() {
    const { transactions } = this.props;
    return (
      <div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-sm btn-info mb-4 ">
            <i className="fas fa-sliders-h" /> Search
          </button>
        </div>
        <div className=" card card-header">
          <h2>
            <span className="text-info">Transaction</span> <span>Overview</span>
          </h2>
        </div>
        {transactions.map((transaction, i) => (
          <Transaction
            {...this.props}
            key={i}
            i={i}
            className="card card-body"
          />
        ))}
      </div>
    );
  }
}
Transactions.propTypes = {
  //accounts: PropTypes.object.isRequired,
  getTransactions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

export default connect(
  mapStateToProps,
  { getTransactions }
)(Transactions);
