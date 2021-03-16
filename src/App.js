import axios from "axios";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import react from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Montpelier Zombie Guide</h1>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>All Guides</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div>
        <p>
          Welcome to Montpelier Zombie Guide. Here you will find everything you
          need to know in order to survive a zombie apocalypse. There are guides
          for just about everything. Feel free to look around and if you have
          any suggestions, please leave a comment. Guides are adjustable and
          user input is encouraged. Stay safe....
        </p>
        <img
          src="./Users/justinkay/GA/Topaz/unit_2/week_3/monday/mzg/src/photos/main.jpeg"
          height="200px"
          width="200px"
          alt="Main Street"
        />
      </div>
    </div>
  );
}

export default App;
