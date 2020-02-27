require("./models/user");
const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("../config");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo instance");
});

mongoose.connection.on("error", err => {
  console.error("Error connecting to Mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hi There");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
