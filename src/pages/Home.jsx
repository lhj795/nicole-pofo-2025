// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Stack,
    Typography,
    Link,
} from "@mui/material";
import NavBar from "../components/NavBar";
import SmartLogo from "../assets/clients/smart-logo.svg";
import ClientLogoStrip from "../components/ClientLogoStrip";
import ProjectCard from "../components/ProjectCard";

// Project hero images
import img10x from "../assets/project-hero-images/10xHero.png";
import imgAble from "../assets/project-hero-images/AbleHero.png";
import imgAMC from "../assets/project-hero-images/AMCHero.png";
import imgApnimed from "../assets/project-hero-images/ApnimedHero.png";
import imgDXC from "../assets/project-hero-images/DXCHero.png";
import imgInvolv from "../assets/project-hero-images/InvolvHero.png";
import imgLightly from "../assets/project-hero-images/LightlyHero.png";
import imgMarCor from "../assets/project-hero-images/MarCorHero.png";

// Project logos
import logo10x from "../assets/project-hero-images/10xLogo.png";
import logoAble from "../assets/project-hero-images/AbleLogo.png";
import logoAMC from "../assets/project-hero-images/AMCLogo.png";
import logoApnimed from "../assets/project-hero-images/ApnimedLogo.png";
import logoDXC from "../assets/project-hero-images/DXCLogo.png";
import logoInvolv from "../assets/project-hero-images/InvolvLogo.png";
import logoLightly from "../assets/project-hero-images/LightlyLogo.png";
import logoMarCor from "../assets/project-hero-images/MarCorLogo.png";

