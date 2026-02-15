import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CursorLink from "../../components/CursorLink";
import NavBar from "../../components/NavBar";
import { GridLayout, GridItem } from "../../components/GridLayout";
import { ProjectHero } from "../../components/projects/ProjectHero";
import { ProjectIntro } from "../../components/projects/ProjectIntro";
import { FourByFourLayout } from "../../components/projects/FourByFourLayout";
import { DesignProcessSection, ProcessTrack } from "../../components/projects/DesignProcessSection";
import { loadMedia } from "../../utils/loadMedia";

const marcor = loadMedia("marcor");

const MarcorPage = () => {

    const marcorTheme = {
        light: {
            heroBg: "#D8DDE0",
            designProcessBg: "#00416A",
            designProcessTitle: "#00416A",
            activityBg: "#F7971D",
        },
        dark: {
            heroBg: "#29333B",
            designProcessBg: "#00416A",
            designProcessForeground: "#E6E8EB",
            activityBg: "#b86800ff",
        },
    };

    const theme = useTheme();
    const mode = theme.palette.mode;
    const C = marcorTheme[mode];

    return (
        <Box
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
                maxWidth: "100vw",
                overflowX: "hidden",
                pb: { xs: 8, md: 12 },
            }}
        >

            <NavBar />

            <ProjectHero
                bgColor={C.heroBg}
                foreground="text.primary"
                title={
                    <Box
                        component="img"
                        src={marcor("MarcorLogo.svg")}
                        alt="MarCor Logo"
                        sx={{ height: "2rem", display: "block", }}
                    />
                }
                subtitle="Next Generation Dialysis Water Filtration and Purification System"
                media={
                    <Box
                        sx={{
                            display: "flex",
                            pt: 5,
                            pb: { xs: 5, md: 5, lg: 0 },
                            overflow: "visible",
                            alignItems: "center",
                            justifyContent: {xs: "flex-start", md: "center"},
                        }}
                    >
                        <Box
                            component="img"
                            src={marcor("Cover.png")}
                            alt="MarCor water purification system illustration"
                            sx={{
                                width: "auto",
                                height: { xs: "40vh", md: "80%", lg: "100%" },
                                maxHeight: "48vh",
                                objectFit: "cover",
                                overflow: "visible",
                            }}
                        />
                    </Box>
                }
                titleCols={{ xs: "1 / 13", md: "2 / 12", lg: "3/6" }}
                imgCols={{ xs: "1 / 13", md: "3/11", lg: "6 / 12" }}
                swapOnMobile={true}
                metaItems={[
                    {
                        label: "Role",
                        value:
                            "Lead UX/UI Designer",
                        cols: { xs: "1 / 13", md: "2 / 7", lg: "3/5" },
                    },
                    {
                        label: "Tools",
                        value: "Figma, Adobe Suite",
                        cols: { xs: "1 / 13", md: "7/12", lg: "5 / 7" },
                    },
                ]}
            />

            <ProjectIntro
                leftBody={
                    <>
                        Mar Cor is a leading brand in water purification, specializing in products and services for the hemodialysis and renal markets, offering innovative, high-quality solutions for optimal water treatment through reverse osmosis (RO) and electrodeionization (EDI). Mar Cor requested my team to design the next gen water treatment system for use in dialysis centers and hospitals in the US.
                    </>
                }
                rightBody={
                    <>
                        I was the lead UX/UI designer to detail the digital experience of the main system and remote station's user interface, and define the design system for the UI leveraging the client's branding.
                    </>
                }
            />

            <DesignProcessSection
                bgColor={C.designProcessBg}
                titleColor={C.designProcessTitle}
                foreground={C.designProcessForeground}
                diagram={
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: { xs: "flex-start", md: "space-between" },
                            width: "100%",
                            gap: 3,
                        }}
                    >
                        <ProcessTrack
                            steps={["UX Research", "Market Study"]}
                            foreground={C.designProcessForeground}
                            activityBg={C.activityBg}
                        />
                        <ProcessTrack
                            steps={["Ideation", "Validation"]}
                            foreground={C.designProcessForeground}
                            activityBg={C.activityBg}
                        />
                        <ProcessTrack
                            steps={["Iteration", "Testing"]}
                            foreground={C.designProcessForeground}
                            activityBg={C.activityBg}
                        />
                    </Box>
                }
                phases={[
                    {
                        title: "Learning",
                        body:
                            "In-depth-interviews with workers from various work settings, market research of existing products and tech.",
                    },
                    {
                        title: "Concept",
                        body:
                            "Using data-driven insights to formulate potential directions, co-creation and concept testing with users.",
                    },
                    {
                        title: "Prototype",
                        body:
                            "Prototyping MVP based on research, testing for usability and effectiveness, then reiteration until final prototype.",
                    },
                ]}
            />

        </Box >
    );
};

export default MarcorPage;
