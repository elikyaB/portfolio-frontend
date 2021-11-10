import Nav from "../components/Nav";
import { Link } from "react-router-dom";


function Home(props) {
    return (
    <div>
        <h1 className='hero'>Hi,<br/>I'm Eli,<br/>web developer</h1>
        <Nav tab='home'/>
    </div>
)}
  
export default Home;