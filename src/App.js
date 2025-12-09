// src/App.js
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import theme from "./theme";
import TypographyDemo from "./pages/TypographyDemo";
import GradientCursor from "./components/GradientCursor";

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
        {/* <Route path="/presence" element={<Presence />} /> */}
        {/* <Route path="/pottery" element={<Pottery />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
