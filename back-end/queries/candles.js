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
        const addCandle = await db.one(
            "INSERT INTO candles (name, price, scent, image, rating, featured, description) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
            [candle.name, candle.price, candle.scent, candle.image, candle.rating, candle.featured, candle.description]
        )
        return addCandle
    } catch (error) {
        return error
    }
}

const deleteCandle = async (id) => {
    try {
        const deletedCandle = await db.one(
            "DELETE FROM candles WHERE id=$1 RETURNING *", id
        )
        return deletedCandle
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllCandles,
    getCandle,
    addCandle,
    deleteCandle,
};