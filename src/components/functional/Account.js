import React, { Component } from "react";

export default class Account extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between m-3">
        <i class="bg-info ml-3 mt-2 mb-2 p-2 flav fas fa-coins" />
        <h5 className="p-2">Account 1 - HTB0001234567</h5>
        <h5 className="p-2">
          Balance: <strong>€500</strong>
        </h5>
      </div>
    );
  }
}
