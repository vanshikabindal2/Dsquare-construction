import { useEffect, useRef } from "react";
import "./Whyhero.css";

const HEIGHTS = [90, 150, 110, 190, 130, 170, 100, 160, 120, 185, 95, 140];
const BRICKS = ["#b8502e", "#a3431f", "#c9622f", "#d9a21f"];
const STEPS = [
  { t: "Plan", p: "Site visit, naksha aur poora estimate pehle fix hota hai." },
  { t: "Foundation", p: "Soil test aur steel check ke baad hi neev ka kaam shuru." },
  { t: "Build", p: "Roz ka supervision aur har hafte photo update." },
  { t: "Handover", p: "Final inspection ke baad chaabi aapke haath mein." },
];

export default function Whyhero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    let lx = -99, ly = -99;
    const move = (e) => {
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (Math.hypot(x - lx, y - ly) < 34) return;
      lx = x; ly = y;

      const b = document.createElement("div");
      const rot = Math.random() * 50 - 25;
      b.className = "wu2-brick";
      b.style.left = x - 19 + "px";
      b.style.top = y - 8 + "px";
      b.style.setProperty("--c", BRICKS[Math.floor(Math.random() * BRICKS.length)]);
      hero.appendChild(b);

      b.animate(
        [
          { transform: `translateY(-6px) rotate(${rot}deg) scale(.6)`, opacity: 0 },
          { transform: `translateY(0) rotate(${rot}deg) scale(1)`, opacity: 1, offset: 0.12 },
          { transform: `translateY(70px) rotate(${rot * 2.2}deg)`, opacity: 0 },
        ],
        { duration: 1400, easing: "cubic-bezier(.4,0,.8,.6)" }
      ).onfinish = () => b.remove();
    };

    hero.addEventListener("pointermove", move);
    return () => hero.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="wu2">
      <section className="wu2-hero" ref={heroRef} aria-labelledby="wu2-title">
        <div className="wu2-inner">
          <h1 id="wu2-title" className="wu2-title">
            Built with <em>purpose.</em>
          </h1>
          <p className="wu2-lead">
            <strong>Good construction is more than structures.</strong> We design
            thoughtfully, build carefully, and make every space to last for generations.
          </p>
        </div>
        <div className="wu2-sky" aria-hidden="true">
          {HEIGHTS.map((h, i) => (
            <i key={i} className={i === 3 || i === 9 ? "g" : ""} style={{ "--h": h + "px", "--i": i }} />
          ))}
        </div>
      </section>

      

      
    </div>
  );
}