import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditCandle (){
    const { id } = useParams();
    const navigate = useNavigate();

    const [candle, setCandle] = useState({
        name: "",
        image: "",
        scent: "",
        price: 0,
        rating: 0,
        featured: false,
        description: "",
    })

    useEffect(()=>{
        axios.get(`${API}/candles/${id}`)
            .then((res)=>{
                setCandle(res.data)
            })
            .catch((err)=>console.log(err))
    },[id])

    const handleTextChange = (e)=> {
        setCandle({
            ...candle, [e.target.id]: e.target.value
        })
    }
    
    const handleChecked = (e) =>{
        setCandle({
            ...candle, featured: e.target.checked
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.put(`${API}/candles/${id}`, candle)
            .then(()=>{
                navigate("/candles")
            })
            .catch((err) => console.log(err))
    }


    return(
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label htmlFor="name">Candle Name: </label>
                <input type="text" id="name" value={candle.name} onChange={handleTextChange} placeholder="enter name..." required/>
            </div>
            
            <div>
                <label htmlFor="image">Image URL: </label>
                <input type="text" id="image" value={candle.image} onChange={handleTextChange} placeholder="enter url..."/>
            </div>
            
            <div>
                <label htmlFor="scent">Scent: </label>
                <input type="text" id="scent" value={candle.scent} onChange={handleTextChange} placeholder="enter scent..."/>
            </div>
            
            <div>
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" min="0" max="10" value={candle.price} onChange={handleTextChange} required/>
            </div>
            
            <div>
                <label htmlFor="rating">Rating (0 - 5): </label>
                <input type="number" id="rating" min="0" max="5" value={candle.rating} onChange={handleTextChange}/>
            </div>
          

            <div>
                <label htmlFor="featured">Featured: </label>
                <input type="checkbox" id="featured" checked={candle.featured} onChange={handleChecked} />
            </div>

            <div>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" value={candle.description} onChange={handleTextChange} placeholder="enter description..." required/>
            </div>

            <div>
                <input type="submit" class="btn btn-lg btn-outline-success"/>
            </div>
        </form>
    )
}