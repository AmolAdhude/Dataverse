import React from "react";


import logo from "../assets/front-page-logo.png";
import './Hero.css'
import { useAuth0 } from "@auth0/auth0-react";



const Hero = () => {
  
const {
    loginWithRedirect,
  } = useAuth0();

return(
  <div className="text-center">
    <h1 className="mb-5">Welcome To <span class="t-color">DataVerse</span></h1>
    <img src={logo} className="front" alt='logo'/>
    

    <p className="lead">
    People deserve a digital ecosystem that works for them, and with them. 
    </p>
    <button className="get-started" onClick={() => loginWithRedirect() }>
Get Started
    </button>
  </div>
)
};

export default Hero;
