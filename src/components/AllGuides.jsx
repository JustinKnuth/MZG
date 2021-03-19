import { Link, Route } from "react-router-dom"
import Nav from "./Nav.jsx"
import GuideDetails from "./GuideDetails.jsx"
import { useEffect, useState } from "react"
import axios from "axios"
import Guide from "./Guide.jsx"


function AllGuides(props) {
  const { guides } = props

  return (
    <div className="all-guides">
      

        <div>
          {guides.map((item, index) => (
            <Guide key={item.id}
              individualGuide={item}
              index={index} />
          ))}
        </div>



      
    </div>



  )
}


export default AllGuides


{/* <Food />
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
          <Weapons /> */}
          // import Food from "./Food.jsx"
// import Water from "./Water.jsx"
// import Communication from "./Communication.jsx"
// import DoNots from "./DoNots.jsx"
// import Dooze from "./Dooze.jsx"
// import EscapeRoutes from "./EscapeRoutes.jsx"
// import Friends from "./Friends.jsx"
// import Fun from "./Fun.jsx"
// import Music from "./Music.jsx"
// import Pets from "./Pets.jsx"
// import Sanitation from "./Sanitation.jsx"
// import Sewage from "./Sewage.jsx"
// import Shelters from "./Shelters.jsx"
// import TravelEssentials from "./TravelEssentials.jsx"
// import Weapons from "./Weapons.jsx"
//import { baseURL, config } from "../services";
