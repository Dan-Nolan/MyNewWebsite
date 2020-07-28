import "./index.scss";

const axios = require('axios');

document.getElementById("button").addEventListener("click", () => {
  axios.get("http://localhost:3095").then((response) => {
    const things = response.data;
    document.getElementById("hello-world").innerHTML = JSON.stringify(things);
  });
});
