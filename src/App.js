import axios from "axios";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import react from "react";
import About from "./components/About.jsx"
import Nav from "./components/Nav.jsx"
import Home from "./components/Home.jsx"
import Allguides from "./components/Allguides.jsx"

function App() {
  return (
    <div>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Allguides">
        <Allguides />
      </Route>
      
      

    </div>
  );
}

export default App;
