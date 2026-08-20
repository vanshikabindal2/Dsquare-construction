import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import './WhyUs.css'

const reason=[
    {number:"01",
        title:"Quality First",
        text:"We focus on quality materials, skilled workmanship and proper finishing in every project",
    },
       {number:"02",
        title:"Experienced Team",
        text:"Our experienced team brings skilled expertise, practical knowledge, and dedicated effort to deliver every project with confidence.",
    },
       {number:"03",
        title:"Clear Communication",
        text:"We keep communication simple, honest, and transparent, ensuring every decision, update, and detail is clearly understood.",
    },
       {number:"04",
        title:"Built To Last",
        text: "Built to last with quality materials, expert craftsmanship, and thoughtful designs that stand strong for years.",
    },
]
const WhyUs = () => {
  return (
    <main className='why-page'>
        <section className='why-intro'>
            <div className='why-intro-left'>
                <span className='why-label'>Why D SQUARE</span>
                <h1>More Than <br/><span>Construction</span></h1>
            </div>

            <div className='why-intro-right'>
                <p>We believe good construction is not only about putting materials together. It is about creating spaces that people can trust, use and enjoy for years to come.</p>
            </div>
        </section>

        <section className='why-feature'>
            <div className='why-feature-image'>
                <img src="https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

<div className='why-feature-content'>
    <span className='why-small-label'>OUR APPROACH</span>
    <h2>We build with <span>purpose.</span></h2>
    <p>Started the project by understanding the client’s actual needs, business objectives, and target audience. Focused on creating a professional, responsive, and user-friendly construction website that clearly presents services, builds trust, showcases projects, and helps potential customers connect easily.
</p>

<div className='why-sign'><span>D square </span> <small>CONSTRUCTION</small></div>
</div>
        </section>


{/* REASONS */}

<section className='why-reasons'>
    <div className='why-reasons-heading'>
        <span className='why-small-label'>WHAT SETS US APART</span>
        <h2>Why Clients <br /><span>choose us.</span></h2>
    </div>

    <div className='reasons-list'>{reason.map((reason)=>(
        <div className='reason-item' key={reason.number}>
                    <span className='reason-number'>{reason.number}</span>
                    <div className='reason-content'>
                        <h3>{reason.title}</h3>
                        <p>{reason.text}</p>
                    </div>
                    <span className='reason-arrow'><FiArrowUpRight/></span>
        </div>
) )}</div>
</section>

<section className="why-numbers">
  <div className="why-ticker">

    <div className="why-ticker-content">

      <span>15+ Years Experience</span>
      <b>✦</b>

      <span>30+ Projects Delivered</span>
      <b>✦</b>

      <span>98% Client Satisfaction</span>
      <b>✦</b>

      <span>100% Commitment</span>
      <b>✦</b>

      <span>15+ Years Experience</span>
      <b>✦</b>

      <span>30+ Projects Delivered</span>
      <b>✦</b>

      <span>98% Client Satisfaction</span>
      <b>✦</b>

      <span>100% Commitment</span>
      <b>✦</b>

    </div>

  </div>
</section>

    </main>
  )
}

export default WhyUs
