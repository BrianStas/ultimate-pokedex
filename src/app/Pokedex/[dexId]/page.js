'use client'
import { useParams } from 'next/navigation'
import {useState, useEffect} from 'react'
 
export default function DexPokemon() {
    const [dexMon, setDexMon]=useState(null);
    const [isLoading, setLoading] = useState(true);
    const {dexId}= useParams();


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
    return( <div>
        {dexMon.map((pokemon)=><div key={pokemon.entry_number}>{pokemon.pokemon_species.name}</div>)}
        </div>)
}