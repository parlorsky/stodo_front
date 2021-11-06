import React from "react";
import './Popup.css'

const Popup = ({isActive, setActive,children}) => {
    return (


        <div className={isActive ? 'popup active' : 'popup'} onClick={() => setActive(false)}>
            <div className={isActive ? 'popupContent active':'popupContent'} onClick={e => e.stopPropagation() }>
                {children}
            </div>

        </div>
    )

}

export default Popup