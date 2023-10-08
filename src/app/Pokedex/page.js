import Link from 'next/link';
import React from 'react'

const pokedexPage = async() => {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex');
    const pokedexes = await res.json();
    return(
        <>
        {pokedexes.results.map((pokedex, ind) => <Link href={`Pokedex/${ind+1}`} id={ind} className='btn'>{pokedex.name}</Link>)}
        </>
    )
}

export default pokedexPage