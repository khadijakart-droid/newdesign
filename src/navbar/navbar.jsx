import React from "react";
import image from '.././assets/logo.jpg'
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className="logo">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="col-6">
              <ul class="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
              </ul>

            </div>
            <div className="col-3">
              <div className="contact">
                <a href="#" class="contact-btn">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )

}
export default Navbar