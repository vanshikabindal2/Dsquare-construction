import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./WhyUs.css";

/* =========================================================
   COUNTER COMPONENT
========================================================= */

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(1);
  const [started, setStarted] = useState(false);

  const counterRef = useRef(null);

  /* Start counter when it enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Counter animation */
  useEffect(() => {
    if (!started) return;

    let current = 1;

    const timer = setInterval(() => {
      current += 1;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={counterRef}>
      {count}
      {count === end && suffix}
    </span>
  );
};


/* =========================================================
   WHY US PAGE
========================================================= */

const WhyUs = () => {
  return (
    <div className="why-page">

      {/* =====================================================
          INTRO SECTION
      ===================================================== */}

      <section className="why-intro">

        <div className="why-intro-left">

          <span className="why-label">
            Why D Square
          </span>

          <h1>
            Built with
            <br />
            <span>purpose.</span>
          </h1>

        </div>

        <div className="why-intro-right">

          <p>
            We believe good construction is more than just
            building structures. It is about creating spaces
            that are thoughtfully designed, carefully built,
            and made to last for generations.
          </p>

        </div>

      </section>


      {/* =====================================================
          FEATURE SECTION
      ===================================================== */}

      <section className="why-feature">

        <div className="why-feature-image">

          <img
            src="/images/why-us.jpg"
            alt="D Square Construction"
          />

        </div>


        <div className="why-feature-content">

          <span className="why-small-label">
            Our Approach
          </span>

          <h2>
            We build
            <br />
            <span>with intention.</span>
          </h2>

          <p>
            Every project begins with understanding the
            people, purpose, and vision behind it. From
            planning to execution, we focus on quality,
            transparency, and attention to detail.
          </p>

          <div className="why-sign">

            <span>
              D Square
            </span>

            <small>
              Construction & Design
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          REASONS SECTION
      ===================================================== */}

      <section className="why-reasons">

        <div className="why-reasons-heading">

          <span className="why-small-label">
            What Sets Us Apart
          </span>

          <h2>
            Why choose
            <br />
            <span>us?</span>
          </h2>

        </div>


        <div className="reasons-list">

          {/* REASON 01 */}

          <div className="reason-item">

            <div className="reason-number">
              01
            </div>

            <div className="reason-content">

              <h3>
                Quality First
              </h3>

              <p>
                We never compromise on materials,
                workmanship, or finishing quality.
              </p>

            </div>

            <div className="reason-arrow">
              <FiArrowUpRight />
            </div>

          </div>


          {/* REASON 02 */}

          <div className="reason-item">

            <div className="reason-number">
              02
            </div>

            <div className="reason-content">

              <h3>
                Clear Communication
              </h3>

              <p>
                We keep our clients informed throughout
                every stage of the construction process.
              </p>

            </div>

            <div className="reason-arrow">
              <FiArrowUpRight />
            </div>

          </div>


          {/* REASON 03 */}

          <div className="reason-item">

            <div className="reason-number">
              03
            </div>

            <div className="reason-content">

              <h3>
                Experienced Team
              </h3>

              <p>
                Our experienced professionals bring
                knowledge, precision, and dedication
                to every project.
              </p>

            </div>

            <div className="reason-arrow">
              <FiArrowUpRight />
            </div>

          </div>


          {/* REASON 04 */}

          <div className="reason-item">

            <div className="reason-number">
              04
            </div>

            <div className="reason-content">

              <h3>
                Built To Last
              </h3>

              <p>
                We create strong, functional spaces
                designed to remain valuable for years.
              </p>

            </div>

            <div className="reason-arrow">
              <FiArrowUpRight />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUMBER COUNTER SECTION
      ===================================================== */}

      <section className="why-numbers">

        <div className="why-ticker">

          <div className="why-ticker-content">

            {/* 15+ */}

            <div className="counter-item">

              <div className="counter-number">
                <Counter
                  end={15}
                  suffix="+"
                />
              </div>

              <p>
                Years Experience
              </p>

            </div>


            {/* SEPARATOR */}

            <b>✦</b>


            {/* 30+ */}

            <div className="counter-item">

              <div className="counter-number">
                <Counter
                  end={30}
                  suffix="+"
                />
              </div>

              <p>
                Projects Delivered
              </p>

            </div>


            {/* SEPARATOR */}

            <b>✦</b>


            {/* 98% */}

            <div className="counter-item">

              <div className="counter-number">
                <Counter
                  end={98}
                  suffix="%"
                />
              </div>

              <p>
                Client Satisfaction
              </p>

            </div>


            {/* SEPARATOR */}

            <b>✦</b>


            {/* 100% */}

            <div className="counter-item">

              <div className="counter-number">
                <Counter
                  end={100}
                  suffix="%"
                />
              </div>

              <p>
                Commitment
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default WhyUs;