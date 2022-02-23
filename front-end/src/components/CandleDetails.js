import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios"
import {Card} from "react-bootstrap"

const API = process.env.REACT_APP_API_URL;

export default function CandleDetails() {
  const [candle, setCandle] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API}/candles/${id}`)
        .then((res)=>{
            setCandle(res.data)
        })
        .catch((err)=> console.log(err))
  }, [id])

  const stars = (n) => {
    let starRating = ""
    let i = 0
    
    while(i < n){
        starRating += "⭐";
        i++;
    }
    return starRating
  }

  const handleDelete = () => {
    axios.delete(`${API}/candles/${id}`)
        .then(()=> {
            navigate("/candles")
        })
        .catch((err)=>{console.log(err)})
  }

  return (
    <div className="candleDetails-container">
        <Card className="candleDetails-container-left" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={candle.image} alt={candle.name} />
            <Card.Body>
                <Card.Title>{candle.name}</Card.Title>
                <Card.Text>
                {candle.description}
                </Card.Text>
            </Card.Body>
        </Card>
        
        <div className="candleDetails-container-right-top">
            <h3>Rating: {candle.rating ? stars(candle.rating): "No Rating"}</h3>
            <h3>Scent: {candle.scent}</h3>
            <h3>Featured: {candle.featured ? "🕯️" : "🚫"}</h3>
            <h3>Price: $ {candle.price}</h3>
        </div>

        <div class="d-grid gap-5 d-md-block"  className="candleDetails-container-right-bottom">
            <Link to="/candles"><button class="btn btn-lg btn-outline-primary">Back</button></Link>
            <Link to={`/candles/${id}/edit`}><button class="btn btn-lg btn-outline-warning">Edit</button></Link>
            <button onClick={handleDelete} class="btn btn-lg btn-outline-danger">Delete</button>
        </div>
    </div>);
}
