// src/theme.js
import { createTheme } from "@mui/material/styles";

const displayFont =
  '"Neue Haas Grotesk Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const textFont =
  '"Neue Haas Grotesk Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const theme = createTheme({
  typography: {
    // 1 rem = 16 px
    htmlFontSize: 16,

    // Default font for anything that does not override
    fontFamily: textFont,

    // Custom display variant (largest, 90.44 px)
    display: {
      fontFamily: displayFont,
      fontWeight: 100, // Light
      fontSize: "5.65rem", // 90.44px / 16
      lineHeight: 1,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },

    // Heading scale using augmented fourth from 16 px base
    // All display headings are Light
    h1: {
      fontFamily: displayFont,
      fontWeight: 200,
      fontSize: "3.28rem", // 52.44 px
      lineHeight: 1.05,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: displayFont,
      fontWeight: 240,
      fontSize: "2.87rem", // 45.96 px
      lineHeight: 1.1,
      letterSpacing: "0.02em",
    },
    h3: {
      fontFamily: displayFont,
      fontWeight: 300,
      fontSize: "2.21rem", // 35.30 px
      lineHeight: 1.15,
    },
    h4: {
      fontFamily: displayFont,
      fontWeight: 300,
      fontSize: "1.93rem", // 30.94 px
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: displayFont,
      fontWeight: 300,
      fontSize: "1.70rem", // 27.12 px
      lineHeight: 1.25,
    },
    h6: {
      fontFamily: displayFont,
      fontWeight: 300,
      fontSize: "1.49rem", // 23.77 px
      lineHeight: 1.3,
    },

    // Body text: Roman
    body1: {
      fontFamily: textFont,
      fontWeight: 400, // Roman
      fontSize: "1rem", // 16 px
      lineHeight: 1.3,
    },
    // Slightly smaller body (on the same scale)
    body2: {
      fontFamily: textFont,
      fontWeight: 400, // Roman
      fontSize: "0.88rem", // ~14.02 px
      lineHeight: 1.3,
    },

    // Caption: smallest on the scale, Roman
    caption: {
      fontFamily: textFont,
      fontWeight: 400,
      fontSize: "0.84rem", // 13.46 px
      letterSpacing: 0.3,
    },

    // Subtitles and UI labels: Medium
    subtitle1: {
      fontFamily: textFont,
      fontWeight: 500, // Medium
      fontSize: "1.30rem", // 20.83 px
      lineHeight: 1.3,
    },
    subtitle2: {
      fontFamily: textFont,
      fontWeight: 500, // Medium
      fontSize: "1.14rem", // 18.26 px
      lineHeight: 1.3,
    },
    button: {
      fontFamily: textFont,
      fontWeight: 500, // Medium
      fontSize: "0.88rem",
      textTransform: "none",
      letterSpacing: 0.4,
    },
    overline: {
      fontFamily: textFont,
      fontWeight: 500, // Medium
      fontSize: "0.75rem",
      textTransform: "uppercase",
      letterSpacing: 2,
    },

    // Home page project titles
    projectTitle: {
      fontFamily: '"Neue Haas Grotesk Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 320,
      fontSize: "1.414rem",
      letterSpacing: 0,
      lineHeight: 1.2,
    },
  },

  palette: {
    mode: "light",
    background: {
      default: "#F6F7F8",
    },
    text: {
      primary: "#111111",
      secondary: "rgba(0,0,0,0.6)",
    },
    divider: "rgba(0,0,0,0.08)",
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
        },
      },
    },
  },
});

export default theme;
