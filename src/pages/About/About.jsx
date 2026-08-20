import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa6";


const About = () => {
  return (
    <main className='about-page'>
{/* page hero */}
<section className='about-hero'>
    <div className='about-hero-overlay'></div>
    <div className='about-hero-content'>
        <p className='about-label'>About D SQUARE</p>
        <h1>Building Trust.<span>Creating Excellence</span></h1>
        <p>We turn ideas, plans and visions into spaces that stand strong for generations.</p>
    </div>
</section>
{/* company intro */}
<section className='about-intro'>
    <div className='about-container'>
        <div className='about-intro-image'>
            <img src='https://plus.unsplash.com/premium_photo-1682724599680-c62ea33db46f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="D square construction"></img>
             </div>
            <div className='about-intro-content'>
                <p className='section-label'>WHO WE ARE</p>
                <h2>We don't just build. <span>We create lasting value.</span></h2>
                <p>D Square Construction is committed to delivering high-quality construction solutions with precision, reliability, and innovation. From residential and commercial projects to industrial developments, we focus on superior workmanship, durable materials, timely execution, and customer satisfaction, turning every vision into a lasting reality.</p>
                <p>From the first concept to final delivery, D Square Construction is committed to creating high-quality spaces with precision, innovation, and reliability. We combine skilled craftsmanship, durable materials, and efficient project management to deliver exceptional results that reflect our clients’ vision and expectations.</p>
                <Link to='/contact' className='about-btn'>Let's Work Together <span><FiArrowUpRight/></span> </Link>
            </div>
    </div>
</section>


<section className='mission-section'>
<div className='about-container'>
    <div className='mission-heading'>
        <p className='section-label'>OUR PURPOSE</p>
        <h2>Building Quality.  <span>Creating Lasting Value.</span></h2>
    </div>

<div className='mission-cards'>
    <div className='mission-card'>
<div className='mission-number'>01</div>
<div className='mission-icon'></div>
<h3>Our Mission</h3>
<p>Our mission is to deliver high-quality construction through innovation, skilled craftsmanship, sustainable practices, transparent processes, timely execution, and lasting value for every client.</p>
    </div>

    <div className='mission-card dark'>
        <div className='mission-number'>02</div>
        <div className='mission-icon'><FaRegCircle/></div>
        <h3>Our Vision</h3>
        <p>Our vision is to become a trusted construction leader, recognized for quality, innovation, sustainable development, and creating exceptional spaces that shape better futures.</p>
    </div>
</div>
</div>
</section>


<section className='values-section'>
    <div className='about-container'>
        <div className='values-heading'>
            <p className='section-label'>WHAT WE STAND FOR </p>
            <h2>Our Core</h2>
            <span>Values</span>
        </div>
        <div className='values-grid'>
            <div className='value-item'>
                <span>01</span>
                <h3>Quality</h3>
                <p>We maintain exceptional quality through premium materials, skilled craftsmanship, strict standards, and careful attention to detail at every stage of construction.</p>  
            </div>

              <div className='value-item'>
                <span>02</span>
                <h3>Integrity</h3>
                <p>Honesty guides every decision we make, ensuring transparent communication, ethical practices, and trusted relationships throughout every stage of construction.</p>
            </div>

 <div className='value-item'>
                <span>03</span>
                <h3>Innovation</h3>
                <p>Innovation drives our approach, helping us use modern technologies, smarter methods, and creative solutions to deliver efficient, sustainable, and future-ready construction projects.</p>
            </div>
            
            <div className='value-item'>
                <span>04</span>
                <h3>Safety</h3>
                <p>Safety remains a priority for our people,
                clients and every project we undertake.</p>
            </div>

        </div>
    </div>
</section>

<section className='about-cta'>
<div className='about-cta-overlay'></div>
    <div className='about-cta-content'>
        <p className='section-label'>LET'S BUILD TOGETHER</p>
<h2>Have a vision? <span>Let's make it real.</span></h2>
<Link to='/contact' className='about-cta-btn'>Start Your Project <span><FiArrowUpRight/></span></Link>
    </div>

</section>


    </main>
  )
}

export default About
