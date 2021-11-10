import React from "react"

function Pic (props) {
    return (
        <div className='tech'>
            <img src={props.src} alt={props.name}/>
        </div>
    )
}

export default Pic