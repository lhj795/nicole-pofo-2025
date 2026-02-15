// src/pages/Presence.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import PresencePhotoCollage from "../components/PresencePhotoCollage";
import BlobLogo from "../components/BlobLogo";
import { useLocalization } from "../il8n/LocalizationProvider";

export default function Presence({language, onToggleLanguage}) {
    const { t } = useLocalization();

    // simple staggered visibility for sections
    const [visible, setVisible] = useState({
        about: false,
        tldr: false,
        outside: false,
        bestPart: false,
    });

    useEffect(() => {
        const timeouts = [
            setTimeout(
                () => setVisible((v) => ({ ...v, about: true })),
                0
            ),
            setTimeout(
                () => setVisible((v) => ({ ...v, tldr: true })),
                220
            ),
            setTimeout(
                () => setVisible((v) => ({ ...v, outside: true })),
                440
            ),
            setTimeout(
                () => setVisible((v) => ({ ...v, bestPart: true })),
                660
            ),
        ];
        return () => timeouts.forEach(clearTimeout);
    }, []);

    const makeSectionStyle = (key) => ({
        transform: visible[key] ? "translateY(0)" : "translateY(32px)",
        opacity: visible[key] ? 1 : 0,
        transition:
            "opacity 0.7s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    });

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "background.default",
                color: "text.primary",
                position: "relative",
            }}
        >
            <NavBar onToggleLanguage={onToggleLanguage} />
            <BlobLogo collapsed />

            <Box
                sx={{
                    pt: { xs: 10, md: 14 }, // clears navbar
                    pb: { xs: 8, md: 12 },
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        px: { xs: 2, md: 4 },
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(12, minmax(0, 1fr))",
                            },
                            columnGap: { xs: 0, md: 3 },
                            rowGap: { xs: 6, md: 0 },
                            alignItems: "center",

                        }}
                    >
                        {/* Text block: left 6 columns on desktop, full-width on mobile */}
                        <Box
                            sx={{
                                gridColumn: { xs: "1 / -1", md: "2 / span 4" }, // col 2–5 on desktop
                                gridRow: { xs: 2, md: "auto" },                  // mobile: second row
                                height: { xs: "fit-content", md: "100vh" },
                                overflow: { xs: null, md: "hidden" },
                            }}
                        >
                            {/* keep your existing Stack + sections here */}
                            <Stack spacing={4}>
                                <Box sx={makeSectionStyle("about")}>
                                <Typography variant="h2" sx={{ mb: 1 }}>
                                        {t("presence.aboutTitle")}
                                    </Typography>
                                    </Box>
                                <Box sx={makeSectionStyle("tldr")}>
                                    <Typography variant="h4" sx={{ mb: 2 }}>
                                        {t("presence.tldrTitle")}
                                    </Typography>
                                    <Typography variant="body1">
                                        {t("presence.tldrBody")}
                                    </Typography>
                                </Box>

                                <Box sx={makeSectionStyle("outside")}>
                                    <Typography variant="h4" sx={{ mb: 2 }}>
                                        {t("presence.outsideTitle")}
                                    </Typography>
                                    <Typography variant="body1">
                                        {t("presence.outsideBody")}
                                    </Typography>
                                </Box>

                                <Box sx={makeSectionStyle("bestPart")}>
                                    <Typography variant="h4" sx={{ mb: 2 }}>
                                        {t("presence.bestPartTitle")}
                                    </Typography>
                                    <Typography variant="body1">
                                        {t("presence.bestPartBody")}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        {/* Collage block: right 6 columns on desktop, top on mobile */}
                        <Box
                            sx={{
                                gridColumn: { xs: "1 / -1", md: "7 / span 6" },
                                order: { xs: 1, md: 2 }, // mobile: images on top
                                maxHeight: "100vh",        // full viewport height
                                height: { xs: "none", md: "100vh" },
                            }}
                        >
                            <Box
                                sx={{
                                    gridColumn: { xs: "1 / -1", md: "7 / span 6" },
                                    gridRow: { xs: 1, md: "auto" },
                                    position: "relative",
                                    width: "100%",
                                }}
                            >
                                <PresencePhotoCollage />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
