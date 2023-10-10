// import React from 'react'

// const pokemonCard = () => {
//   return (
//     <div>pokemonCard</div>
//   )
// }

// export default pokemonCard

'use client'
import { useParams } from 'next/navigation'
import {useState, useEffect} from 'react'
 
export default function PokemonCard() {
    const [monCard, setMonCard]=useState(null);
    const [isLoading, setLoading] = useState(true);
    const {monName}= useParams();


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${monName}`)
          .then((res) => res.json())
          .then((data) => {
            setMonCard(data);
            setLoading(false)
          })
      }, [])

      if (isLoading) return <p>Loading...</p>
      if (!monCard) return <p>Invalid Pokemon name</p>
      return (<div>
        <p>{monCard.species.name}</p>
      </div>)
    }