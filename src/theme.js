// src/theme.js
import { createTheme } from "@mui/material/styles";

const displayFont =
  '"NHaasDisplayThin", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const displayItalicsFont =
  '"NHaasDisplayLightItalic", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const textFont =
  '"NHaasDisplayRoman", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const boldFont =
  '"NHaasDisplayMedium", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,

      ...(mode === "dark"
        ? {
          background: {
            default: "#1e2128",
            paper: "#2b2f35",
          },
          text: {
            primary: "#E6E8EB",
            secondary: "#AEB3C2",
          },
          divider: "rgba(255,255,255,0.12)",
        }
        : {
          background: {
            default: "#F6F7F8",
            paper: "#FFFFFF",
          },
          text: {
            primary: "#111111",
            secondary: "rgba(0,0,0,0.6)",
          },
          divider: "rgba(0,0,0,0.08)",
        }),
    },


    // palette: {
    //   mode: "light",
    //   background: {
    //     default: "#F6F7F8",
    //   },
    //   text: {
    //     primary: "#111111",
    //     secondary: "rgba(0,0,0,0.6)",
    //   },
    //   divider: "rgba(0,0,0,0.08)",
    // },

    shape: {
      borderRadius: 14,
    },

    typography: {
      // 1 rem = 16 px
      htmlFontSize: 16,

      // Default font for anything that does not override
      fontFamily: textFont,

      display: {
        fontFamily: displayFont,
        fontWeight: 100, // Light
        fontSize: "5.65rem", // 90.44px / 16
        lineHeight: 1,
        letterSpacing: "0.02em",
        textTransform: "uppercase",
      },

      // augmented fourth
      h1: {
        fontFamily: displayFont,
        fontWeight: 200,
        fontSize: "3.28rem", // 52.44 px
        lineHeight: 1,
        letterSpacing: "0.02em",
        textTransform: "uppercase",
      },
      h2: {
        fontFamily: displayFont,
        fontWeight: 200,
        fontSize: "2.87rem", // 45.96 px
        lineHeight: 1.1,
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
        lineHeight: 1.15,
      },
      h4Italic: {
        fontFamily: displayItalicsFont,
        fontWeight: 300,
        fontSize: "1.93rem", // 30.94 px
        lineHeight: 1.15,
      },
      h4Bold: {
        fontFamily: boldFont,
        fontWeight: 401,
        fontSize: "1.93rem", // 30.94 px
        lineHeight: 1.15,
      },
      h5: {
        fontFamily: displayFont,
        fontWeight: 300,
        fontSize: "1.70rem", // 27.12 px
        lineHeight: 1.25,
      },
      h5Italic: {
        fontFamily: displayItalicsFont,
        fontWeight: 300,
        fontSize: "1.70rem", // 27.12 px
        lineHeight: 1.15,
      },
      h5Bold: {
        fontFamily: boldFont,
        fontWeight: 300,
        fontSize: "1.70rem", // 27.12 px
        lineHeight: 1.25,
      },
      h6: {
        fontFamily: displayFont,
        fontWeight: 320,
        fontSize: "1.414rem",
        lineHeight: 1.2,
      },
      h6Roman: {
        fontFamily: textFont,
        fontWeight: 320,
        fontSize: "1.414rem",
        lineHeight: 1.2,
      },
      h6Italic: {
        fontFamily: displayItalicsFont,
        fontWeight: 300,
        fontSize: "1.414rem",
        lineHeight: 1.15,
      },
      h6Bold: {
        fontFamily: boldFont,
        fontSize: "1.414rem",
        lineHeight: 1.2,
      },

      // Body text: Roman
      body1: {
        fontFamily: textFont,
        fontSize: "1rem", // 16 px
        fontWeight: 400, // Roman
        lineHeight: 1.5,
      },
      body1Bold: {
        fontFamily: boldFont,
        fontSize: "1rem", // 16 px
        lineHeight: 1.5,
      },
      body2: {
        fontFamily: textFont,
        fontWeight: 400, // Roman
        fontSize: "0.88rem", // ~14.02 px
        lineHeight: 1.44,
      },
      body2Bold: {
        fontFamily: boldFont,
        fontWeight: 400, // Roman
        fontSize: "0.88rem", // ~14.02 px
        lineHeight: 1.44,
      },
      caption: {
        fontFamily: textFont,
        fontWeight: 400,
        fontSize: "0.84rem", // 13.46 px
        letterSpacing: 0.3,
      },

      // Subtitles and UI labels: Medium, need to return to this
      subtitle1: {
        fontFamily: textFont,
        fontWeight: 500, // Medium
        fontSize: "1.30rem", // 20.83 px
        lineHeight: 1.3,
      },
      subtitle1Bold: {
        fontFamily: boldFont,
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
