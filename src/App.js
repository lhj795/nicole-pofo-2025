// src/App.js
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import theme from "./theme";
import "./styles/fonts.css";
import TypographyDemo from "./pages/TypographyDemo";
import GradientCursor from "./components/CustomCursor";
import Presence from "./pages/Presence";

// Projects
import Lightly from "./pages/projects/Lightly";
import DXC from "./pages/projects/DXC";
import Apnimed from "./pages/projects/Apnimed"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
