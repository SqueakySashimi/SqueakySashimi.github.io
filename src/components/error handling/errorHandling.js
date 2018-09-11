export const errorFunction = error => {
  //shows console logs with error info for debugging
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
};
