import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Project from "../components/Project";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div>
        <Link to="/"><h1 className='banner'>Hi, I'm Eli, web developer</h1></Link>
        <Nav />
        <Project projects={projects}/>
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;