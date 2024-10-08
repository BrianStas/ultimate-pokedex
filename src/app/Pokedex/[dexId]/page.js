'use client'
import PokemonDisplay from '@/components/PokemonDisplay';

import { useParams } from 'next/navigation'
import {useState, useEffect} from 'react'
 
export default function DexPokemon() {
    const [dexMon, setDexMon]=useState(null);
    const [isLoading, setLoading] = useState(true);
    const {dexId}= useParams();

    //i need a search function but I'm not sure I can implement with current api call

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokedex/${dexId}`)
          .then((res) => res.json())
          .then((data) => {
            setDexMon(data.pokemon_entries);
            setLoading(false)
          })
      }, [])

      if (isLoading) return <p>Loading...</p>
      if (!dexMon) return <p>Invalid Pokedex ID</p>

    console.log(dexId);
    return( <div className = "grid grid-cols-4 gap-4">
        {dexMon.map((pokemon)=>{return <PokemonDisplay selectedPokemon={pokemon.pokemon_species.name} id={pokemon.entry_number}/>})}
        </div>)
}