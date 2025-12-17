import React, { useState } from "react";
import { Box } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import { GridLayout, GridItem } from "../../GridLayout";
import { personas } from "./PersonaData";
import PersonaPager from "./PersonaPager";
import PersonaDayInLife from "./PersonaDayInLife";

function PersonaSelector({ personas, selectedId, onSelect }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 1, md: 2 },
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {personas.map((persona) => {
        const isActive = persona.id === selectedId;
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
              backgroundColor: persona.personaBg,
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

function PersonaProgressRow({ label, value, thumbColor, trackColor, textColor }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ width: "100%", color: textColor }}
    >
      <Typography variant="body2" sx={{ width: 72 }}>
        {label}
      </Typography>
      <Box
        sx={{
          flex: 1,
          height: 6,
          borderRadius: 999,
          bgcolor: trackColor,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: `${value}%`,
            height: "100%",
            bgcolor: thumbColor,
          }}
        />
      </Box>
    </Stack>
  );
}

function PersonaNuanceItem({ text, iconSrc, textColor }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "flex-start" }}>
      <Box
        component="img"
        src={iconSrc}
        alt=""
        aria-hidden="true"
        sx={{ width: 30, height: 30, flexShrink: 0, filter: "drop-shadow(0 0 0 transparent)" }}
      />
      <Typography variant="body1" sx={{ color: textColor }}>
        {text}
      </Typography>
    </Box>
  );
}

function PersonaCard({ persona }) {
  const {
    name,
    description,
    cardBg = "#FCFCFC",
    panelBg,
    personaBg,
    accent,
    roleBars,
    responsibilities,
    roleNuances,
    nuanceIconSrc,
    nuanceIconSize = 160,
    avatarSrc,
    company,
    textColor = "#000",
  } = persona;

  const [pageIndex, setPageIndex] = React.useState(0);
  const [activePersonaId, setActivePersonaId] = React.useState(personas[0].id);
  const activePersona = personas.find(p => p.id === activePersonaId);


  // whenever persona changes, reset the page index:
  React.useEffect(() => setPageIndex(0), [activePersonaId]);

  return (
    <Box
      sx={{
        mt: 3,
        bgcolor: cardBg,
        borderRadius: "12px",
      }}
    >
      <GridLayout py={4} px={4} pr={{ md: 4, lg: 0 }}>
        {/* Column 1 */}
        <GridItem cols={{ md: "1/13", lg: "1/5" }} >
          <Box
            sx={{
              bgcolor: personaBg,
              borderRadius: "8px",
              pt: 4,
              mb: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={avatarSrc}
              alt={name}
              sx={{
                height: { xs: 200, lg: 240 },
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography variant="subtitle1" sx={{ mb: 1, color: textColor, opacity: 0.5 }}>
            {company}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: accent,
              mb: 2,
              textTransform: "none",
            }}
          >
            {name}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: textColor }}>
            {description}
          </Typography>

          <Stack spacing={0.75}>
            {roleBars.map((bar) => (
              <PersonaProgressRow
                key={bar.label}
                label={bar.label}
                value={bar.value}
                trackColor={personaBg}
                thumbColor={accent}
                textColor={textColor}
              />
            ))}
          </Stack>
        </GridItem>

        {/* Column 2 */}
        <GridItem cols={{ xs: "1/13", md: "1/13", lg: "5/13" }} sx={{ height: "100%", width: "100%", display: "flex", gap: 1.5 }}>
          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
          >
            <Box
              sx={{
                bgcolor: panelBg,
                borderRadius: roleNuances && roleNuances.length > 0
                  ? "8px"
                  : { xs: "8px", md: "8px", lg: "8px 0 0 8px" },
                p: 2.5,
                height: "100%",
                width: "100%",
              }}
            >
              <Box sx={{ mb: 3, color: textColor }}>
                <Typography variant="projectTitle">
                  Key responsibilities and tasks
                </Typography>
              </Box>

              <Stack spacing={2} sx={{ maxWidth: 400 }}>
                {responsibilities.map((item) => (
                  <Box key={item.title} sx={{ color: accent }}>
                    <Box sx={{ height: 30, display: "flex", alignItems: "center" }}>
                      <Typography variant="body1Bold">
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ pt: .5 }}>
                      {item.body}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>


            {/* Column 3 (optional) */}
            {roleNuances && roleNuances.length > 0 && (

              <Box
                sx={{
                  bgcolor: panelBg,
                  borderRadius: { xs: "8px", md: "8px", lg: "8px 0 0 8px" },
                  p: 2.5,
                  width: { xs: "100%", md: "80%" },
                }}
              >
                <Box sx={{ mb: 3, color: textColor }}>
                  <Typography variant="projectTitle">
                    Role nuances
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  {roleNuances.map((text, i) => (
                    <PersonaNuanceItem
                      key={i}
                      text={text}
                      iconSrc={nuanceIconSrc}
                      textColor={accent}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </Box>
        </GridItem>

        {/* Large icon */}
        <Box
          component="img"
          src={nuanceIconSrc}
          alt={name}
          sx={{
            width: "24vh",
            minWidth: 160,
            maxWidth: 300,
            maxHeight: nuanceIconSize,
            height: "auto",
            objectFit: "contain",
            position: "absolute",
            right: 60,
            bottom: -40,
          }}
        />
      </GridLayout>
    </Box>
  );
}

export default function PersonaSection() {
  const [selectedId, setSelectedId] = useState(personas[0]?.id);

  const selectedPersona =
    personas.find((p) => p.id === selectedId) ?? personas[0];
  const [personaIndex, setPersonaIndex] = React.useState(0);
  const totalPages = selectedPersona.pages.length;
  const [pageIndex, setPageIndex] = useState(0);
  const activePage = selectedPersona.pages[pageIndex].id;


  // reset page when persona changes
  React.useEffect(() => {
    setPageIndex(0);
  }, [personaIndex]);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Selector row */}
      <GridLayout>
        <GridItem cols={{ xs: "1/13", md: "2/12", lg: "2/12" }}>
          <PersonaSelector
            personas={personas}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </GridItem>
      </GridLayout>

      {/* Persona detail card */}
      <PersonaPager
        onPrev={() => setPageIndex((p) => Math.max(0, p - 1))}
        onNext={() => setPageIndex((p) => Math.min(totalPages - 1, p + 1))}
        disablePrev={pageIndex === 0}
        disableNext={pageIndex === totalPages - 1}
      >
        {activePage === "overview" && <PersonaCard persona={selectedPersona} />}

        {activePage === "day" && (
          <PersonaDayInLife persona={selectedPersona} />
        )}
      </PersonaPager>
    </Box>
  );
}
