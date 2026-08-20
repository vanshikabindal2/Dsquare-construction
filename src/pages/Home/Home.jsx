import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const slides=[
    {image:"https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:"Building the future",
    title:"We Build",
    Highlight:"More Than  Structure",
    },

     {image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:"QUALITY . TRUST . EXCELLENCE",
    title:" Build with",
    Highlight:"Purpose and Precision ",
    },

     {image:"https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:"MODERN CONSTRUCTION",
    title:"Creating Space ",
    Highlight:"That Inspire",
    },


]

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(slider);
  }, []);

  const slide = slides[currentSlide];

  return (
    <main>

      
      <section className="hero-slider" style={{ backgroundImage: `url(${slide.image})` }}>

        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-tag">{slide.tag} </p>

            <h1>{slide.title} <br /> <span>{slide.Highlight}</span></h1>

            <p className="hero-description">D Square delivers reliable construction solutions with quality craftsmanship, modern technology and  a commitment to excellence.</p>

            <div className="hero-buttons">

              <Link to="/projects" className="hero-primary-btn">
                Explore Projects
                <span>↗</span>
              </Link>

              <Link to="/about" className="hero-secondary-btn">
                Discover D Square
              </Link>

            </div>

          </div>


          {/* SLIDER CONTROLS */}
          <div className="slider-controls">

            <div className="slider-counter">
              <span>
                {String(currentSlide + 1).padStart(2, "0")}
              </span>

              <div className="counter-line"></div>

              <span>
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="slider-dots">

              {slides.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index ? "dot active" : "dot"
                  }
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}

            </div>

          </div>


          {/* STATS */}
          <div className="hero-info">

            <div className="hero-info-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>

            <div className="hero-info-item">
              <h3>250+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="hero-info-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}
      <section className="intro-section">

        <div className="intro-container">

          <div className="section-heading">

            <p className="section-label">
              WHO WE ARE
            </p>

            <h2>
              Creating spaces that are
              <span> built to last.</span>
            </h2>

          </div>

          <div className="intro-text">

            <p>
              At D Square, we combine experience, technology and
              craftsmanship to create exceptional spaces. From
              residential developments to commercial projects,
              our focus is always on quality, safety and customer
              satisfaction.
            </p>

            <Link to="/about" className="learn-more">
              Learn More About Us
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* SERVICES PREVIEW */}
      <section className="services-preview">

        <div className="services-container">

          <div className="services-heading">

            <div>
              <p className="section-label">
                WHAT WE DO
              </p>

              <h2>
                Our <span>Services</span>
              </h2>
            </div>

            <Link to="/services" className="view-all">
              View All Services →
            </Link>

          </div>


          <div className="service-cards">

            <div className="service-card">
              <span className="service-number">01</span>

              <div className="service-icon">⌂</div>

              <h3>Residential Construction</h3>

              <p>
                Thoughtfully designed homes built with quality
                materials and expert craftsmanship.
              </p>

              <Link to="/services">
                Learn More →
              </Link>
            </div>


            <div className="service-card featured">
              <span className="service-number">02</span>

              <div className="service-icon">▦</div>

              <h3>Commercial Construction</h3>

              <p>
                Modern commercial spaces designed to support
                businesses and create lasting value.
              </p>

              <Link to="/services">
                Learn More →
              </Link>
            </div>


            <div className="service-card">
              <span className="service-number">03</span>

              <div className="service-icon">◇</div>

              <h3>Renovation & Remodeling</h3>

              <p>
                Transforming existing spaces into modern,
                functional and inspiring environments.
              </p>

              <Link to="/services">
                Learn More →
              </Link>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="home-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <p className="section-label">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's build something
            <span> remarkable.</span>
          </h2>

          <p>
            Tell us about your project and let's turn your vision into reality.
          </p>
<Link to="/contact" className="cta-button"> Get a Quote <span>↗</span></Link>

        </div>

      </section>

    </main>
  );
};

export default Home;