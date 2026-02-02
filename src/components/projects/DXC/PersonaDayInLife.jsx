import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GridLayout, GridItem } from "../../GridLayout";
import WbTwilight from "@mui/icons-material/WbTwilight";
import Bedtime from "@mui/icons-material/Bedtime";

function RichText({ segments, variant = "body2" }) {
  return (
    <Typography variant={variant} component="p">
      {segments.map((seg, i) => (
        <Box
          key={i}
          component="span"
          sx={{ fontWeight: seg.bold ? 600 : 400 }}
        >
          {seg.content}
        </Box>
      ))}
    </Typography>
  );
}


export default function PersonaDayInLife({ persona }) {
  const day = persona?.day ?? {};
  const description = day.dayDescription ?? {};
  const tasks = day.tasks ?? [];
  const theme = useTheme();
  const mode = theme.palette.mode;
  const c = persona?.colors?.[mode] ?? persona?.colors?.light ?? {};
  const personaBg = c.personaBg ?? persona?.personaBg;
  const panelBg = c.panelBg ?? persona?.panelBg;
  const accent = c.accent ?? persona?.accent;

  return (
    <Box
      sx={{
        bgcolor: persona?.cardBg,
        border: `1px solid ${personaBg}`,
        borderRadius: "12px",
        color: persona?.textColor,
      }}
    >
      <GridLayout
        px={{ xs: 3, md: 4 }}
        py={{ xs: 3, md: 4 }}
        gapY={3}
      >
        <GridItem cols={"1/13"} sx={{ pb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 3 },
            }}
          >

            {/* Left */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, md: 0 },
                width: "100%",
              }}
            >
              <Typography variant="h3">
                A day in life of
              </Typography>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Box
                  component="img"
                  src={persona?.nuanceIconSrc}
                  alt={persona?.name}
                  sx={{
                    height: { xs: "2rem", md: "2.5rem" },
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.21rem", md: "2.87rem" }
                  }}
                >
                  {persona?.name}
                </Typography>
              </Box>
            </Box>

            {/* Right */}
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                height: "-webkit-fill-available",
                display: "flex",
                alignItems: "center",
                p: { xs: 0, md: 2 },
                bgcolor: { xs: persona?.cardBg, md: panelBg },
                borderRadius: "8px",
              }}
            >
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {description}
              </Typography>
            </Box>
          </Box>
        </GridItem>

        {/* Content */}
        <GridItem cols={"1/13"}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mb: 1.5,
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <WbTwilight sx={{ color: accent }} />
                <Typography variant="subtitle1">Morning</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography variant="subtitle1">End of day</Typography>
                <Bedtime sx={{ color: accent }} />
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${tasks.length}, minmax(0, 1fr))`,
                gap: 1,
                alignItems: "stretch",
              }}
            >
              {/* Tasks row */}
              {tasks.map((t, idx) => (
                <Box
                  key={`card-${idx}`}
                  sx={{
                    bgcolor: panelBg,
                    borderRadius: "6px",
                    p: 1.5,
                  }}
                >
                  <RichText segments={t.text} />
                </Box>
              ))}

              {/* Quotes row */}
              {tasks.map((t, idx) => (
                <Box key={`quote-${idx}`} sx={{ px: 0.5 }}>
                  {t.quote ? (
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, fontStyle: "italic", opacity: 0.7 }}
                    >
                      “{t.quote}”
                    </Typography>
                  ) : (
                    <Box sx={{ mt: 1, minHeight: 0 }} />
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Mobile content */}
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 2 }}>

            {/* Morning night */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignSelf: "stretch",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "center" }}>
                <WbTwilight sx={{ color: accent }} />
                <Typography variant="subtitle2" sx={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                  Morning
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "center" }}>
                <Typography variant="subtitle2" sx={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                  End of day
                </Typography>
                <Bedtime sx={{ color: accent }} />
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
              {tasks.map((t, idx) => (
                <Box
                  key={`xs-task-${idx}`}
                  sx={{
                    bgcolor: panelBg,
                    borderRadius: "6px",
                    p: 1.5,
                  }}
                >
                  <RichText segments={t.text} />

                  {t.quote && (
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1.25,
                        fontStyle: "italic",
                        opacity: 0.7,
                      }}
                    >
                      “{t.quote}”
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </GridItem>

      </GridLayout>
    </Box>
  );
}
