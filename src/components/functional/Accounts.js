import React, { Component } from "react";
import Account from "./Account";
import { getAccounts } from "../../actions/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../store";
import uuid from "uuid";
class Accounts extends Component {
  componentDidMount() {
    this.props.getAccounts();
  }
  render() {
    return (
      <div>
        <div className="text-styles card">
          <h1 className="well card-header  text-white bg-info">
            Account Overview
          </h1>
          <ul className="list-group">
            <li className="list-group-item">
              <Account {...this.props} id={uuid()} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
Accounts.propTypes = {
  accounts: PropTypes.object.isRequired,
  getAccounts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  accounts: state.accounts.accounts
});

export default connect(
  mapStateToProps,
  { getAccounts }
)(Accounts);
