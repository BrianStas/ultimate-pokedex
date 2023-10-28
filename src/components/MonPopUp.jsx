import React from 'react'

function MonPopUp({selectedMon, open}) {
    if (!open) return null;
    console.log("popup open is ", open);
    return (
        <div className='overlay z-10'>
            <div className="popupContainer">
                <h3 className="closeBtn">Close</h3>
                <div className="content">
                This is where the content will go
                </div>
            </div>
        </div>
  ) 
}

export default MonPopUp