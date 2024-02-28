'use client'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import PokemonDisplay from '@/components/PokemonDisplay';

export default function Home() {

const [pokeList, setPokeList] = useState([]);
const [isLoading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=50/')
    .then((res) => res.json())
    .then((res) => {
      const monList = res.results;
      let promises = monList.map((pokemon) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      });
      Promise.all(promises)
        .then((res) => Promise.all(res.map((r) => r.json())))
        .then((res) => {
          setPokeList(res);
          setLoading(false);
        });
    })
    .catch((e) => console.log(e));
}, []);

  if (isLoading) return <p>Loading...</p>
  if (pokeList.length){
    console.log('pokeList is: ', pokeList)
  }
  return (
    
    
    <main>
      <div className = "grid grid-cols-4 gap-4">
      {pokeList.map((pokemon)=>{return <PokemonDisplay currentMon={pokemon} id={pokemon.id}/>})}
    {/* <Link href="/Pokedex" className='bg-marian-blue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-center'>Browse by Pokedex</Link>
    <Link href="/Pokemon" className='bg-flourescent-cyan hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded text-center'>Browse by Type</Link>
    <Link href="/Pokemon" className='bg-kelly-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center'>Browse Alphabetically</Link> */}
      </div>
    </main>
    
  )
}
