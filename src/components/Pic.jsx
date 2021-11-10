import React from "react"

function Pic (props) {
    var bgImg = {backgroundImage: 'url('+props.url+')'}
    return (<div style={bgImg}></div>)
}

export default Pic