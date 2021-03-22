import { Link, Route } from "react-router-dom"


function Nav() {
  

  return (
    <div>
      <header>
        <h1>Montpelier Zombie Guide</h1>
      </header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/all-guides">
          <li>All Guides</li>

          </Link>
          
        </ul>
      </nav>

    </div>
  )
}


export default Nav