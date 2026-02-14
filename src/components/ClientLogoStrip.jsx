// src/components/ClientLogoStrip.jsx
import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

// All paths are relative to src/components → src/assets/clients
import abbott from "../assets/clients/abbott-logo.svg";
import abiomed from "../assets/clients/abiomed-logo.svg";
import apnimed from "../assets/clients/apnimed-logo.svg";
import aquestive from "../assets/clients/aquestive-logo.svg";
import astrazeneca from "../assets/clients/astrazeneca-logo.svg";
import atravers from "../assets/clients/atraverse-logo.svg";
import beckman from "../assets/clients/beckman-coulter-logo.svg";
import dxc from "../assets/clients/dxc-logo.svg";
import gmt from "../assets/clients/gmt-logo.svg";
import jnj from "../assets/clients/jnj-logo.svg";
import marcor from "../assets/clients/marcor-logo.svg";
import medtronic from "../assets/clients/medtronic-logo.svg";
import nih from "../assets/clients/nih-logo.svg";
import novoNordisk from "../assets/clients/novo-nordisk-logo.svg";
import orlandoHealth from "../assets/clients/orlando-health-logo.svg";
import zealand from "../assets/clients/zealand-pharma-logo.svg";

// Define the marquee animation in JS so it always exists
const scrollLoop = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LOGOS = [
  abbott,
  abiomed,
  apnimed,
  aquestive,
  astrazeneca,
  atravers,
  beckman,
  dxc,
  gmt,
  jnj,
  marcor,
  medtronic,
  nih,
  novoNordisk,
  orlandoHealth,
  zealand,
];

function LogoRow() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 3, lg: 6, },
        px: { xs: 3, lg: 6, },
      }}
    >
      {LOGOS.map((src, i) => (
        <Box
          key={i}
          component="img"
          src={src}
          alt="Client logo"
          loading="lazy"
          sx={{
            height: { xs: 48, lg: 80, },
            width: "auto",
            opacity: 0.5,
            transition: "opacity 0.2s",
            "&:hover": {
              opacity: 1,
            },
          }}
        />
      ))}
    </Box>
  );
}

export default function ClientLogoStrip() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py: 6,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: `${scrollLoop} 45s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        <LogoRow />
        <LogoRow /> {/* loop */}
      </Box>
    </Box>
  );
}
