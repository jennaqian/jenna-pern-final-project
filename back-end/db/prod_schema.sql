DROP TABLE IF EXISTS candles;

CREATE TABLE candles (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    price INTEGER DEFAULT 0,
    CHECK (price <= 10),
    scent TEXT,
    image TEXT,
    rating INTEGER DEFAULT 0, 
    CHECK (rating > 0 AND rating < 6),
    featured BOOLEAN,
    description TEXT
);
