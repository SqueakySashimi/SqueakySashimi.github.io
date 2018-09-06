import React from "react";

const fetchTransactions = () => {
  return fetch("http://localhost:8080/api/getbalance")
    .then(res => res.json())
    .then(data => data.debitsAndCredits)
    .catch(e => console.log(e));
};

export default fetchTransactions;
