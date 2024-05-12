const express = require("express");
const cors = require("cors");
const { connectMongodb } = require("./config/db");
const router = require("./routes");
require("dotenv");
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);
app.listen(port, () => {
  console.log("app listning on port", port);
  connectMongodb();
});
