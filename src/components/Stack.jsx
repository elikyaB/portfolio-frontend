import React from "react";
import Pic from "./Pic";

function Stack (props) {
    const stack = props.tech.map((item, index) => {
        return (
            <Pic
                name={item.name}
                src={item.logo}
                key={index}
            />
        )
    })

    return <div className='stack'>{stack}</div>
}

export default Stack