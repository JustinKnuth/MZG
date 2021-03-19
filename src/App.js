import axios from "axios";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import react from "react";
import About from "./components/About.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import AllGuides from "./components/AllGuides.jsx";
import { baseURL, config } from "./services";
import GuideDetails from "./components/GuideDetails.jsx";
import Guide from "./components/Guide.jsx";
import Comments from "./components/Comments.jsx"

function App() {
  const [guides, setGuides] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const url = 'https://api.airtable.com/v0/appP8Am4eIgzdu7Ma/guide-blocks?api_key=keyiWYDbJx9kSGQOw'
      const res = await axios.get(url)
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
