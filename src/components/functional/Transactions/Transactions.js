import React, { Component } from "react";
import Transaction from "./Transaction";
import { getTransactions } from "../../../actions/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ErrorMessage from "../../error handling/ErrorMessage";
class Transactions extends Component {
  state = {
    showSearch: false
  };

  onShowSearch = e => {
    this.setState({ showSearch: !this.state.showSearch });
  };
  componentDidMount() {
    this.props.getTransactions();
  }
  renderErrorTransactions() {
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
    const { showSearch } = this.state;
    return (
      <div>
        <div className="d-flex justify-content-end mb-3">
          <div className="mr-2">
            {showSearch ? (
              <input
                className={
                  showSearch
                    ? "form-control form-control-sm slide-in"
                    : "form-control form-control-sm slide-out"
                }
              />
            ) : null}
          </div>
          <button
            onClick={this.onShowSearch}
            type="button"
            className="btn btn-sm btn-info mb-4 "
          >
            <i className="fas fa-sliders-h" /> Search
          </button>
        </div>
        <div className=" card card-header">
          <h2>
            <span className="text-info">Transaction</span> <span>Overview</span>
          </h2>
        </div>
        <div className="card card-body">{this.renderErrorTransactions()}</div>
      </div>
    );
  }
}
Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
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
