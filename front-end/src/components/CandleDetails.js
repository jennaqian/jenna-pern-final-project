import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios"

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

  const handleDelete = () => {
    axios.delete(`${API}/candles/${id}`)
        .then(()=> {
            navigate("/candles")
        })
        .catch((err)=>{console.log(err)})
  }

  return (
    <div>
        <div>
            <h2>{candle.name}</h2>
            <img src={candle.image} alt={`Picture of ${candle.name} Candle`}/>
            <h3>{candle.description}</h3>
            <h3>Scent: {candle.scent}</h3>
            <h3>Featured: {candle.featured ? "🕯️" : "🚫"}</h3>
            <h3>Rating: {candle.rating}</h3>
            <h3>Price: $ {candle.price}</h3>
        </div>

        <div>
            <Link to="/candles"><button>Back</button></Link>
            <Link to={`/candles/${id}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>);
}
