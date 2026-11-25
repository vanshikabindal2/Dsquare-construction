
// import { useEffect, useRef } from "react";
// import "./Helicopter.css";

// export default function Helicopter() {
//   const curRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const cur = curRef.current;
//     const canvas = canvasRef.current;

//     if (!cur || !canvas) return;

//     const g = canvas.getContext("2d");
//     if (!g) return;

//     const dpr = Math.min(window.devicePixelRatio || 1, 2);
//     const still = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     let W = window.innerWidth;
//     let H = window.innerHeight;

//     // Initial helicopter position: navbar right side
//     let mx = W - 110;
//     let my = 45;

//     let px = mx;
//     let py = my;

//     let vx = 0;
//     let vy = 0;
//     let rot = 0;
//     let t = 0;

//     let away = false;
//     let holdT = 0;

//     let tgt = [W / 2, H / 2];
//     let lastZone = -1;

//     let frame = 0;
//     let raf = 0;

//     const bricks = [];
//     const parts = [];

//     const pickTarget = () => {
//       let z;

//       do {
//         z = Math.floor(Math.random() * 3);
//       } while (z === lastZone);

//       lastZone = z;

//       const xs = [0.12, 0.5, 0.88];

//       tgt = [
//         W * xs[z],
//         H * (0.12 + Math.random() * 0.6)
//       ];
//     };

//     const fit = () => {
//       W = window.innerWidth;
//       H = window.innerHeight;

//       canvas.width = W * dpr;
//       canvas.height = H * dpr;

//       canvas.style.width = `${W}px`;
//       canvas.style.height = `${H}px`;

//       g.setTransform(dpr, 0, 0, dpr, 0, 0);

//       if (!away) {
//         mx = W - 110;
//         my = 45;
//       }
//     };

//     fit();

//     const crash = (x, y) => {
//       if (still) return;

//       for (let i = 0; i < 8; i++) {
//         parts.push({
//           k: "dust",
//           x: x + (Math.random() - 0.5) * 20,
//           y: y + 6,
//           vx: (Math.random() - 0.5) * 4,
//           vy: -0.3 - Math.random() * 0.8,
//           r: 6 + Math.random() * 6,
//           life: 0,
//           max: 45 + Math.random() * 20
//         });
//       }

//       for (let i = 0; i < 3; i++) {
//         parts.push({
//           k: "chip",
//           x,
//           y,
//           vx: (Math.random() - 0.5) * 7,
//           vy: -2 - Math.random() * 4,
//           a: Math.random() * 6,
//           va: (Math.random() - 0.5) * 0.4,
//           r: 2 + Math.random() * 2.5,
//           life: 0,
//           max: 40 + Math.random() * 20
//         });
//       }
//     };

//     const onMove = (e) => {
//       if (e.pointerType !== "mouse") return;

//       mx = e.clientX;
//       my = e.clientY;

//       if (away && e.buttons === 0) {
//         onUp();
//       }
//     };

//     const onDown = (e) => {
//       if (e.pointerType !== "mouse") return;

//       mx = e.clientX;
//       my = e.clientY;

//       lastZone = -1;
//       holdT = 0;
//       away = true;

//       pickTarget();

//       cur.classList.add("away");
//     };

//     const onUp = () => {
//       away = false;
//       cur.classList.remove("away");
//     };

//     window.addEventListener("resize", fit);
//     window.addEventListener("pointermove", onMove);
//     window.addEventListener("pointerdown", onDown);
//     window.addEventListener("pointerup", onUp);
//     window.addEventListener("blur", onUp);

//     const tick = () => {
//       t += 0.05;

//       const wob = still ? 0 : 1;

//       if (away && !still) {
//         holdT++;

//         let dx = tgt[0] - px;
//         let dy = tgt[1] - py;

//         if (Math.hypot(dx, dy) < 70) {
//           pickTarget();

//           dx = tgt[0] - px;
//           dy = tgt[1] - py;
//         }

//         const d = Math.hypot(dx, dy) || 1;

