const express = require("express");
const candles = express.Router();
const { getAllCandles, getCandle, addCandle } = require("../queries/candles.js")

candles.get("/", async (req, res) => {
    const allCandles = await getAllCandles()
    try {
        if(allCandles[0]){
            res.status(200).json(allCandles)
        } else {
            res.status(404).json({error: "server error, unable to load all candles"})
        }
    } catch (error) {
        console.log(error)
    }
})

candles.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneCandle = await getCandle(id)
    try {
        if(oneCandle.id){
            res.status(200).json(oneCandle)
        } else {
            res.status(404).json({error: "candle not found"})
        }
    } catch (error) {
        console.log(error)
    }
})

candles.post("/", async (req,res) => {
    const { body } = req
    const addedCandle = await addCandle(body)
    try {
        if(addedCandle.id){
            res.status(200).json(addedCandle)
        }else {
            res.status(404).json({error: "unable to add candle"})
        }
    } catch (error) {
        console.log(error)
    }
})




module.exports = candles;