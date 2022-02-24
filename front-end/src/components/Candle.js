import {Link} from "react-router-dom";
import noImg from "../assets/NoImg.png"
import {Card} from "react-bootstrap"

export default function Candle ({candle}){
    const firstFourWord = () => {
        let splitArr = candle.description.split(" ")
        let reducedSentence = splitArr.slice(0,5).join(" ") 
        return reducedSentence + " [...Click to read more]"
    }

    return(
        <Card className="candle-container">
            <Link to={`/candles/${candle.id}`} className="candles-card">
                    <Card.Title>{candle.name}</Card.Title>
                    <Card.Img src={candle.image ? candle.image : noImg} alt={candle.name}/>
                <Card.Body>
                    <h5>{candle.description ? firstFourWord(): "No description ..."}</h5>
                    <span className="spans">${candle.price}</span>{" "}
                    {candle.featured ? <span className="spans">🕯️</span>: null}
                </Card.Body>
            </Link>
        </Card>
    )
}