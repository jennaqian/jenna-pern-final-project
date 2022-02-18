const express = require("express");
const candles = express.Router();
const { getAllCandles } = require("../queries/candles.js")

candles.get("/", async (req, res) => {
    try {
        const allCandles = await getAllCandles()
        if(allCandles[0]){
            res.status(200).json(allCandles)
        } else {
            res.status(404).json({error: "server error, unable to load all candles"})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = candles;