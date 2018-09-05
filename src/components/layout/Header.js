import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import css from "../../App.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src={logo}
            className="mb-4 mr-4 img-size"
            alt="Mocha Bank, tastes like success!"
          />
          <span className="mocha-logo">{branding}</span>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Accounts
              </Link>
            </li>
            <li>
              <Link to="/help" className="nav-link">
                <i className="fas fa-question" /> Help
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
