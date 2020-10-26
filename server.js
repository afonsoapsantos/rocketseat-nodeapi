const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Inica o App
const app = express();
app.use(express.json());
app.use(cors());

//Inica o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
requireDir("./public/src/models");

//Rotas
app.use("/", require("./public/src/routes"));

app.listen(3001);
