import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import App from "./App";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    transactions: state.transactions
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Wrapper;
