import {Link} from "react-router-dom";
import noImg from "../assets/NoImg.png"

export default function Candle ({candle}){
    const firstFourWord = () => {
        let splitArr = candle.description.split(" ")
        let reducedSentence = splitArr.slice(0,5).join(" ") 
        return reducedSentence + " [...Click to read more]"
    }

    return(
        <div>
            <Link to={`/candles/${candle.id}`}>
                <h3>{candle.name}</h3>
                {candle.image ? <img src={candle.image} alt={candle.name}/>: <img src={noImg} alt="No product displayed"/>}
                {/* <img src={candle.image} alt={candle.name}/> */}
                <h4>{candle.description ? firstFourWord(): "No description ..."}</h4>
                <h4>$ {candle.price}</h4>
                {candle.featured ? <h3>🕯️</h3>: null}
            </Link>
        </div>
    )
}