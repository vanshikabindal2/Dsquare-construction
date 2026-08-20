import React from 'react'
import { Link } from 'react-router-dom'

import { FaRegCopyright } from "react-icons/fa"
import { FaRegBuilding } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              
            </Link>

            <p>
              Building spaces with thoughtful design, reliable
              construction and lasting quality.
            </p>

            <Link to="/contact" className="footer-project-btn">
              Start a Project
              <FiArrowUpRight />
            </Link>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-column">

            <h3>QUICK LINKS</h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/why-us">
              Why Us
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          {/* SERVICES */}

          <div className="footer-column">

            <h3>SERVICES</h3>

            <span>
              Residential Construction
            </span>

            <span>
              Commercial Construction
            </span>

            <span>
              Renovation & Remodeling
            </span>

            <span>
              Industrial Development
            </span>

            <span>
              Project Management
            </span>

            <span>
              Society and Park Development
            </span>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h3>CONTACT US</h3>

            <a href="tel:+91 8017000065">
              <strong>PHONE</strong> 8017000065
              
            </a>

            <a href="mailto:information@gmail.com">
              <strong>EMAIL</strong>
             dalneeraj23@gmail.com
            </a>

            <span>
              <strong>OFFICE</strong>
            H no - 2784 Sector -3 Rohtak 124001
              <br />
              India
            </span>

           

          </div>

        </div>



       

        {/* ================= BOTTOM ================= */}

        <div className="footer-bottom">

          {/* COPYRIGHT */}

          <div className="copyright">

            <span>
              <FaRegCopyright />
            </span>

            <p>
              2026 D Square
              <br />
              All rights reserved.
            </p>

          </div>


          {/* TAGLINE */}

          <div className="footer-tagline">

            <p>
              Building today, shaping tomorrow.
            </p>

            <div className="building-icon">

              <FaRegBuilding />
              <FaRegBuilding />

            </div>

          </div>


          {/* SOCIAL */}

          <div className="social-links">

            <h4>FOLLOW US</h4>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

          </div>

        </div>


        {/* ================= LEGAL ================= */}

        <div className="footer-legal">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <span>•</span>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  )
}

export default Footer;