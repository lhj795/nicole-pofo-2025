import { Box, Typography } from "@mui/material";
import { GridLayout, GridItem } from "../../GridLayout";
import WbTwilight from "@mui/icons-material/WbTwilight";
import Bedtime from "@mui/icons-material/Bedtime";

export default function PersonaDayInLife({ persona, personaBg }) {
  return (
    <Box
      sx={{
        mt: 3,
        bgcolor: persona?.cardBg,
        borderRadius: "12px",
      }}
    >
      <GridLayout
        py={4}
        px={4}
        gapY={3}
        mt={3}
        sx={{
          bgcolor: "#FCFCFC",
          borderRadius: "8px",
          mb: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GridItem cols={"1/13"} sx={{ pb: 2, borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h2" sx={{ width: "fit-content" }}>
              A day in <br /> {persona?.name}'s life
            </Typography>
            <Box
              sx={{ 
                width: "40%",
                height: "-webkit-fill-available",
                display: "flex",
                alignItems: "center",
                p: 2,
                bgcolor: persona?.panelBg,
                borderRadius: "4px",
              }}
            > 
            <Typography variant="body1">
              {persona?.dayDescription}
            </Typography>
            </Box>
          </Box>
        </GridItem>
        <GridItem cols={"1/13"}>
          <Box 
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mb: 1.5,
          }}
          >
            <Box sx={{display: "flex", gap: 1}}>
              <WbTwilight/>
              <Typography variant="subtitle1">Morning</Typography>
            </Box>
            <Box sx={{display: "flex", gap: 1}}>
              <Typography variant="subtitle1">End of day</Typography>
              <Bedtime/>
            </Box>
            </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* Replace these boxes with your real “cards” + icons + images */}
            {[
              "Review critical system alerts for my customers and check overnight performance reports.",
              "Sift through internal and external comm channels to find important inquiries.",
              "Daily stand-up with teams to see delivery progress using Jira, OneNote, and Teams.",
              "Attend a meeting to provide solution and pricing support for a new deal with cost estimates prepared with Pace.",
              "Collect KPIs data from PowerBI - incident, changes, success and SLA metrics for an upcoming performance report.",
              "Join a vendor call to discuss compliance updates and contract renewals using client SLA documents.",
              "Manually update documentation in ESL/CMDB for a data center migration project.",
            ].map((text) => (
              <Box
                sx={{
                  bgcolor: persona?.personaBg,
                  borderRadius: "4px",
                  p: 1,
                  minHeight: 140,
                  flex: 1,
                }}
              >
                <Typography variant="body2">{text}</Typography>
              </Box>
            ))}
          </Box>
        </GridItem>
      </GridLayout>
    </Box>
  );
}
