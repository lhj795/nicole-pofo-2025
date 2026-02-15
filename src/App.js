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
import ColorModeContext from "./context/ColorModeContext";

// Projects
import Lightly from "./pages/projects/Lightly";
import DXC from "./pages/projects/DXC";
import Apnimed from "./pages/projects/Apnimed"
import Marcor from "./pages/projects/Marcor"

export default function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
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
          <Route path="/marcor" element={<Marcor />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