//         const speed = Math.min(9, holdT * 0.25);

//         vx += ((dx / d) * speed - vx) * 0.06;
//         vy += ((dy / d) * speed - vy) * 0.06;

//         px += vx;
//         py += vy;

//         px = Math.max(45, Math.min(W - 45, px));
//         py = Math.max(45, Math.min(H - 45, py));

//         if (holdT % 4 === 0) {
//           parts.push({
//             k: "smoke",
//             x: px - Math.cos(Math.atan2(vy, vx)) * 30,
//             y: py - Math.sin(Math.atan2(vy, vx)) * 30,
//             vx: -vx * 0.08,
//             vy: -0.3 - Math.random() * 0.4,
//             r: 5,
//             life: 0,
//             max: 38
//           });
//         }
//       } else {
//         const tx = mx + Math.sin(t * 1.3) * 14 * wob;
//         const ty = my + Math.cos(t * 1.7) * 10 * wob;

//         const k = still ? 1 : 0.09;

//         const nx = px + (tx - px) * k;
//         const ny = py + (ty - py) * k;

//         vx = nx - px;
//         vy = ny - py;

//         px = nx;
//         py = ny;
//       }

//       // Helicopter rotation
//       const limit = away ? 35 : 22;

//       const target = Math.max(
//         -limit,
//         Math.min(limit, vx * (away ? 2 : 1.6))
//       );

//       rot += (target - rot) * 0.15;

//       cur.style.transform =
//         `translate3d(${px - 45}px, ${py - 45}px, 0) rotate(${rot}deg)`;

//       // Drop bricks
//       frame++;

//       if (
//         frame % (away ? 70 : 110) === 0 &&
//         px > -40 &&
//         px < W + 40 &&
//         py > -40 &&
//         py < H
//       ) {
//         const rr = (rot * Math.PI) / 180;

//         bricks.push({
//           x: px - Math.sin(rr) * 34,
//           y: py + Math.cos(rr) * 34,
//           vx: vx * 0.6 + (Math.random() - 0.5) * 1.5,
//           vy: Math.max(vy * 0.6, 0) + 1,
//           a: rr,
//           va: (Math.random() - 0.5) * 0.15,
//           rest: false,
//           life: 0
//         });

//         if (bricks.length > 160) bricks.shift();
//       }

//       // Clear canvas
//       g.clearRect(0, 0, W, H);

//       // Draw bricks
//       for (let i = bricks.length - 1; i >= 0; i--) {
//         const b = bricks[i];

//         if (!b.rest) {
//           b.vy += 0.32;
//           b.x += b.vx;
//           b.y += b.vy;
//           b.a += b.va;

//           if (b.y > H - 10) {
//             b.y = H - 10;

//             if (!b.hit) {
//               b.hit = true;
//               crash(b.x, H - 10);
//             }

//             if (b.vy > 2.5) {
//               b.vy *= -0.3;
//               b.vx *= 0.6;
//               b.va *= 0.4;
//             } else {
//               b.vy = 0;
//               b.vx = 0;
//               b.va = 0;
//               b.a = 0;
//               b.rest = true;
//               b.life = 200;
//             }
//           }
//         } else if (--b.life <= 0) {
//           bricks.splice(i, 1);
//           continue;
//         }

//         if (b.x < -60 || b.x > W + 60) {
//           bricks.splice(i, 1);
//           continue;
//         }

//         g.save();

//         g.globalAlpha = b.rest
//           ? Math.min(1, b.life / 40)
//           : 1;

//         g.translate(b.x, b.y);
//         g.rotate(b.a);

//         g.fillStyle = "#b8512c";
//         g.fillRect(-14, -7, 28, 14);

//         g.fillStyle = "rgba(255,255,255,.18)";
//         g.fillRect(-14, -7, 28, 3);

//         g.fillStyle = "rgba(0,0,0,.18)";
//         g.fillRect(-14, 4, 28, 3);

//         g.strokeStyle = "#3a2a22";
//         g.lineWidth = 1.5;
//         g.strokeRect(-14, -7, 28, 14);

