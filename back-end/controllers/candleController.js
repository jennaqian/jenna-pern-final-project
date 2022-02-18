const express = require("express");
const candles = express.Router();

candles.get("/", async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
})

module.exports = candles;