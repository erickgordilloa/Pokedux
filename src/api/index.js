import axios from "axios";

export const getPokemons = async (limit = 10, offset = 0) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((resp) => resp.data.results)
    .catch((error) => {
      console.log(error);
    });
};
