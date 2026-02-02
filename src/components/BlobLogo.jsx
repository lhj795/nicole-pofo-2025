// src/components/BlobLogo.jsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function BlobLogo({ collapsed }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const blobColor = isDark ? "#fff" : "#000";

  if (!collapsed) return null;

  return (
    <Box
      onClick={() => navigate("/")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "fixed",
        top: 20,
        left: 20,
        width: 32,
        height: 32,
        cursor: "pointer",
        zIndex: 2000,
      }}
    >
      {/* Circle */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "999px",
          backgroundColor: blobColor,
          transition: "opacity 200ms ease",
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Nicole text */}
      <Typography
        variant="body"
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          color: "#000",
          fontFamily:
            '"Neue Haas Grotesk Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 360,
          fontSize: "1.19rem",
          letterSpacing: 1.5,
          textTransform: "uppercase",
          opacity: hovered ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        Nicole
      </Typography>
    </Box>
  );
}
