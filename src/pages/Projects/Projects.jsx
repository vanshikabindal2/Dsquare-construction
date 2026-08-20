import React from 'react'
import {Link} from "react-router-dom";
import { useState } from 'react';
 import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title:"The Grand Residence",
    category:"Residential",
    location:"Noida, Uttar Pradesh",
    year:"2025",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 2,
    title: "D Square Business Centre",
    category: "Commercial",
    location: "Delhi NCR",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 3,
    title: "Modern Villa",
    category: "Residential",
    location: "Greater Noida",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 4,
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Gurugram, Haryana",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 5,
    title: "Luxury Residence",
    category: "Residential",
    location: "Noida, Uttar Pradesh",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 6,
    title: "Urban Office Complex",
    category: "Commercial",
    location: "Ghaziabad, Uttar Pradesh",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
  },
];

const Projects = () => {
    const[activeFilter,setActiveFilter]=useState("All");
    const filters=["All","Residential", "Commerical"];
const filteredProjects=activeFilter ==="All"? projects :projects.filter((project)=>project.category ===activeFilter);
  return (
  <section className='projects-section'>
    <div className='projects-intro'>
      <div className='projects-heading'>
        <span className="projects-label">OUR PORTFOLIO</span><h1>Our <span>Projects</span></h1>
        <p>A collection of spaces designed and built with precision , functionality and timeless character.</p>
      </div>
      <div className='projects-count'>
        <strong>{String(filteredProjects.length).padStart(2,"0")}</strong>
        <span>SELECTED PROJECTS</span>
      </div>
    </div>


{/* 2part  */}
<div className='projects-filter'>
  <div className='filter-buttons'>
    <button className={activeFilter==="All" ? "active" : ""} onClick={()=>setActiveFilter("Residential")}>Residential</button>
   <button className={activeFilter ==="Commercial" ? "active" : ""} onClick={()=>setActiveFilter("Commercial")}>Commercial</button>
        </div>
    <span className='project-years'>2023-2025</span>
  </div>

  {/* projects-cards */}
<div className='projects-grid'>{filteredProjects.map((project,index)=>(
  <article className='project-card' key={project.id}>
    <div className='project-image'>
      <img src={project.image} alt={project.title}/>
      <div className='image-overlay'></div>
  <span className='project-number'>{String(index+1).padStart(2,"0")}</span>
    <span className="project-arrow">{<FiArrowUpRight/>}</span>
<div className='project-info'>
    <span className='project-category'>{project.category}</span>
        <h2>{project.title}</h2>
        <div className='project-meta'>
          <span>{project.location}</span>
          <span>{project.year}</span>

        </div>
      </div>
    </div>
  </article>
))}




</div>






{/* Let's Discuss Section */}

<div className="discuss-section">

  <div className="discuss-overlay"></div>

  <div className="discuss-content">

    <span className="discuss-label">
      BUILD WITH CONFIDENCE
    </span>

    <h2>
      Let's create something <span>remarkable</span>
    </h2>

    <p>
      Have a vision for your next space? Let’s bring it to life
      with thoughtful design, quality construction and attention
      to every detail.
    </p>

    <Link to="/contact" className="discuss-button">
      Get a Quote
      <FiArrowUpRight />
    </Link>

  </div>

</div>

  </section>
  
  )
}

export default Projects


