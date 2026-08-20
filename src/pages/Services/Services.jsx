import React from 'react'
import {Link} from "react-router-dom"
import "./Services.css"
import { FiArrowUpRight } from "react-icons/fi";

const Services = () => {
    const services=[
        {
            number :"01",
            title:"Residential Construction",
            description:"We specialize in residential construction, creating strong, comfortable, and modern homes tailored to our clients’ needs. From initial planning and structural work to finishing, we ensure quality, safety, timely completion, and lasting value.",
            image:"https://plus.unsplash.com/premium_photo-1681989490797-dbe51c438b61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            number :"02",
            title:"Commercial Construction",
                        description:"We deliver reliable commercial construction solutions with quality materials, skilled workmanship, efficient planning, and timely execution for modern, durable, and functional business spaces.",

            image:"https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            number :"03",
            title:"Industrial Construction",
                        description:"We provide reliable industrial construction services, delivering strong, efficient, and durable facilities with expert planning, quality materials, safety, and timely project completion.",

            image:"https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            number :"04",
            title:"Renovation and Remodeling",
                        description:"We modernize existing spaces through expert renovation and remodeling, improving functionality, enhancing design, upgrading quality, and creating comfortable, attractive, and practical environments.",

            image:"https://images.unsplash.com/photo-1771207918197-e73b6f6c2518?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            number :"05",
            title:"Interior Development",
                        description:"We create modern and functional interiors through thoughtful planning, quality materials, expert craftsmanship, and customized designs that enhance comfort, style, and overall space value.",

            image:"https://plus.unsplash.com/premium_photo-1682145934698-5922e583b462?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            number :"06",
            title:"Project Management",
                        description:"We turn construction plans into successful projects through smart coordination, transparent communication, precise scheduling, cost control, and seamless execution from start to finish.",

            image:"https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
  return (
    <main className='services-page'>
        <section className='services-hero'>
<div className='services-hero-overplay'></div>
<div className='services-hero-content'>
    <p className='services-label'>WHAT WE DO</p>
    <h1>Construction <span>Without Comprise</span></h1>
    <p>From Concept to Completion , D Square delivers construction solutions built around qaulity. precision and trust</p>
</div>
        </section>

<section className='services-intro'>
    <div className='services-container'>
        <div className='services-intro-heading'>
            <p className='section-label'>OUR EXPERTISE</p>
            <h2>solutions built <span>around you.</span></h2>
        </div>
        <div className='services-intro-text'>
            <p>We deliver complete construction solutions for projects of all sizes, from residential buildings and commercial spaces to large-scale infrastructure developments. Our team manages every stage of the project with a focus on quality, safety, efficient execution, and timely completion, ensuring durable results that meet client requirements.</p>
       <p>Our expertise covers modern construction, project management, structural development, and quality finishing. We combine skilled professionals, reliable materials, and efficient techniques to deliver strong, durable, and high-quality projects.
</p>

        </div>
    </div>

</section>


<section className='services-list'>
    <div className='services-container'>
        <div className='services-grid'>
{services.map((service)=>( <article className='service-large-card' key ={Services.number}>
<div className='service-image'>
    <img src={service.image} alt='{service.title}'/>
    <span className='service-number'>{service.number}</span>
</div>
<div className='service-card-content'><h3>{service.title}</h3>
<p>{service.description}</p>

<Link to='/contact'>Discuss Your Project <span></span></Link>
</div>
</article>))}
        </div>
    </div>

</section>



{/* process */}

<section className='process-section'>
    <div className='services-container'>
        <div className='process-heading'>
            <p className='section-label'>HOW WE WORK.</p>
            <h2>From idea to <span>reality.</span> </h2>
        </div>
        <div className='process-grid'>
            <div className='process-item'>
                <span>01</span>
                <h3>Understand</h3>
                <p>We understand your vision, requirements, and goals, transforming every construction idea into a well-planned, efficiently executed, and high-quality project built to last.</p>
            </div>

             <div className='process-item'>
                <span>02</span>
                <h3>Plan</h3>
                <p>Our expert team starts each project with clear planning,  and strong coordination, ensuring every construction phase moves smoothly toward successful completion.</p>
            </div>
            
                         <div className='process-item'>
                <span>03</span>
                <h3>Build</h3>
                <p>We build strong, modern, and lasting spaces with skilled craftsmanship, quality materials, innovative solutions, and attention to every construction detail.</p>
            </div>
            

                         <div className='process-item'>
                <span>04</span>
                <h3>Deliver</h3>
                <p>We deliver quality construction projects on time, combining skilled workmanship, reliable materials, smart execution, and complete dedication to client satisfaction.</p>
            </div>
        </div>
    </div>
</section>

{/* CTA */}

<section className='services-cta'>
    <div className='services-cta-overlay'></div>
    <div className='section-cta-content'>
        <p className='section-label'>READY TO START</p>

        <h2>Let's build your <span>next Project</span></h2>
<p>Have a construction project in mind ? Let's discuss how D square construction can help?</p>

<Link to='/contact'  className='services-cta-btn'>Get a Quote <span><FiArrowUpRight /></span></Link>

    </div>

</section>


    </main>
  )
}

export default Services
