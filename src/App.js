import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/n" exact element={<Navbar />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
