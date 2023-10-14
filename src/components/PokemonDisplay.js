import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link';
import TypeBadge from './TypeBadge';

function pokemonDisplay({selectedPokemon}){
  const [currentMon, setCurrentMon]=useState(null);
  const [isLoading, setLoading] = useState(true);
  console.log("selectedPokemon is: ", selectedPokemon)


  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentMon(data);
          setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
      if (!currentMon) return <p>Invalid Pokemon</p>

  return (
    <div className="card w-48 bg-base-100 shadow-xl">
            <figure><img src={currentMon.sprites.front_default} alt={selectedPokemon} /></figure>
            <div className = "card-body items-center text-center">
            <Link 
            href={`/Pokemon/${selectedPokemon}`} 
            key={currentMon.id}
            className= "card-title">{selectedPokemon}</Link>
            <TypeBadge pokemon = {currentMon} />
            </div>
          </div>
          )
        }
  


export default pokemonDisplay