const db = require("../db/dbConfig.js")

const getAllCandles = async () => {
    try {
        const allSnacks = await db.any(
            "SELECT * FROM candles"
        )
        return allSnacks
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllCandles,
};