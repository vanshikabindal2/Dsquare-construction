import React from "react";
import { Link } from "react-router-dom";

import { FaRegCopyright, FaRegBuilding } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import linkdein from '../../assets/linkdein.png'
import video from "../../assets/video.mp4";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <video
        className="footer-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>


      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="footer-overlay"></div>


      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div className="footer-container">


        {/* ===================================================
            FOOTER TOP
        =================================================== */}

        <div className="footer-top">


          {/* ================= BRAND ================= */}

          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              {/* Logo yahan add kar sakti ho */}
            </Link>


            <p>
              Building spaces with thoughtful design, reliable
              construction and lasting quality.
            </p>


            <Link
              to="/contact"
              className="footer-project-btn"
            >
              Start a Project

              <FiArrowUpRight />
            </Link>

          </div>


          {/* ================= QUICK LINKS ================= */}

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


          {/* ================= SERVICES ================= */}

          <div className="footer-column">

            <h3>SERVICES</h3>

            <Link to="/services">
              <span>
                Residential Construction
              </span>
            </Link>

            <Link to="/services">
              <span>
                Commercial Construction
              </span>
            </Link>

            <Link to="/services">
              <span>
                Renovation & Remodeling
              </span>
            </Link>

            <Link to="/services">
              <span>
                Industrial Development
              </span>
            </Link>

            <Link to="/services">
              <span>
                Project Management
              </span>
            </Link>

            <Link to="/services">
              <span>
                Society and Park Development
              </span>
            </Link>

          </div>


          {/* ================= CONTACT ================= */}

          <div className="footer-column footer-contact">

            <h3>CONTACT US</h3>


            <a href="tel:+918017000065">

              <strong>PHONE</strong>

              8017000065

            </a>


            <a href="mailto:dalneeraj23@gmail.com">

              <strong>EMAIL</strong>

              dalneeraj23@gmail.com

            </a>


            <span>

              <strong>OFFICE</strong>

              H no - 2784 Sector - 3 Rohtak 124001

              <br />

              India

            </span>

          </div>

        </div>


        {/* ===================================================
            FOOTER BOTTOM
        =================================================== */}

        <div className="footer-bottom">


          {/* ================= COPYRIGHT ================= */}

          <div className="copyright">

            <span>
              <FaRegCopyright />
            </span>

            <p>
              All rights reserved- D Square Construction
              <br />
              Designed by- Sun Innovation Web Tech
            </p>

          </div>


          {/* ================= TAGLINE ================= */}

          <div className="footer-tagline">

            <p>
              Building today, shaping tomorrow.
            </p>


            <div className="building-icon">

              <FaRegBuilding />

              <FaRegBuilding />

            </div>

          </div>


          {/* ================= SOCIAL ================= */}

          <div className="social-links">

            <h4>
              FOLLOW US
            </h4>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={insta}
                alt="Instagram"
              />
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={fb}
                alt="LinkedIn"
              />
            </a>


            {/* FACEBOOK */}

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src={linkdein}
                alt="Facebook"
              />
            </a>

          </div>

        </div>


        {/* ===================================================
            LEGAL
        =================================================== */}

        <div className="footer-legal">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <span>
            •
          </span>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;