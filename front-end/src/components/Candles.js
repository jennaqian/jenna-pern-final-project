import axios from "axios"
import {useEffect, useState} from "react"
import Candle from "./Candle.js"

const API = process.env.REACT_APP_API_URL;

export default function Candles () {
    const [candles, setCandles] = useState([]);

    useEffect( ()=>{
        axios.get(API + "/candles")
            .then((res)=> {
                setCandles(res.data)
            })
            .catch((err) => console.log(err));
    }, []);
    
    return(
        <div>
            <article>
                {candles.map(candle => {
                    return <Candle key={candle.id} candle={candle}/>
                })}            
            </article>
            
        </div>
    )
}