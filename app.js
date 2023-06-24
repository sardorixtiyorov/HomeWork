const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index.routes");

const app = express();

app.use(express.json());
app.use("/api", mainRouter);

async function start() {
  try {
    await mongoose.connect(config.get("dbUri"));
    app.listen(config.get("port"), () => {
      console.log(`Server running on port ${config.get("port")}`);
    });
  } catch (err) {
    console.log("Could not connect to database");
  }
}
start();
