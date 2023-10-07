import React from 'react'

const pokedexPage = async() => {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex');
    const pokedexes = await res.json();
    return(
        <>
        {pokedexes.results.map((pokedex, ind) => <button id={ind} className='btn'>{pokedex.name}</button>)}
        </>
    )
}

export default pokedexPage