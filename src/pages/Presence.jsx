// src/pages/Presence.jsx
import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import PresencePhotoCollage from "../components/PresencePhotoCollage";

export default function Presence() {
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
            <NavBar />

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
                                        About Nicole
                                    </Typography>
                                    </Box>
                                <Box sx={makeSectionStyle("tldr")}>
                                    <Typography variant="h4" sx={{ mb: 2 }}>
                                        Here&apos;s my TLDR
                                    </Typography>
                                    <Typography variant="body1">
                                        I&apos;ve led and shipped over a dozen digital products that have scaled and made a
                                        real difference. I work hand-in-hand with researchers, developers, engineers, and
                                        stakeholders to translate insights into design. With a background in ID and DE, I
                                        thrive in multidisciplinary teams where thoughtful collaboration turns complexity
                                        into clarity.
                                    </Typography>
                                </Box>

                                <Box sx={makeSectionStyle("outside")}>
                                    <Typography variant="h4" sx={{ mb: 2 }}>
                                        Outside of work 🌊
                                    </Typography>
                                    <Typography variant="body1">
                                        I love to get my hands dirty with clay. I find comfort in the tactile practice of
                                        pottery. Rhythm, repetition and presence, a reminder to slow down and trust the flow
                                        of making. You&apos;ll also find me at sunset yogas, or on hot designer walks at the beach!
                                    </Typography>
                                </Box>

                                <Box sx={makeSectionStyle("bestPart")}>
                                    <Typography variant="h4" sx={{ mb: 2 }}>
                                        You are the best part 🫵
                                    </Typography>
                                    <Typography variant="body1">
                                        I work best with people, not just pixels. My fav moments often happen off-screen.
                                        Sketch sessions with design colleagues, white-boarding with researchers, solving
                                        real edge cases with engineers, and helping junior designers grow into their strengths.
                                        I care just as much about how we work together as what we ship. My teammates say I
                                        bring curiosity into the room.
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
