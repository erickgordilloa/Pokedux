import PokemonCard from "./PokemonCard";

const PokemonList = ({ Pokemons }) => {
  return (
    <div className="pokemonList">
      {Pokemons.map((pokemon) => (
        <PokemonCard />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  Pokemons: Array(10).fill(""),
};
export default PokemonList;
