import React, { Component } from "react";
import Transaction from "./Transaction";

class Transactions extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-sm btn-info mb-4 ">
            <i className="fas fa-sliders-h" /> Search
          </button>
        </div>
        <div className=" card card-header">
          <div> </div>
          <h2>
            <span className="text-info">Transaction</span> <span>Overview</span>
          </h2>
        </div>

        <Transaction className="card card-body" />
      </div>
    );
  }
}
export default Transactions;
