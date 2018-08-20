const express = require("express");
const app = express();
const appPort = 8080;

app.get("/", (req, res) => {
  res.send("Server is up on v2: " + appPort);
});
app.listen(appPort, () => {
  console.log("Server is up on: " + appPort);
});
