import React from "react";

const fetchAccounts = () => {
  return fetch("http://localhost:8080/api/getbalance")
    .then(response => response.json())
    .then(data => console.log(data.account))
    .catch(e => console.log(e));
};

export default fetchAccounts;
