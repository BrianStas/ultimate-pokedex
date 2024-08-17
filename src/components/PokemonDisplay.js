import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link';
import TypeBadge from './TypeBadge';
import MonPopUp from './MonPopUp';
import Image from 'next/image';

function pokemonDisplay({currentMon}){

  const [openPopup, setOpenPopup] = useState(false);

  // will be reentering this work. Need to reconsider how I handle the data with knowledge of context now.

  if (!currentMon) return <p>Invalid Pokemon</p>

  return (
    <div className="card w-48 bg-base-100 shadow-xl" onClick={()=>setOpenPopup(!openPopup)}>
        <MonPopUp open={openPopup} selectedMon={currentMon} />
            <figure>
              <Image
                src={currentMon.sprites.other['official-artwork'].front_default} 
                alt={currentMon.name}
                width="125"
                height="125"
              />
            </figure>
            <div className = "card-body items-center text-center">
            <h1>{currentMon.name}</h1>
            <TypeBadge pokemon = {currentMon} />
            </div>
          </div>
          )
        }
  


export default pokemonDisplay