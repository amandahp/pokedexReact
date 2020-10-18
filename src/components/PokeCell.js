import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass, handleOnClick, pokeData }) => {
    const { name } = pokeData
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
    return (
      <>
        <div style={style} className="poke-cell">
          <p>{name}</p>
        </div>
      </>
    );
    // return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>
};

export default PokeCell;
