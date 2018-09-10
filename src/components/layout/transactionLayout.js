export const niceDate = date => {
  let tempDate = new Date(date);
  const options = {
    hour: "2-digit",
    minute: "2-digit"
  };
  return `${tempDate.toLocaleDateString()} 
    ${tempDate.toLocaleTimeString("nl-NL", options)}`;
};

export const fromToSwitch = (from, to) => {
  if (from === undefined && to !== undefined) {
    return to;
  } else if (from !== undefined && to !== undefined) {
    console.log("Error, both from and to defined for this instance");
  } else {
    return from;
  }
};

export const posNegSwitch = (from, to) => {
  if (from === undefined && to !== undefined) {
    return "-";
  } else {
    return "+";
  }
};

export const amountDebitSwitch = (amount, debit) => {
  if (amount === undefined && debit !== undefined) {
    return debit;
  } else if (amount !== undefined && debit !== undefined) {
    console.log("Error, both amount and debit defined for this instance");
  } else {
    return amount;
  }
};

export const currencyConv = currency => {
  switch (currency) {
    case "EURO":
      return "€";
    default:
      return "€";
  }
};
