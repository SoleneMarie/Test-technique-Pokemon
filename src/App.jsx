import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokelist from "./pages/Pokelist";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import OnePokemon from "./pages/OnePokemon";

function App() {
  return (
    <>
      <Router>
        <header>
          <img src="" />
          <Link to="/list">
            <p>Pokemons</p>
          </Link>
          <p>Types</p>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Pokelist />} />
          <Route path="/pokemon/:nomdupokemon" element={<OnePokemon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
