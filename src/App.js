import "./App.css";
import { useEffect, useState } from "react";
import { Col } from "antd";
import Search from "./components/Search";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.png";
import { getPokemons } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fecthPokemons = async () => {
      const data = await getPokemons();
      setPokemons(data);
    };
    fecthPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokemon" className="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList Pokemons={pokemons} />
    </div>
  );
}

export default App;
