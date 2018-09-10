export const errorFunction = error => {
  if (error.response) {
    error.response.uxfoutmelding = `Error, de server heeft je aanvraag beantwoord met ${
      error.response.status
    }. Probeer het later nog eens en neem contact op met Mocha Servicedesk 555-555-555 als deze error blijft terugkomen.`;
    dispatch();
    console.log(error.response.uxfoutmelding);
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
};
