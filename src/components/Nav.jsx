import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      {/* <Link to="/"><div className='brdr-b brdr-r'>HOME</div></Link> */}
      <Link to="/about"><div className=''>ABOUT</div></Link>
      <Link to="/projects"><div className=''>PROJECTS</div></Link>
    </nav>
  )
}

export default Nav;