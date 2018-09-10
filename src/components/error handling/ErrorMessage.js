import React, { Component } from "react";

export default class ErrorMessage extends Component {
  render() {
    const error = this.props.error.response.status;
    console.log("Hi from error " + { error });
    return (
      <div className="card-body">
        <h4>
          Oh oh daar ging iets niet helemaal goed -{" "}
          <span className="text-danger">Error {error}</span>{" "}
          <i class="far fa-sad-cry" />
        </h4>
        <h6>
          De server heeft je aanvraag beantwoord met statuscode {error}. Ververs
          de pagina, of probeer het later nog eens. Neem contact op met Mocha
          Servicedesk 555-555-555 als deze error blijft terugkomen.
        </h6>
      </div>
    );
  }
}
