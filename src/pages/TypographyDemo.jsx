import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";

function TypeRow({ label, variant, note, children }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
        gap: 2,
        alignItems: "baseline",
      }}
    >
      <Box>
        <Typography
          variant="caption"
          sx={{ textTransform: "uppercase", letterSpacing: 1.2, opacity: 0.7 }}
        >
          {label}
        </Typography>
        {variant && (
          <Typography
            variant="caption"
            sx={{ display: "block", opacity: 0.6 }}
          >
            {variant}
          </Typography>
        )}
        {note && (
          <Typography
            variant="caption"
            sx={{ display: "block", opacity: 0.6, mt: 0.5 }}
          >
            {note}
          </Typography>
        )}
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Page heading */}
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 4 }}>
            Design system preview
          </Typography>
          <Typography variant="h2">Typography and buttons</Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 540 }}
          >
            This page previews your current type scale based on a 16 px base and
            an augmented fourth ratio. Display and headings use Light, body and
            UI text use Roman and Medium.
          </Typography>
        </Stack>

        <Divider sx={{ mb: 4 }} />

        {/* Typography section */}
        <Stack spacing={3}>
          <TypeRow
            label="Display"
            variant="display"
            note="Display Light, 90.44 px"
          >
            <Typography variant="display">Nicole Lee</Typography>
          </TypeRow>

          <TypeRow
            label="Heading 1"
            variant="h1"
            note="Display Light, 52.44 px"
          >
            <Typography variant="h1">
              Selected work and case studies
            </Typography>
          </TypeRow>

          <TypeRow
            label="Heading 2"
            variant="h2"
            note="Display Light, 45.96 px"
          >
            <Typography variant="h2">
              Designing calm experiences for complex systems
            </Typography>
          </TypeRow>

          <TypeRow
            label="Heading 3"
            variant="h3"
            note="Display Light, 35.30 px"
          >
            <Typography variant="h3">
              Section subheading or card title
            </Typography>
          </TypeRow>

          <TypeRow
            label="Heading 4"
            variant="h4"
            note="Display Light, 30.94 px"
          >
            <Typography variant="h4">
              Supporting subheading for project sections
            </Typography>
          </TypeRow>

          <TypeRow
            label="Project title"
            variant="h6"
            note="Display Light, 22.62 px"
          >
            <Typography variant="h6">
              Heading for project sections
            </Typography>
          </TypeRow>

          <TypeRow
            label="Body 1"
            variant="body1"
            note="Text Roman, 16 px"
          >
            <Typography variant="body1">
              This is body text. It is meant for case study narratives, project
              context, and descriptions of your role. The goal is to feel
              comfortable to read in paragraphs while still feeling precise and
              editorial.
            </Typography>
          </TypeRow>

          <TypeRow
            label="Body 2"
            variant="body2"
            note="Text Roman, ~14 px"
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This is secondary body text. It works well for captions,
              secondary descriptions on cards, timelines, or meta information
              that should sit a bit quieter than the main copy.
            </Typography>
          </TypeRow>

          <TypeRow
            label="Subtitle 1"
            variant="subtitle1"
            note="Text Medium, ~20.83 px"
          >
            <Typography variant="subtitle1">
              Subtitle 1 is useful for section intros and pull quotes.
            </Typography>
          </TypeRow>

          <TypeRow
            label="Subtitle 2"
            variant="subtitle2"
            note="Text Medium, ~18.26 px"
          >
            <Typography variant="subtitle2">
              Subtitle 2 works well for card headings and smaller labels that
              still need a bit of emphasis.
            </Typography>
          </TypeRow>

          <TypeRow
            label="Caption"
            variant="caption"
            note="Text Roman, 13.46 px"
          >
            <Typography variant="caption">
              Caption text for image notes, role labels, and small details.
            </Typography>
          </TypeRow>

          <TypeRow
            label="Overline"
            variant="overline"
            note="Text Medium, uppercase label"
          >
            <Typography variant="overline">
              Case study · Healthcare
            </Typography>
          </TypeRow>
        </Stack>

        <Divider sx={{ my: 4 }} />

        {/* Buttons section */}
        <Stack spacing={2}>
          <Typography variant="h3">Buttons</Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained" size="medium">
              Primary contained
            </Button>
            <Button variant="outlined" size="medium">
              Outlined
            </Button>
            <Button variant="text" size="medium">
              Text button
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained" size="small">
              Small contained
            </Button>
            <Button variant="outlined" size="small">
              Small outlined
            </Button>
          </Stack>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 480 }}
          >
            Buttons currently use Text Medium and rounded corners from the
            theme. Next we will add custom variants for nav, hero, and ghost
            buttons so you can call them semantically instead of styling each
            one by hand.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