//         g.beginPath();
//         g.moveTo(-14, 0);
//         g.lineTo(14, 0);
//         g.moveTo(-5, -7);
//         g.lineTo(-5, 0);
//         g.moveTo(5, 0);
//         g.lineTo(5, 7);
//         g.stroke();

//         g.restore();
//       }

//       // Draw smoke and dust particles
//       for (let i = parts.length - 1; i >= 0; i--) {
//         const p = parts[i];

//         if (++p.life > p.max) {
//           parts.splice(i, 1);
//           continue;
//         }

//         const f = p.life / p.max;

//         g.save();

//         if (p.k === "chip") {
//           p.vy += 0.4;
//           p.x += p.vx;
//           p.y += p.vy;
//           p.a += p.va;

//           if (p.y > H - 4) {
//             p.y = H - 4;
//             p.vy *= -0.3;
//             p.vx *= 0.6;
//           }

//           g.globalAlpha = 1 - f;
//           g.translate(p.x, p.y);
//           g.rotate(p.a);

//           g.fillStyle = "#c4552d";
//           g.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
//         } else {
//           p.x += p.vx;
//           p.y += p.vy;

//           p.vx *= 0.96;
//           p.vy *= 0.96;

//           g.globalAlpha =
//             (1 - f) * (p.k === "smoke" ? 0.25 : 0.35);

//           g.fillStyle =
//             p.k === "smoke" ? "#9a9a9a" : "#b8b2a8";

//           g.beginPath();
//           g.arc(
//             p.x,
//             p.y,
//             p.r * (1 + f * 1.8),
//             0,
//             Math.PI * 2
//           );
//           g.fill();
//         }

//         g.restore();
//       }

//       if (parts.length > 300) {
//         parts.splice(0, parts.length - 300);
//       }

//       raf = requestAnimationFrame(tick);
//     };

//     tick();

//     return () => {
//       cancelAnimationFrame(raf);

//       window.removeEventListener("resize", fit);
//       window.removeEventListener("pointermove", onMove);
//       window.removeEventListener("pointerdown", onDown);
//       window.removeEventListener("pointerup", onUp);
//       window.removeEventListener("blur", onUp);
//     };
//   }, []);

//   return (
//     <>
//       <canvas
//         ref={canvasRef}
//         className="hc-bricks"
//         aria-hidden="true"
//       />

//       <div
//         ref={curRef}
//         className="hc-cursor"
//         aria-hidden="true"
//       >
//         <svg viewBox="0 0 80 80">

//           <g className="hc-bob">

//             {/* Rotor mast */}
//             <path
//               className="hc-s"
//               d="M44 20v6"
//               strokeWidth="3"
//               fill="none"
//             />

//             {/* Main rotor */}
//             <ellipse
//               className="hc-prop hc-s"
//               cx="46"
//               cy="18"
//               rx="32"
//               ry="2.6"
//               fill="#cfd2cc"
//             />

//             {/* Tail boom */}
//             <path
//               className="hc-s"
//               d="M14 30l-10-10"
//               strokeWidth="5"
//               fill="none"
//             />

//             {/* Tail rotor */}
//             <ellipse
//               className="hc-prop hc-s"
//               cx="4"
//               cy="19"
//               rx="2.5"
//               ry="8"
//               fill="#cfd2cc"
//             />

//             {/* Helicopter body */}
//             <path
//               className="hc-s"
//               d="M12 30h20l8-6 14 0c8 2 10 14 4 20H30c-8 0-14-4-18-10z"
//               fill="#ffc20e"
//             />

//             {/* Window */}
//             <path
//               className="hc-s"
//               d="M44 28h8c4 2 5 8 3 11H44z"
//               fill="#bfe3f2"
//             />

//             <path
//               d="M22 36h14"
//               stroke="#222"
//               strokeWidth="2.5"
//             />

//             {/* Skids */}
//             <path
//               className="hc-s"
//               d="M26 54h30M32 46l-2 8M50 46l2 8"
//               fill="none"
//             />

