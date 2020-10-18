import React , { useEffect, useState } from 'react';
import './styles/PokeList.css';
import PokeCell from './PokeCell';
import {pokeClasses} from './PokeClasses';
import { fetchPokemon } from '../services/apiCall'

const PokeList = () => {

  const [data, setData] = useState([])
  const [loading, setLoading ] = useState(false)

  useEffect(() => {
    getData() 
  }, [])

  const getData  = async () => {
    const pokemonData = await fetchPokemon()
    console.log(pokemonData)
    setData(pokemonData.data)
    setLoading(true)
  }
  

  const cells = pokeClasses.map((pokeClass, index) => {
      return (<PokeCell key={pokeClass.id} pokeClass={pokeClass} pokeData={data[index]} />);
  });

  return (
    <>
    {loading ? (
    <>
    <section className="poke-list">
      {pokeClasses.map((pokeClass, index) => {
        return (<PokeCell key={pokeClass.id} pokeClass={pokeClass} pokeData={data[index]} />)
      })}
    </section>
    </>
    ): ('')
  }
  </>
  )
}

export default PokeList;