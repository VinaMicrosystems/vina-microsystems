import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


import {
  BrowserRouter as Router
} from 'react-router-dom'

import Routes from "./Routes/Routes";


function App () {
  AOS.init({
    easing: "ease-in-out-sine",
    delay: 900,
    duration: 300
  })
  return (
    <Router>

      <Routes />

    </Router>

  );
}

export default App;
