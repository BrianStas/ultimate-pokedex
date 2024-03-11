import React from 'react'
import MonStatBarChart from './MonStatBarChart';

function MonPopUp({selectedMon, open}) {
    if (!open) return null;
    console.log("popup open is ", open);
    return (
        <div className='overlay z-10'>
            <div className="popupContainer">
                <h3 className="closeBtn">Close</h3>
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
                        
                        <table className='col-span-12'>
                            <thead>
                                <tr>
                                    <th>Move</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedMon.moves.map((move)=> <td>{move.name}</td> )}
                            </tbody>
                        </table>
                        
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