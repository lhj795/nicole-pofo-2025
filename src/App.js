import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/fonts.css";
import TypographyDemo from "./pages/TypographyDemo";
import GradientCursor from "./components/CustomCursor";
import Presence from "./pages/Presence";

// Light/Dark Mode
import { getTheme } from "./theme";

// Projects
import Lightly from "./pages/projects/Lightly";
import DXC from "./pages/projects/DXC";
import Apnimed from "./pages/projects/Apnimed"

export default function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>

      <button
      onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
      style={{
        position: "fixed",
        top: 60,
        right: 16,
        zIndex: 20000,
        background: "white",
        border: "1px solid #ccc",
        padding: "8px 10px",
        borderRadius: 8,
      }}
    >
      Theme Toggle
    </button>
      
      <CssBaseline />
      {/* Custom cursor across the whole site */}
      <GradientCursor />

      {/* No Router here! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typography" element={<TypographyDemo />} />
        <Route path="/presence" element={<Presence />} />
        {/* <Route path="/pottery" element={<Pottery />} /> */}
        <Route path="/lightly" element={<Lightly />} />
        <Route path="/dxc" element={<DXC />} />
        <Route path="/apnimed" element={<Apnimed />} />
      </Routes>
    </ThemeProvider>
  );
}
