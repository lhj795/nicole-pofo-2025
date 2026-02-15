// src/components/NavBar.jsx
import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ColorModeContext from "../context/ColorModeContext";
import { ReactComponent as ModeIcon } from "../assets/nav/modeIcon.svg";
import { useLocalization } from "../il8n/LocalizationProvider";

export default function NavBar() {
  const location = useLocation();

  // Mode
  const { toggleColorMode } = useContext(ColorModeContext);

  // Localization
  const { setLanguage, t } = useLocalization();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };

  // Links
  const navLinks = [
    { label: t("nav.pixels"), to: "/" },
    { label: t("nav.presence"), to: "/presence" },
    { label: t("nav.pottery"), to: "/pottery" },
  ];

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
        zIndex: "99999",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          px: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "flex-end",
        }}
      >

        {/* FADE + SLIDE ANIMATION WRAPPER */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
          }}
        >
          <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle light and dark mode"
          disableRipple
          sx={{
            display: { xs: "none", md: "inline-flex" },
            pointerEvents: "auto",
            color: "text.secondary",
            mr: 1.5,
            "&:hover": {
              backgroundColor: "transparent",
              opacity: 0.75,
            },
          }}
        >
          <ModeIcon width={23} height={15} />
        </IconButton>
        <IconButton
          onClick={toggleLanguage}
          aria-label={t("controls.languageLabel")}
          disableRipple
          sx={{
            display: { xs: "none", md: "inline-flex" },
            pointerEvents: "auto",
            color: "text.secondary",
            "&:hover": {
              backgroundColor: "transparent",
              opacity: 0.75,
            },
          }}
        >
          <LanguageIcon fontSize="small" />
        </IconButton>
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
                  "&:hover": {
                    opacity: 1,
                    backgroundColor: "rgba(145,165,181,0.5)",
                    mixBlendMode: "color-burn",
                  },
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
