import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import Candles from "./components/Candles.js"
import CandleDetails from "./components/CandleDetails.js"

function App() {
 
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/candles" element={<Candles />}/>
        <Route path="/candles/:id" element={<CandleDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
