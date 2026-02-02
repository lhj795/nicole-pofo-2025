import React, { useState } from "react";
import { Box } from "@mui/material";
import { GridLayout, GridItem } from "../../GridLayout";
import { personas } from "./PersonaData";
import PersonaPager from "./PersonaPager";
import PersonaOverview from "./PersonaOverview";
import PersonaDayInLife from "./PersonaDayInLife";
import PersonaPainPoint from "./PersonaPainPoint";
import PersonaInformation from "./PersonaInformation";
import { useTheme } from "@mui/material/styles";

function PersonaSelector({ personas, selectedId, onSelect, mode }) {

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 1, md: 2 },
        flexWrap: "wrap",
      }}
    >
      {personas.map((persona) => {
        const isActive = persona.id === selectedId;
        const c = persona.colors?.[mode] ?? persona.colors?.light ?? {};
        return (
          <Box
            key={persona.id}
            component="button"
            onClick={() => onSelect(persona.id)}
            type="button"
            sx={{
              cursor: "pointer",
              border: 0,
              p: 0,
              pt: { xs: 0.5, md: 1.5 },
              width: { xs: "15.5vw", md: 100, lg: 100 },
              height: { xs: "15.5vw", md: 100, lg: 100 },
              maxWidth: 100,
              maxHeight: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              margin: 0,
              backgroundColor: c.personaBg ?? persona.personaBg,
              borderRadius: 999,
              overflow: "hidden",
              outline: "none",
              opacity: isActive ? 1 : 0.3,
              transition: "opacity 150ms ease-out, transform 150ms ease-out",
              "&:hover": {
                opacity: 1,
                transform: isActive ? "none" : "translateY(-3px)",
              },
              "&:focus-visible": {
                boxShadow: (theme) =>
                  `0 0 0 2px ${theme.palette.common.white}, 0 0 0 4px ${theme.palette.primary.main}`,
              },
            }}
          >
            <Box
              component="img"
              src={persona.avatarSrc}
              alt={persona.name}
              sx={{
                display: "block",
                width: "auto",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default function PersonaSection() {
  const [selectedId, setSelectedId] = useState(personas[0]?.id);
  const selectedPersona = personas.find((p) => p.id === selectedId) ?? personas[0];
  const pages = selectedPersona?.pages ?? [];
  const totalPages = pages.length;
  const [pageIndex, setPageIndex] = useState(0);

  const activePage = selectedPersona.pages[pageIndex].id;
  const activePageLabel = pages[pageIndex]?.label ?? "";

  // Light Dark Modes
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <Box sx={{ width: "100%" }}>
      {/* Selector row */}
      <GridLayout>
        <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
          <PersonaSelector
            personas={personas}
            selectedId={selectedId}
            onSelect={setSelectedId}
            mode={mode}
          />
        </GridItem>
      </GridLayout>

      {/* Persona detail card */}
      <PersonaPager
        onPrev={() => setPageIndex((p) => Math.max(0, p - 1))}
        onNext={() => setPageIndex((p) => Math.min(totalPages - 1, p + 1))}
        disablePrev={pageIndex === 0}
        disableNext={pageIndex === totalPages - 1}
        footerLeft={activePageLabel}
        footerRight={`${totalPages ? pageIndex + 1 : 0}/${totalPages}`}
      >
        {activePage === "overview" && <PersonaOverview persona={selectedPersona} />}
        {activePage === "day" && (<PersonaDayInLife persona={selectedPersona} />)}
        {activePage === "pain" && (<PersonaPainPoint persona={selectedPersona} />)}
        {activePage === "info" && (<PersonaInformation persona={selectedPersona} />)}
      </PersonaPager>
    </Box>
  );
}
