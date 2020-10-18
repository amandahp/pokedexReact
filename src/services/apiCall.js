import axios from 'axios';

export const fetchPokemon = async() => {
  const result = await axios.get('http://localhost:8080/pokedex')
  return result
}