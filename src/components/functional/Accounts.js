import React, { Component } from "react";
import Account from "./Account";
import { getAccounts } from "../../actions/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uuid from "uuid";
import ErrorMessage from "../error handling/ErrorMessage";

class Accounts extends Component {
  componentDidMount() {
    this.props.getAccounts();
  }
  renderError() {
    const errorResponse = this.props.error.response;
    if (errorResponse) {
      return <ErrorMessage {...this.props} />;
    } else {
      return <Account {...this.props} id={uuid()} />;
    }
  }

  render() {
    return (
      <div>
        <div className="text-styles card">
          <h1 className="well card-header  text-white bg-info">
            Account Overview
          </h1>
          <ul className="list-group">
            <li className="list-group-item">{this.renderError()};</li>
          </ul>
        </div>
      </div>
    );
  }
}
Accounts.propTypes = {
  error: PropTypes.object,
  accounts: PropTypes.object,
  getAccounts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
  error: state.error.errors
});

export default connect(
  mapStateToProps,
  { getAccounts }
)(Accounts);
