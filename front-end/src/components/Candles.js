import axios from "axios"
import {useEffect, useState} from "react"
import Candle from "./Candle.js"

const API = process.env.REACT_APP_API_URL;

export default function Candles () {
    const [candles, setCandles] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect( ()=>{
        axios.get(API + "/candles")
            .then((res)=> {
                setCandles(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    const sortByPriceOrFeatured = (can) => {
        if(can === "price"){
            return candles.sort((a,b) => a.price - b.price).map(candle => {
                return <Candle key={candle.id} candle={candle}/>
            })       
        } else if (can === "featured"){
            return candles.filter(candle => candle.featured).map(candle =>{
                return <Candle key={candle.id} candle={candle}/>
            })
        } else {
            return candles.map(candle => {
                return <Candle key={candle.id} candle={candle}/>
            })   
        }
    }
    
    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }

    return(
        <div>
            <div  className="select-container">
                <select  className="select-tag" value={selectedValue} onChange={handleChange}>
                    <option>Sort Candles by</option>
                    <option value="featured">Featured 🕯️</option>
                    <option value="price">Price $ - $$$</option>
                </select>
            </div>
            <article className="candles-container">
                {sortByPriceOrFeatured(selectedValue)}
            </article>
        </div>
    )
}