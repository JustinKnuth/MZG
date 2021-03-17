import { Link, Route } from "react-router-dom"
import Nav from "./Nav.jsx"
import Food from "./Food.jsx"
import Water from "./Water.jsx"
import Communication from "./Communication.jsx"
import DoNots from "./DoNots.jsx"
import Dooze from "./Dooze.jsx"
import EscapeRoutes from "./EscapeRoutes.jsx"
import Friends from "./Friends.jsx"
import Fun from "./Fun.jsx"
import Music from "./Music.jsx"
import Pets from "./Pets.jsx"
import Sanitation from "./Sanitation.jsx"
import Sewage from "./Sewage.jsx"
import Shelters from "./Shelters.jsx"
import TravelEssentials from "./TravelEssentials.jsx"
import Weapons from "./Weapons.jsx"

function Allguides() {



  return (
    <div className="all-guides">
      <Nav />
      <div>
        <Route to="/Allguides">
          <Food />
          <Water />
          <Communication />
          <Dooze />
          <DoNots />
          <EscapeRoutes />
          <Friends />
          <Fun />
          <Music />
          <Pets />
          <Sanitation />
          <Sewage />
          <Shelters />
          <TravelEssentials />
          <Weapons />
        </Route>


      </div>
    </div>



  )
}


export default Allguides
