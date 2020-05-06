const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.use("/", (req, res, next) => {
  res.sendFile("index");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`running at port ${PORT}`);
});
