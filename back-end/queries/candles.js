const db = require("../db/dbConfig.js")

const getAllCandles = async () => {
    try {
        const allCandle = await db.any(
            "SELECT * FROM candles"
        )
        return allCandle
    } catch (error) {
        return error
    }
}

const getCandle = async ( id ) => {
    try {
        const oneCandle = await db.one(
            "SELECT * FROM candles WHERE id=$1", id
        )
        return oneCandle
    } catch (error) {
        return error
    }
}

const addCandle = async (candle) => {
    try {
        const newCandle = await db.one(
            "INSERT INTO candles (name, price, scent, image, rating, featured, description) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
            [candle.name, candle.price, candle.scent, candle.image, candle.rating, candle.featured, candle.description]
        )
        return newCandle
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllCandles,
    getCandle,
    addCandle,
};