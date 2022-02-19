DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS candles;

CREATE TABLE candles (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    price INTEGER DEFAULT 0,
    scent TEXT,
    image TEXT,
    rating INTEGER DEFAULT 0,
    featured BOOLEAN,
    description TEXT
);
