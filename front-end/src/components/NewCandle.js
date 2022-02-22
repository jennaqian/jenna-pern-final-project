import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function NewCandle (){
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
        axios.post(`${API}/candles`, candle)
            .then(()=>{
                navigate("/candles")
            })
            .catch((err) => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Candle Name:</label>
            <input type="text" id="name" value={candle.name} onChange={handleTextChange} placeholder="enter name..." required/>
            <br/>

            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" value={candle.image} onChange={handleTextChange} placeholder="enter url..."/>
            <br/>

            <label htmlFor="scent">Scent</label>
            <input type="text" id="scent" value={candle.scent} onChange={handleTextChange} placeholder="enter scent..."/>
            <br/>

            <label htmlFor="price">Price:</label>
            <input type="number" id="price" value={candle.price} onChange={handleTextChange} placeholder="enter price..." required/>
            <br/>

            <label htmlFor="rating">Rating</label>
            <input type="number" id="rating" value={candle.rating} onChange={handleTextChange} placeholder="enter rating..."/>
            <br/>

            <label htmlFor="featured">Featured:</label>
            <input type="checkbox" id="featured" checked={candle.featured} onChange={handleChecked} />
            <br/>

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={candle.description} onChange={handleTextChange} placeholder="enter description..." required/>
            <br/>

            <input type="submit"/>
        </form>
    )
}