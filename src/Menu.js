import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import corona from './corona.png'
import {NavLink} from 'react-router-dom'
 const Menu = () => {
    return (
        <>
   <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid coloring">
    <a className="navbar-brand" href="#Home"><img src={corona} className="img-fluid corona text-black" alt="header_image"/><span className="maker_of_covid">Covid 19</span></a>
    <button className="navbar-toggler icon " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end mr-lg-4 " id="navbarNav">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-center text-black" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black text-center" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-black"  href="#Symptoms">Symptoms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-black" href="#Contact_me"  aria-disabled="true">Contact Us</a>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-center text-black" exact to='/Coronalive'>Live State-Wise</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Menu;
