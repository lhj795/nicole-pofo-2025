import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavBar from "../../components/NavBar";
import { GridLayout, GridItem } from "../../components/GridLayout";
import { ProjectHero } from "../../components/projects/ProjectHero";
import { ProjectIntro } from "../../components/projects/ProjectIntro";
import { FourByFourLayout } from "../../components/projects/FourByFourLayout";
import { DesignProcessSection, ProcessTrack } from "../../components/projects/DesignProcessSection";
import { loadMedia } from "../../utils/loadMedia";
import { useLocalization } from "../../il8n/LocalizationProvider";

const marcor = loadMedia("marcor");

const MarcorPage = ({ onToggleLanguage }) => {
    const { t } = useLocalization();

    const marcorTheme = {
        light: {
            heroBg: "#D8DDE0",
            designProcessBg: "#00416A",
            designProcessTitle: "#00416A",
            designProcessForeground: "#f1f3f6",
        },
        dark: {
            heroBg: "#2c4050ff",
            designProcessBg: "#00416A",
            designProcessTitle: "#49aae7",
            designProcessForeground: "#f1f3f6",
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

            <NavBar onToggleLanguage={onToggleLanguage} />

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
                subtitle={t("marcor.projectHero.subtitle")}
                media={
                    <Box
                        sx={{
                            display: "flex",
                            pt: 5,
                            pb: { xs: 5, md: 5, lg: 0 },
                            overflow: "visible",
                            alignItems: "center",
                            justifyContent: { xs: "flex-start", md: "center" },
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
                        label: t("marcor.projectHero.det1"),
                        value: t("marcor.projectHero.desc1"),
                        cols: { xs: "1 / 13", md: "2 / 7", lg: "3/5" },
                    },
                    {
                        label: t("marcor.projectHero.det2"),
                        value: t("marcor.projectHero.desc2"),
                        cols: { xs: "1 / 13", md: "7/12", lg: "5 / 7" },
                    },
                ]}
            />

            <ProjectIntro
                leftBody={t("marcor.projectIntro.left")}
                rightBody={t("marcor.projectIntro.right")}
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
                            steps={[t("marcor.designProcess.track1"), t("marcor.designProcess.track2")]}
                            foreground={C.designProcessForeground}
                        />
                        <ProcessTrack
                            steps={[t("marcor.designProcess.track3"), t("marcor.designProcess.track4")]}
                            foreground={C.designProcessForeground}
                        />
                        <ProcessTrack
                            steps={[t("marcor.designProcess.track5"), t("marcor.designProcess.track6")]}
                            foreground={C.designProcessForeground}
                        />
                    </Box>
                }
                phases={[
                    {
                        title: t("marcor.designProcess.phase1"),
                        body: t("marcor.designProcess.desc1"),
                    },
                    {
                        title: t("marcor.designProcess.phase2"),
                        body: t("marcor.designProcess.desc2"),
                    },
                    {
                        title: t("marcor.designProcess.phase3"),
                        body: t("marcor.designProcess.desc3"),
                    },
                ]}
            />

            {/* Product Audit Intro */}
            <GridLayout gapY={0} py={6}>
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                    <Typography variant="h1" sx={{ height: 42 }}>
                        {t("marcor.productAudit.title")}
                    </Typography>
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/7" }}>
                    <Box
                        component="img"
                        src={marcor("PA1.png")}
                        alt="Screenshots of the legacy generation UI"
                        sx={{ width: "100%" }}
                    />
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }} sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 2, justifyContent: "center" }}>
                    <Typography variant="body1">
                        {t("marcor.productAudit.body1")}
                    </Typography>
                    <Typography variant="h6Bold">
                        {t("marcor.productAudit.body2")}
                    </Typography>
                    <Typography variant="body1">
                        {t("marcor.productAudit.body3")}{" "}
                    </Typography>
                    <Typography variant="body1Bold">
                        {t("marcor.productAudit.body3Bold")}
                    </Typography>
                </GridItem>
            </GridLayout>

            {/* Product Audit - IA */}
            <GridLayout gapY={3} gapX={4} py={3} pb={6}>
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                    <Box
                        component="img"
                        src={marcor("PA2.png")}
                        alt="Information architecture of legacy generation UI."
                        sx={{ width: "100%" }}
                    />
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/7"}}>
                    <Typography variant="h6Bold">1.</Typography>
                    <Typography variant="body1">
                        {t("marcor.productAudit.issue1")}
                    </Typography>
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }}>
                    <Box
                        component="img"
                        src={marcor("PA3.png")}
                        alt="Legacy IA diagram showing too many features."
                        sx={{ width: "100%" }}
                    />
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/7"}}>
                    <Typography variant="h6Bold">2.</Typography>
                    <Typography variant="body1">
                        {t("marcor.productAudit.issue2")}
                    </Typography>
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }}>
                    <Box
                        component="img"
                        src={marcor("PA4.png")}
                        alt="Legacy IA diagram showing 5 layers of inforamtion levels."
                        sx={{ width: "100%" }}
                    />
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/7"}}>
                    <Typography variant="h6Bold">3.</Typography>
                    <Typography variant="body1">
                        {t("marcor.productAudit.issue3")}
                    </Typography>
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }}>
                    <Box
                        component="img"
                        src={marcor("PA5.png")}
                        alt="Grouping and simplified data shown on a diagram of the suggested IA."
                        sx={{ width: "100%" }}
                    />
                </GridItem>
            </GridLayout>

        </Box >
    );
};

export default MarcorPage;
