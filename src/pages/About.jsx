import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Pic from "../components/Pic";


function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
        <Link to="/"><h1 className='banner'>Hi, I'm Eli, web developer</h1></Link>
        <Nav />
        <div className="info">
            <Pic url={about.headshot}/>
            <div className="details">
                <h3>{about.name}</h3>
                <p>{about.bio}</p>
            </div>
        </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;