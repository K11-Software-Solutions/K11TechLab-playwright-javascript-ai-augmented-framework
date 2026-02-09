import React, { useState, useEffect } from "react";

export default function HeroCarousel({ slides, intervalMs = 3500 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [slides.length, intervalMs]);

  return (
    <div style={{ width: "100%", height: "300px", border: "1px solid #ccc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {slides.map((slide, idx) => (
        <div
          key={slide.title}
          style={{
            position: "absolute",
            inset: 0,
            opacity: idx === current ? 1 : 0,
            zIndex: idx === current ? 10 : 0,
            transition: "opacity 0.7s ease-in-out"
          }}
        >
          <img src={slide.image} alt={slide.title} style={{ maxHeight: "150px" }} />
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))}
      <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: idx === current ? "#222" : "#ccc",
              border: "1px solid #ccc",
              display: "block"
            }}
          />
        ))}
      </div>
    </div>
  );
}
