import React from 'react'

function MonPopUp({selectedMon, open}) {
    if (!open) return null;
    console.log("popup open is ", open);
    return (
        <div className='overlay z-10'>
            <div className="popupContainer">
                <h3 className="closeBtn">Close</h3>
                <div className="content">
                    <div>
                    <img src={selectedMon.sprites.front_default} alt={selectedMon} />
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