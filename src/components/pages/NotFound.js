import React from "react";
import { Link } from "react-router-dom";

export default () => {
  console.log("hi from error");
  return (
    <div className="text-styles">
      <h1>
        Oeps, volgens mij ben je verdwaalt! <i className="fas fa-map-signs" />
      </h1>

      <h3>
        Komt goed, klik <Link to="/">hier</Link> om weer veilig terug te komen.
      </h3>
    </div>
  );
};
