import { Link, Route } from "react-router-dom"
import Nav from "./Nav.jsx"

function Home() {



  return (
    <div className="App">
    
    
    <div>
      <p>
        Welcome to Montpelier Zombie Guide. Here you will find everything you
        need to know in order to survive a zombie apocalypse. There are guides
        for just about everything. Feel free to look around and if you have
        any suggestions, please leave a comment. Guides are adjustable and
        user input is encouraged. Stay safe....
      </p>
      <img src="/main.jpeg" height="auto" width="400px" alt="Main Street" />
      <p>
        Montpelier, Vermont is the smallest state capitol in the country.
        Surrounded by mountains and hills, it is imperative that we understand
        what to do in case of a zombie apocalypse. That includes knowing what
        to do aboutfood, water, communication, transportation and more. You
        can find everything you need to knowto be prepared from the guides
        above.
      </p>
      <img
        src="/winooski.jpeg"
        height="auto"
        width="400px"
        alt="Winooski River"
      />
      <p>
        The State of Vermont is around 74% forested. This makes VT the 4th
        most forested state in the country. The first two are our neighbors,
        Maine and New Hampshire. In the event of a zombie invasion, knowing
        how to survive in the wilderness is necessary. You can find everything
        you need and more in the guides above.
      </p>
      <img
        src="/woodsfall.jpg"
        height="auto"
        width="400px"
        alt="The woods in the fall"
      />
      </div>
      
  </div>


  )
}



export default Home