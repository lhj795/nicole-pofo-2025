// src/components/NavBar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Pixels", to: "/" },
  { label: "Presence", to: "/presence" },
  { label: "Pottery", to: "/pottery" },
];

export default function NavBar({ collapsed }) {
  const location = useLocation();

  // Detect if on home page
  const isHome = location.pathname === "/";

  // Home page → animate when collapsed == true
  // Other pages → always visible
  const showTools = isHome ? collapsed : true;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        bgcolor: "transparent !important",
        boxShadow: "none",
        borderBottom: "none",
        backdropFilter: "none",
        pointerEvents: "none", // allow blob interaction — buttons will override this
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          px: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >

        {/* FADE + SLIDE ANIMATION WRAPPER */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            pointerEvents: showTools ? "auto" : "none", // clickable only when visible
            opacity: showTools ? 1 : 0,
            transform: showTools ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
          }}
        >
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                disableRipple
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  color: "text.primary",
                  fontWeight: active ? 400 : 360,
                  opacity: active ? 1 : 0.75,
                  "&:hover": { opacity: 1 },
                  pointerEvents: "auto",
                }}
              >
                {link.label}
              </Button>
            );
          })}
        </Box>

      </Toolbar>
    </AppBar>
  );
}
