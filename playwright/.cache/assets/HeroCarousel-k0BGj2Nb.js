import { j as jsxRuntimeExports } from './jsx-runtime-DON3RrwB.js';
import { r as reactExports } from './index-BjCZyJQa.js';

function HeroCarousel({ slides, intervalMs = 3500 }) {
  const [current, setCurrent] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [slides.length, intervalMs]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: "100%", height: "300px", border: "1px solid #ccc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }, children: [
    slides.map((slide, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          opacity: idx === current ? 1 : 0,
          zIndex: idx === current ? 10 : 0,
          transition: "opacity 0.7s ease-in-out"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: slide.image, alt: slide.title, style: { maxHeight: "150px" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: slide.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: slide.description })
        ]
      },
      slide.title
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }, children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: idx === current ? "#222" : "#ccc",
          border: "1px solid #ccc",
          display: "block"
        }
      },
      idx
    )) })
  ] });
}

export { HeroCarousel as default };
//# sourceMappingURL=HeroCarousel-k0BGj2Nb.js.map
