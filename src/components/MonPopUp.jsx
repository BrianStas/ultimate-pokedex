import React, { useEffect, useState } from 'react'
import MonStatBarChart from './MonStatBarChart';
import { getMoveList } from '@/lib/pokemonAPI';

function MonPopUp({selectedMon, open}) {

    if (!open) return null;
    console.log("popup open is ", open);
    console.log("selectedMon data is: ", selectedMon)


    return (
        <div className='overlay z-10'>
            <div className="popupContainer">
                <h3 className="closeBtn">Close</h3>
                {/* this is where I'm going to start working again */}
                <div className="content">
                    <div className='grid grid-flow-row grid-cols-12 items-center'>
                        <div className='col-span-3 row-span-2'>
                            <img src={selectedMon.sprites.front_default}
                                alt={selectedMon}
                                height="150"
                                width="150"
                                 />
                        </div>
                        <div className='col-span-6 mt-2'>{selectedMon.name}</div>
                        <div className='col-span-9 h-auto pr-4'>
                        <MonStatBarChart monCard={selectedMon} />
                        </div>
                        
                        {/* this could be just a simple evolution chart, but moves will need to go on the full pages. */}
                        <div>For full pokemon information, click here</div>
                        
                    </div>
                    <div>
                        
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
  ) 
}

export default MonPopUp