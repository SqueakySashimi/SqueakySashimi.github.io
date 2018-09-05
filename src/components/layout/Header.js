import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-info mb-3 py-0 justify-content-center">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src={logo}
            className="mb-4 mt-1 mr-3 img-size"
            alt="Mocha Bank, tastes like success!"
          />
          <span className="mocha-logo">{branding}</span>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="flav fas fa-credit-card" /> Accounts
              </Link>
            </li>
            <li>
              <Link to="/help" className="nav-link">
                <i className="flav fas fa-question-circle" /> Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Mocha Bank"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
