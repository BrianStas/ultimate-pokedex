
'use client'
import MonStatBarChart from '@/components/MonStatBarChart';
import { getMoveList, getPokemon } from '@/lib/pokemonAPI';
import { useParams } from 'next/navigation'
import {useState, useEffect} from 'react'
 
export default function PokemonCard() {
    const [monCard, setMonCard]=useState(null);
    const [isLoading, setLoading] = useState(true);
    const {monName}= useParams();
    const [monMoves, setMonMoves] = useState(null);


    useEffect(() => {
      getPokemon(monName)
        // fetch(`https://pokeapi.co/api/v2/pokemon/${monName}`)
        //   .then((res) => res.json())
          .then((data) => {
            setMonCard(data);
            getMoveList(monName)
            .then((data) => {
              console.log("move data is: ", data)
              setMonMoves(data)});

            setLoading(false)
          })
      }, [])

      if (isLoading) return <p>Loading...</p>
      if (!monCard) return <p>Invalid Pokemon name</p>
      return (<div>
        <div className = "grid justify-items-center">
        <p>{monCard.species.name}</p>
        </div>
        <div className = "grid grid-cols-2 grid-rows-2 grid-flow-row">
          <div className = "object-center">
            <img src={monCard.sprites.front_default} alt={monCard.species.name} className = "object-cover h-48 w-96 object-center" />
          </div>
          <div>
            <MonStatBarChart monCard = {monCard}/>
          </div>
          <div className = "col-span-2">

          
            <div className = "float-right">
              <h3>Abilities</h3>
              {monMoves.map((move) => <div>
                <p>{move.name}</p>
              </div>)}
              
            </div>
          </div>

        </div>
      </div>)
    }