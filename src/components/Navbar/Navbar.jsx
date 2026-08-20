import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/logo.png'
const Navbar = () => {
    const [menuOpen, setMenuOpen]=useState(false);

    const closeMenu=()=>{
        setMenuOpen(false);
    };

  return (
    <header className='navbar'>
        <div className='nav-container'>

            
            <NavLink to="/" className="logo" onClick={closeMenu}>
                    <img src={logo} alt="Vanshika Construction Logo" />
                </NavLink>
            

            
            <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

                <NavLink to="/" onClick={closeMenu} className={({isActive})=>isActive ?"nav-link active" :"nav-link"}>Home</NavLink>
                <NavLink to="/about" onClick={closeMenu} className={({isActive})=>isActive ?"nav-link active" :"nav-link"}>About Us</NavLink>
                <NavLink to="/services" onClick={closeMenu} className={({isActive})=>isActive ?"nav-link active" :"nav-link"}>Services</NavLink>
                <NavLink to="/projects" onClick={closeMenu} className={({isActive})=>isActive ?"nav-link active" :"nav-link"}>Projects</NavLink>
                <NavLink to="/why-us" onClick={closeMenu} className={({isActive})=>isActive ?"nav-link active" :"nav-link"}>Why Us</NavLink>
                {/* <NavLink to="/contact" onClick={closeMenu} className={({isActive})=>isActive ?"nav-link active" :"nav-link"}>Contact</NavLink> */}
                
                <NavLink to="/contact" onClick={closeMenu} className="quote-button">Contact <span></span></NavLink>
            </nav>

            
            <button className={`menu-toggle ${menuOpen ?"open": ""}`} onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>
    </header>
  )
}

export default Navbar