import { useEffect, useMemo, useState } from "react";
import "./Preloader.css";

const MESSAGES = [
  "Laying the foundation…",
  "Mixing the cement…",
  "Stacking bricks…",
  "Raising the walls…",
  "Final touches…",
  "Ready!",
];



export default function Preloader({ minMs = 3200, onDone }) {
  const [p, setP] = useState(0);        // progress 0..1
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  // 8 rows of bricks, bottom row first; odd rows are shifted by half a brick
  const bricks = useMemo(() => {
    const list = [];
    const bw = 27.5, bh = 12, x0 = 20, yb = 165;
    for (let r = 0; r < 8; r++) {
      const y = yb - (r + 1) * bh;
      const xs = [];
      if (r % 2) {
        xs.push([x0, bw / 2]);
        for (let c = 0; c < 7; c++) xs.push([x0 + bw / 2 + c * bw, bw]);
        xs.push([x0 + bw / 2 + 7 * bw, bw / 2]);
      } else {
        for (let c = 0; c < 8; c++) xs.push([x0 + c * bw, bw]);
      }
      xs.forEach(([x, w], i) =>
        list.push({ x, y, w, h: bh, fill: (r + i) % 2 ? "#d9693a" : "#c4552d" })
      );
    }
    return list;
  }, []);

  // progress: climbs to ~90% on its own, finishes once the page has really loaded
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const MIN = reduce ? 600 : minMs;
    const start = performance.now();
    let pageLoaded = document.readyState === "complete";
    let cur = 0, raf = 0, finished = false;
    const timers = [];

    const onLoad = () => { pageLoaded = true; };
    window.addEventListener("load", onLoad);
    document.documentElement.style.overflow = "hidden"; // lock scroll while loading

    const step = (now) => {
      const elapsed = now - start;
      let target = Math.min(0.9, (elapsed / MIN) * 0.9);   // slow climb to 90%
      if (pageLoaded && elapsed >= MIN) target = 1;        // then jump to 100%
      cur += (target - cur) * (target === 1 ? 0.12 : 0.08);
      if (target === 1 && cur > 0.995) cur = 1;
      setP(cur);

      if (cur < 1) {
        raf = requestAnimationFrame(step);
      } else if (!finished) {
        finished = true;
        timers.push(setTimeout(() => {          // show the lit house, then fade out
          setHide(true);
          document.documentElement.style.overflow = "";
        }, 1200));
        timers.push(setTimeout(() => {          // remove from the DOM after the fade
          setGone(true);
          onDone && onDone();
        }, 1900));
      }
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("load", onLoad);
      document.documentElement.style.overflow = "";
    };
  }, [minMs]); // eslint-disable-line react-hooks/exhaustive-deps

  if (gone) return null;

  const pct = Math.round(p * 100);
  const nBricks = Math.floor(Math.min(1, p / 0.8) * bricks.length + 0.0001); // bricks fill 0..80%
  const on = (t) => (p >= t ? " on" : "");
  const lit = p >= 0.999 ? " lit" : "";
  const cls = `bp${hide ? " bp--hide" : ""}${p >= 1 ? " bp--done" : ""}`;

  return (
    <div className={cls} role="progressbar" aria-label="Loading"
         aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
      <svg className="bp-svg" viewBox="0 0 260 190">
        <path className="bp-s" d="M0 166h260" strokeWidth="3" />

        {bricks.map((b, i) => (
          <rect key={i} className={`bp-bk${i < nBricks ? " on" : ""}`}
                x={b.x} y={b.y} width={b.w} height={b.h}
                fill={b.fill} stroke="#222" strokeWidth="1.6" />
        ))}

        {/* door + windows (82%) */}
        <rect className={`bp-f bp-s${on(0.82)}`} x="116" y="129" width="28" height="36" fill="#7a4a22" />
        <circle className={`bp-f${on(0.82)}`} cx="138" cy="148" r="2" fill="#ffc20e" />
        {[38, 117, 196].map((x) => (
          <rect key={x} className={`bp-win bp-f bp-s${on(0.82)}${lit}`}
                x={x} y="90" width="26" height="24" fill="#bfe3f2" />
        ))}

        {/* chimney + roof (90%) */}
        <g className={`bp-x${on(0.9)}`}>
          <rect className="bp-s" x="190" y="26" width="16" height="32" fill="#8a3f22" />
          <path className="bp-s" d="M10 70L130 24l120 46z" fill="#7a3b1f" />
        </g>

        {/* flag (98.5%) */}
        <g className={`bp-x${on(0.985)}`}>
          <path d="M130 24V2" stroke="#222" strokeWidth="2" />
          <path className="bp-s" d="M130 2l24 7-24 7z" fill="#d6281c" />
        </g>
      </svg>

      <div className="bp-pct">{pct}%</div>
      <div className="bp-msg">{MESSAGES[Math.min(5, Math.floor(p * 5.999))]}</div>
    </div>
  );
}