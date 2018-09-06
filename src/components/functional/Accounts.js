import React from "react";
import Account from "./Account";

export default () => {
  return (
    <div>
      <div className="text-styles card">
        <h1 className="well card-header  text-white bg-info">
          Account Overview
        </h1>

        <ul className="list-group">
          <li className="list-group-item">
            <Account />
          </li>
          <li className="list-group-item">
            <Account />
          </li>
          <li className="list-group-item">
            <Account />
          </li>
        </ul>
      </div>
    </div>
  );
};
