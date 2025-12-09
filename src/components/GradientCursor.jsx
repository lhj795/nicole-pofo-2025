// src/components/GradientCursor.jsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function GradientCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch devices (don't show custom cursor there)
  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (hasTouch) {
      setIsTouch(true);
    }
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const handleMove = (e) => {
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer soft glow */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 80,
          height: 80,
          borderRadius: "999px",
          pointerEvents: "none",
          zIndex: 5000,
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,200,200,0.45) 35%, rgba(200,200,255,0.2) 70%, rgba(0,0,0,0) 100%)",
          transform: `translate3d(${pos.x - 40}px, ${pos.y - 40}px, 0)`,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease-out, transform 0.08s linear",
        }}
      />

      {/* Small inner dot to keep precision feeling */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "999px",
          pointerEvents: "none",
          zIndex: 5001,
          backgroundColor: "#111",
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          opacity: visible ? 0.9 : 0,
          transition: "opacity 0.2s ease-out, transform 0.08s linear",
        }}
      />
    </>
  );
}
