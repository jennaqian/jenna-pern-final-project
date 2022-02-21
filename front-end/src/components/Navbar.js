import { Link } from "react-router-dom"

export default function Navbar () {
    return(
        <nav>
            <Link to="/"><img src="https://cdn-icons-png.flaticon.com/128/628/628526.png" alt="Candle Logo"/></Link>
            <Link to="/candles"><button>Shop Candles</button></Link>
            <Link to="/candles/new"><button>New Candle</button></Link>
        </nav>
    )
}