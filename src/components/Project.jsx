import React from "react";

function Project (props) {
    return props.projects.map((project, index) => (
        <div className='projObj' key={index}>
            <hr />
            <div className='proj'>
                <div className='projName'>{project.name}</div>
                <div>
                    <a href={project.git}>
                    <button>Github</button>
                    </a>
                    <a href={project.live}>
                    <button>Deploy</button>
                    </a>
                </div>
            </div>
            <img src={project.image} className='fullwidth' alt={project.name}/>
        </div>
    ))
}

export default Project