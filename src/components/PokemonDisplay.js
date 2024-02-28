import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link';
import TypeBadge from './TypeBadge';
import MonPopUp from './MonPopUp';

function pokemonDisplay({currentMon}){
  // const [currentMon, setCurrentMon]=useState(null);
 
  const [openPopup, setOpenPopup] = useState(false);
  // console.log("selectedPokemon is: ", selectedPokemon)
 


      if (!currentMon) return <p>Invalid Pokemon</p>

  return (
    <div className="card w-48 bg-base-100 shadow-xl" onClick={()=>setOpenPopup(!openPopup)}>
        <MonPopUp open={openPopup} selectedMon={currentMon} />
            <figure><img src={currentMon.sprites.front_default} alt={currentMon.name} /></figure>
            <div className = "card-body items-center text-center">
            <h1>{currentMon.name}</h1>
            <TypeBadge pokemon = {currentMon} />
            </div>
          </div>
          )
        }
  


export default pokemonDisplay