export default function Home() {
    // INTRO ANIMATION STATE
    const [introTitleVisible, setIntroTitleVisible] = useState(false);
    const [introBodyVisible, setIntroBodyVisible] = useState(false);

    // Trigger staggered animation on mount
    useEffect(() => {
        setIntroTitleVisible(true);
        const t = setTimeout(() => {
            setIntroBodyVisible(true);
        }, 250); // delay before body text rises in
        return () => clearTimeout(t);
    }, []);

    // PROJECT DATA
    const projects = [
        {
            id: "dxc",
            title: "Enterprise AI Workflow Platform",
            description:
                "A unified IT management platform to monitor systems, resolve issues, and surface insights.",
            logoSrc: logoDXC,
            imageSrc: imgDXC,
            bgColor: "#E7D1FF",
            descriptionColor: "#8556B8",
            to: "/dxc",
        },
        {
            id: "apnimed",
            title: "Diagnosis & Monitoring for OSA",
            description:
                "Enabling patients and clinicians to take control of sleep health—anywhere.",
            logoSrc: logoApnimed,
            imageSrc: imgApnimed,
            bgColor: "#C0C1FC",
            descriptionColor: "#6059B5",
            to: "/apnimed",
        },
        {
            id: "marcor",
            title: "Dialysis Water Purification System",
            description:
                "The next generation interface for a life-sustaining medical device.",
            logoSrc: logoMarCor,
            imageSrc: imgMarCor,
            bgColor: "#D5EDFB",
            descriptionColor: "#457593",
            to: "/marcor",
        },
        {
            id: "10x",
            title: "A-Z Recruiting Solution",
            description:
                "Humanizing the hiring journey with workflows that serve people—not just processes.",
            logoSrc: logo10x,
            imageSrc: img10x,
            bgColor: "#B6D4FF",
            descriptionColor: "#356BBA",
            to: "/10xfinders",
        },
        {
            id: "able",
            title: "Brick and Mortar Shopping for All",
            description:
                "A shopping experience that centers accessibility, dignity, and independence for visual impairment.",
            logoSrc: logoAble,
            imageSrc: imgAble,
            bgColor: "#FFD04D",
            descriptionColor: "#886400",
            to: "/able",
        },
        {
            id: "lightly",
            title: "Restoring Collegial Moments in Hybrid Workspace",
            description:
                "Bringing warmth and ease back to hybrid spaces by illuminating and designing smarter meetings.",
            logoSrc: logoLightly,
            imageSrc: imgLightly,
            bgColor: "#FFAB40",
            descriptionColor: "#965400",
            to: "/lightly",
        },
        {
            id: "involv",
            title: "Conscious Commerce with Measurable Impact",
            description:
                "A values-driven shopping platform that aligns consumer values with brands.",
            logoSrc: logoInvolv,
            imageSrc: imgInvolv,
            bgColor: "#D4DBEB",
            descriptionColor: "#616A7F",
            to: "/involv"
        },
        {
            id: "amc",
            title: "Reimagining the Movie-Going Experience",
            description:
                "An end-to-end cinematic journey for true film fanatics.",
            logoSrc: logoAMC,
            imageSrc: imgAMC,
            bgColor: "#CF2541",
            descriptionColor: "#980019",
            to: "/amc"
        },
    ];

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

            {/* INTRO SECTION (no sticky, just animated in on load) */}
            <Box
                id="intro-section"
                sx={{
                    height: "80vh",
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        height: { xs: "calc(100% - 96px)", lg: "calc(100% - 128px)", },
                        pt: 12,
                    }}
                >
                    <Stack spacing={2} sx={{ mb: 6 }}>
                        {/* Heading - first in */}
                        <Typography
                            variant="h2"
                            sx={{
                                transform: introTitleVisible
                                    ? "translateY(0)"
                                    : "translateY(64px)",
                                opacity: introTitleVisible ? 1 : 0,
                                transition:
                                    "opacity 0.9s ease-out, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        >
                            I design to make a difference,
                        </Typography>

                        {/* Body 1 */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                maxWidth: 560,
                                transform: introBodyVisible
                                    ? "translateY(0)"
                                    : "translateY(32px)",
                                opacity: introBodyVisible ? 0.96 : 0,
                                transition:
                                    "opacity 0.8s ease-out 0.05s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.05s",
                            }}
                        >
                            crafting experiences that save lives, welcome every user, earn
                            trust in technology, and bring delight to complexity.
                        </Typography>

                        {/* Body 2 */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                maxWidth: 560,
                                transform: introBodyVisible
                                    ? "translateY(0)"
                                    : "translateY(32px)",
                                opacity: introBodyVisible ? 0.96 : 0,
                                transition:
                                    "opacity 0.8s ease-out 0.12s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s",
                            }}
                        >
                            I am a UX/UI Designer with a tactile heart. Rooted in BFA
                            Industrial Design, MA Design Engineering and hands always reaching
                            for clay.
                        </Typography>

                        {/* Body 3 + Smart logo */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                maxWidth: 560,
                                transform: introBodyVisible
                                    ? "translateY(0)"
                                    : "translateY(32px)",
                                opacity: introBodyVisible ? 0.96 : 0,
                                transition:
                                    "opacity 0.8s ease-out 0.18s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s",
                            }}
                        >
                            UX/UI Designer at{" "}
                            <Link
                                href="https://smartdesignworldwide.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    verticalAlign: "middle",
                                    ml: 0.5,
                                    transition: "opacity 200ms",
                                    opacity: 0.85,
                                    "&:hover": { opacity: 1 },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={SmartLogo}
                                    alt="Smart Design"
                                    sx={{
                                        height: 48,
                                        width: "auto",
                                        display: "block",
                                    }}
                                />
                            </Link>
                        </Typography>
                    </Stack>
                </Container>
                <Box sx={{ py: 3 }}>
                    <ClientLogoStrip />
                </Box>
            </Box>

            {/* PROJECTS SECTION */}
            <Box
                id="projects"
                sx={{
                    py: 10,
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        px: { xs: 2, md: "60px" }, // 16px on mobile, 60px on desktop
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr", // 1 per row on mobile
                                md: "repeat(2, minmax(0, 1fr))", // 2 per row on desktop
                            },
                            gap: 3, // 3 * 8px = 24px row/column gap
                        }}
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                logoSrc={project.logoSrc}
                                imageSrc={project.imageSrc}
                                bgColor={project.bgColor}
                                descriptionColor={project.descriptionColor}
                                to={project.to}
                            />
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
