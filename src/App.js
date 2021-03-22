import axios from "axios";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import AllGuides from "./components/AllGuides.jsx";
import { baseURL, config } from "./services";
import GuideDetails from "./components/GuideDetails.jsx";

function App() {
  const [guides, setGuides] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${baseURL}/guide-blocks`, config)
      setGuides(res.data.records)
    }
    getData()

  }, [])


  return (
    <div>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/all-guides">
        <AllGuides guides={guides} />
      </Route>
      <Route path="/guide-details/:id">
        <GuideDetails guides={guides} />
      </Route>
    
    </div>
  );
}

export default App;
