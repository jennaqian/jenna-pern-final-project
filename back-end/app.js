// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const candleController = require("./controllers/candleController.js")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
require("dotenv").config()

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Candle-licious!");
});

app.use("/candles", candleController)

//404 PAGE
app.get("*", (req, res)=> {
  res.status(404).send("Page not found!")
})

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// const db = require("./db/dbConfig.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
