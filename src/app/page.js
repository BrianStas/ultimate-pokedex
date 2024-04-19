'use client'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import PokemonDisplay from '@/components/PokemonDisplay';
import { getFullPokemonList } from '@/lib/pokemonAPI';

export default function Home() {

const [pokeList, setPokeList] = useState([]);
const [isLoading, setLoading] = useState(true);


// the fetch request here would work with the next portion of the call. res.next would probably be the next page of results.
useEffect(() => {
  getFullPokemonList()
  // fetch('https://pokeapi.co/api/v2/pokemon?limit=50/')
  //   .then((res) => res.json())
  //   .then((res) => {
  //     const monList = res.results;
  //     let promises = monList.map((pokemon) => {
  //       return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
  //     });
  //     Promise.all(promises)
  //       .then((res) => Promise.all(res.map((r) => r.json())))

        .then((res) => {
          setPokeList(res);
          setLoading(false);
        });

}, []);

  if (isLoading) return <p>Loading...</p>
  if (pokeList.length){
    console.log('pokeList is: ', pokeList)
  }
  return (
    
    
    <main>
      <div className = "grid grid-cols-4 gap-4">
      {pokeList.map((pokemon)=>{return <PokemonDisplay currentMon={pokemon} id={pokemon.id} key={pokemon.id}/>})}
      </div>
    </main>
    
  )
}
