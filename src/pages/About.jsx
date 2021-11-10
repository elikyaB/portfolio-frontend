import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Stack from "../components/Stack";

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
        <div>
            <div className="pic">
                <img src={about.headshot} alt="anonymous" />
                <div className="info">
                    Name: {about.name} <br />
                    Email: <a href='mailto:elikyabokanga@gmail.com'>{about.email}</a> <br />
                    City: {about.location} <br />
                    Hobbies: {about.hobbies}
                </div>
            </div>
            <div className="details">
                <p>{about.bio}</p>
            </div>
            <div>
                <Stack tech={about.tech}/>
            </div>
        </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;