// import axios from "axios"
import react from "react"

const API = process.env.REACT_APP_API_URL;

export default function Candles (){
    
    console.log(API)
    return(
        <div>
            <h2>This is my INDEX page: {API}</h2>
            
        </div>
    )
}