// src/components/GradientCursor.jsx
import React, { useEffect, useRef, useState } from "react";
import { Box, GlobalStyles, Typography, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CURSOR_SIZE = 96; // base size for centering

export default function GradientCursor() {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // typing animation
  const LABEL_TEXT = "View case study";
  const [showArrow, setShowArrow] = useState(false);
  const [hasTypedOnce, setHasTypedOnce] = useState(false);
  const [typedText, setTypedText] = useState("");


  // "default" = circle, "caseStudy" = "View case study" label
  const [mode, setMode] = useState("default");

  useEffect(() => {
    const handleMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const el = cursorRef.current;
          if (!el) return;

          const { x, y } = posRef.current;
          el.style.transform = `translate3d(${x - CURSOR_SIZE / 2}px, ${y - CURSOR_SIZE / 2
            }px, 0)`;
        });
      }
    };

    const handleMode = (event) => {
      const nextMode = event.detail;

      if (nextMode === "caseStudy") {
        setMode("caseStudy");
      } else {
        setMode("default");
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("cursor-mode", handleMode);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("cursor-mode", handleMode);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

  }, []);

  // hide native cursor on browser return
  useEffect(() => {
    const el = cursorRef.current;

    const handleFocus = () => {
      // Hide browser cursor immediately
      document.documentElement.style.cursor = "none";
      document.body.style.cursor = "none";

      // Snap custom cursor to last known position
      if (el) {
        const { x, y } = posRef.current;
        el.style.transform = `translate3d(${x - CURSOR_SIZE / 2}px, ${y - CURSOR_SIZE / 2}px, 0)`;
      }

      // Reset mode to default so we don't get stuck in caseStudy
      window.dispatchEvent(new CustomEvent("cursor-mode", { detail: "default" }));
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);


  // typing animation
  useEffect(() => {
    if (mode !== "caseStudy" || hasTypedOnce) return;

    setTypedText("");
    setShowArrow(false);

    let i = 0;

    const interval = setInterval(() => {
      i++;
      setTypedText(LABEL_TEXT.slice(0, i));

      if (i >= LABEL_TEXT.length) {
        clearInterval(interval);
        setTimeout(() => setShowArrow(true), 120);
        setHasTypedOnce(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [mode, hasTypedOnce]);

  // arrow animation
  useEffect(() => {
    if (mode === "caseStudy" && hasTypedOnce) {
      setShowArrow(true);
    }
  }, [mode, hasTypedOnce]);



  return (
    <>
      {/* Hide the native cursor */}
      <GlobalStyles
        styles={{
          "@keyframes fadeInArrow": {
            from: { opacity: 0, transform: "translateX(-2px)" },
            to: { opacity: 1, transform: "translateX(0)" },
          },
          "html, body, *": { cursor: "none !important" },
          "button, a": { cursor: "none !important" },
        }}
      />


      {/* Custom cursor */}
      <Box
        ref={cursorRef}
        sx={{
          position: "fixed",
          top: 10,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none !important", // hard override
          cursor: "none !important",
          transition: "transform 80ms ease-out",

          ...(mode === "default"
            ? {
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
              borderRadius: "50%",
              backgroundColor: "#232323",
              mixBlendMode: "color-burn",

              // ⭐ transition between circle → pill
              transition:
                "width 0.15s ease, height 0.15s ease, border-radius 0.15s ease",
            }
            : {
              minWidth: 60,
              height: 40,
              pr: 1.5,
              pl: 2,
              borderRadius: 999,
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              transition:
                "width 0.15s ease, height 0.15s ease, border-radius 0.15s ease",
            }),
        }}
      >

        {mode === "caseStudy" && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.75}
            sx={{ whiteSpace: "nowrap" }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {hasTypedOnce ? LABEL_TEXT : typedText}
            </Typography>

            {showArrow && (
              <ArrowOutwardIcon
                sx={{
                  fontSize: 16,
                  opacity: 0,
                  animation: "fadeInArrow 0.01s forwards ease-out",
                }}
              />
            )}
          </Stack>
        )}

      </Box>
    </>
  );
}
