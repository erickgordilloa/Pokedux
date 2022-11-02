import PokemonCard from "./PokemonCard";

const PokemonList = ({ Pokemons }) => {
  return (
    <div className="pokemonList">
      {Pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          title={pokemon.name}
          url={pokemon.url}
          description={pokemon.name}
        />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  Pokemons: Array(10).fill(""),
};
export default PokemonList;