//             {/* Hanging brick */}
//             <g className="hc-sway">
//               <path
//                 d="M40 54v8"
//                 stroke="#222"
//                 strokeWidth="2"
//               />

//               <rect
//                 className="hc-s"
//                 x="30"
//                 y="62"
//                 width="20"
//                 height="11"
//                 rx="2"
//                 fill="#c4552d"
//               />

//               <path
//                 d="M30 67.5h20M40 62v5.5"
//                 stroke="#222"
//                 strokeWidth="1.6"
//                 fill="none"
//               />
//             </g>

//           </g>
//         </svg>
//       </div>
//     </>
//   );
// }

import { useEffect, useRef } from "react";
import "./Helicopter.css";

/**
 * Desktop : helicopter hovers near the mouse. Hold the mouse button -> it flies around.
 * Mobile  : (screen <= 768px or touch device) it flies from one side of the screen
 *           to the other on its own, dropping bricks with dust.
 */
export default function Helicopter() {
  const curRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const canvas = canvasRef.current;
    if (!cur || !canvas) return;

    const g = canvas.getContext("2d");
    if (!g) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileQuery = window.matchMedia("(max-width: 768px), (hover: none)");

    let mobile = mobileQuery.matches;
    let half = mobile ? 32 : 45; // half of the helicopter size (64px / 90px)

    let W = window.innerWidth;
    let H = window.innerHeight;

    // start position: top right
    let mx = W - 110;
    let my = 45;
    let px = mx;
    let py = my;

    let vx = 0;
    let vy = 0;
    let rot = 0;
    let t = 0;

    let away = false;
    let holdT = 0;

    let tgt = [W / 2, H / 2];
    let lastZone = -1;

    let frame = 0;
    let raf = 0;

    const bricks = [];
    const parts = [];

    // pick a new random place to fly to (left / middle / right zone, never the same twice in a row)
    const pickTarget = () => {
      let z;
      do {
        z = Math.floor(Math.random() * 3);
      } while (z === lastZone);
      lastZone = z;

      const xs = [0.12, 0.5, 0.88];
      tgt = [W * xs[z], H * (0.12 + Math.random() * 0.6)];
    };

    const fit = () => {
      W = window.innerWidth;
      H = window.innerHeight;

      mobile = mobileQuery.matches;
      half = mobile ? 32 : 45;
      cur.style.width = `${half * 2}px`;
      cur.style.height = `${half * 2}px`;

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!away) {
        mx = W - (mobile ? 70 : 110);
        my = mobile ? 70 : 45;
      }
      if (mobile) pickTarget();
    };

    fit();

    // dust + chips when a brick hits the ground
    const crash = (x, y) => {
      if (still) return;

      const dustCount = mobile ? 5 : 8;
      for (let i = 0; i < dustCount; i++) {
        parts.push({
          k: "dust",
          x: x + (Math.random() - 0.5) * 20,
          y: y + 6,
          vx: (Math.random() - 0.5) * 4,
          vy: -0.3 - Math.random() * 0.8,
          r: 6 + Math.random() * 6,
          life: 0,
          max: 45 + Math.random() * 20,
        });
      }

      for (let i = 0; i < 3; i++) {
        parts.push({
          k: "chip",
          x,
          y,
          vx: (Math.random() - 0.5) * 7,
          vy: -2 - Math.random() * 4,
          a: Math.random() * 6,
          va: (Math.random() - 0.5) * 0.4,
          r: 2 + Math.random() * 2.5,
          life: 0,
          max: 40 + Math.random() * 20,
        });
      }
    };

    // ----- desktop mouse controls (ignored on touch) -----
    const onUp = () => {
      away = false;
      cur.classList.remove("away");
    };

    const onMove = (e) => {
      if (e.pointerType !== "mouse" || mobile) return;
      mx = e.clientX;
      my = e.clientY;
      if (away && e.buttons === 0) onUp();
    };

    const onDown = (e) => {
      if (e.pointerType !== "mouse" || mobile) return;
      mx = e.clientX;
      my = e.clientY;
      lastZone = -1;
      holdT = 0;
      away = true;
      pickTarget();
      cur.classList.add("away");
    };

    window.addEventListener("resize", fit);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("blur", onUp);

    const tick = () => {
      t += 0.05;
      const wob = still ? 0 : 1;

      // fly on its own: always on mobile, or while the mouse button is held on desktop
      const flying = !still && (mobile || away);

      if (flying) {
        holdT++;

        let dx = tgt[0] - px;
        let dy = tgt[1] - py;

        if (Math.hypot(dx, dy) < 70) {
          pickTarget();
          dx = tgt[0] - px;
          dy = tgt[1] - py;
        }

        const d = Math.hypot(dx, dy) || 1;

        const maxSpeed = mobile ? 3.4 : 9;          // calmer on phones
        const speed = Math.min(maxSpeed, holdT * 0.25);
        const steer = mobile ? 0.04 : 0.06;

        vx += ((dx / d) * speed - vx) * steer;
        vy += ((dy / d) * speed - vy) * steer;

        // little up/down float so it feels alive
        py += Math.sin(t * 2) * 0.4 * wob;

        px += vx;
        py += vy;

        px = Math.max(half, Math.min(W - half, px));
        py = Math.max(half, Math.min(H - half, py));

        if (holdT % (mobile ? 10 : 4) === 0) {
          const ang = Math.atan2(vy, vx);
          parts.push({
            k: "smoke",
            x: px - Math.cos(ang) * half * 0.66,
            y: py - Math.sin(ang) * half * 0.66,
            vx: -vx * 0.08,
            vy: -0.3 - Math.random() * 0.4,
            r: 5,
            life: 0,
            max: 38,
          });
        }
      } else {
        // desktop: hover near the mouse (or stay in place with reduced motion)
        const tx = mx + Math.sin(t * 1.3) * 14 * wob;
        const ty = my + Math.cos(t * 1.7) * 10 * wob;
        const k = still ? 1 : 0.09;

        const nx = px + (tx - px) * k;
        const ny = py + (ty - py) * k;

        vx = nx - px;
        vy = ny - py;
        px = nx;
        py = ny;
      }

      // tilt towards the direction of travel
      const limit = flying ? 35 : 22;
      const target = Math.max(-limit, Math.min(limit, vx * (flying ? 2 : 1.6)));
      rot += (target - rot) * 0.15;

      cur.style.transform = `translate3d(${px - half}px, ${py - half}px, 0) rotate(${rot}deg)`;

      // drop bricks
      frame++;
      const every = mobile ? 80 : away ? 70 : 110;

      if (frame % every === 0 && px > -40 && px < W + 40 && py > -40 && py < H) {
        const rr = (rot * Math.PI) / 180;
        const off = half * 0.75;

        bricks.push({
          x: px - Math.sin(rr) * off,
          y: py + Math.cos(rr) * off,
          vx: vx * 0.6 + (Math.random() - 0.5) * 1.5,
          vy: Math.max(vy * 0.6, 0) + 1,
          a: rr,
          va: (Math.random() - 0.5) * 0.15,
          rest: false,
          life: 0,
        });

        if (bricks.length > 160) bricks.shift();
      }

      g.clearRect(0, 0, W, H);

      // bricks
      for (let i = bricks.length - 1; i >= 0; i--) {
        const b = bricks[i];

        if (!b.rest) {
          b.vy += 0.32;
          b.x += b.vx;
          b.y += b.vy;
          b.a += b.va;

          if (b.y > H - 10) {
            b.y = H - 10;

            if (!b.hit) {
              b.hit = true;
              crash(b.x, H - 10);
            }

            if (b.vy > 2.5) {
              b.vy *= -0.3;
              b.vx *= 0.6;
              b.va *= 0.4;
            } else {
              b.vy = 0;
              b.vx = 0;
              b.va = 0;
              b.a = 0;
              b.rest = true;
              b.life = 200;
            }
          }
        } else if (--b.life <= 0) {
          bricks.splice(i, 1);
          continue;
        }

        if (b.x < -60 || b.x > W + 60) {
          bricks.splice(i, 1);
          continue;
        }

        g.save();
        g.globalAlpha = b.rest ? Math.min(1, b.life / 40) : 1;
        g.translate(b.x, b.y);
        g.rotate(b.a);

        g.fillStyle = "#b8512c";
        g.fillRect(-14, -7, 28, 14);

        g.fillStyle = "rgba(255,255,255,.18)";
        g.fillRect(-14, -7, 28, 3);

        g.fillStyle = "rgba(0,0,0,.18)";
        g.fillRect(-14, 4, 28, 3);

        g.strokeStyle = "#3a2a22";
        g.lineWidth = 1.5;
        g.strokeRect(-14, -7, 28, 14);

        g.beginPath();
        g.moveTo(-14, 0);
        g.lineTo(14, 0);
        g.moveTo(-5, -7);
        g.lineTo(-5, 0);
        g.moveTo(5, 0);
        g.lineTo(5, 7);
        g.stroke();

        g.restore();
      }

      // smoke, dust and chips
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];

        if (++p.life > p.max) {
          parts.splice(i, 1);
          continue;
        }

        const f = p.life / p.max;

        g.save();

        if (p.k === "chip") {
          p.vy += 0.4;
          p.x += p.vx;
          p.y += p.vy;
          p.a += p.va;

          if (p.y > H - 4) {
            p.y = H - 4;
            p.vy *= -0.3;
            p.vx *= 0.6;
          }

          g.globalAlpha = 1 - f;
          g.translate(p.x, p.y);
          g.rotate(p.a);
          g.fillStyle = "#c4552d";
          g.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
        } else {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.96;
          p.vy *= 0.96;

          g.globalAlpha = (1 - f) * (p.k === "smoke" ? 0.25 : 0.35);
          g.fillStyle = p.k === "smoke" ? "#9a9a9a" : "#b8b2a8";
          g.beginPath();
          g.arc(p.x, p.y, p.r * (1 + f * 1.8), 0, Math.PI * 2);
          g.fill();
        }

        g.restore();
      }

      const maxParts = mobile ? 150 : 300;
      if (parts.length > maxParts) parts.splice(0, parts.length - maxParts);

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", onUp);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="hc-bricks" aria-hidden="true" />

      <div ref={curRef} className="hc-cursor" aria-hidden="true">
        <svg viewBox="0 0 80 80">
          <g className="hc-bob">
            {/* Rotor mast */}
            <path className="hc-s" d="M44 20v6" strokeWidth="3" fill="none" />

            {/* Main rotor */}
            <ellipse className="hc-prop hc-s" cx="46" cy="18" rx="32" ry="2.6" fill="#cfd2cc" />

            {/* Tail boom */}
            <path className="hc-s" d="M14 30l-10-10" strokeWidth="5" fill="none" />

            {/* Tail rotor */}
            <ellipse className="hc-prop hc-s" cx="4" cy="19" rx="2.5" ry="8" fill="#cfd2cc" />

            {/* Helicopter body */}
            <path
              className="hc-s"
              d="M12 30h20l8-6 14 0c8 2 10 14 4 20H30c-8 0-14-4-18-10z"
              fill="#ffc20e"
            />

            {/* Window */}
            <path className="hc-s" d="M44 28h8c4 2 5 8 3 11H44z" fill="#bfe3f2" />
            <path d="M22 36h14" stroke="#222" strokeWidth="2.5" />

            {/* Skids */}
            <path className="hc-s" d="M26 54h30M32 46l-2 8M50 46l2 8" fill="none" />

            {/* Hanging brick */}
            <g className="hc-sway">
              <path d="M40 54v8" stroke="#222" strokeWidth="2" />
              <rect className="hc-s" x="30" y="62" width="20" height="11" rx="2" fill="#c4552d" />
              <path d="M30 67.5h20M40 62v5.5" stroke="#222" strokeWidth="1.6" fill="none" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}