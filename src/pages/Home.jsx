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

// Blob
import BlobHeroCanvas from "../components/BlobHeroCanvas";
import BlobLogo from "../components/BlobLogo";

// Theme
import { useTheme } from "@mui/material/styles";

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
    const [progress, setProgress] = useState(0); // 0 = full hero, 1 = docked
    const [showArrow, setShowArrow] = useState(false);
    const [arrowVisible, setArrowVisible] = useState(false);
    const [arrowLift, setArrowLift] = useState(false);
    const [introVisible, setIntroVisible] = useState(false);
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

    // Theme
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const blobColor = isDark ? "#fff" : "#000";

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

    // How far (px) the user must scroll for the blob transition to complete
    const TRANSITION_HEIGHT = 400;

    // Thin custom arrow SVG
    const arrowColor = isDark ? "#fff" : "#000";
    const ThinArrow = () => (
        <svg
            width="25vh"
            height="25vh"
            viewBox="0 0 24 24"
            fill="none"
            stroke={arrowColor}
            strokeWidth=".25"
        >
            <path d="M12 4v16" />
            <path d="M6 14l6 6 6-6" />
        </svg>
    );

    // Show arrow after 2s, fade it in AFTER it mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowArrow(true);   // mount arrow
            setTimeout(() => {
                setArrowVisible(true); // fade-in after mount
            }, 30);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Handle scroll: update blob progress + hide arrow on first scroll
    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY || window.pageYOffset;
            const p = Math.min(Math.max(y / TRANSITION_HEIGHT, 0), 1); // clamp 0–1
            setProgress(p);

            if (y > 10) {
                setArrowLift(true);
                setArrowVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const collapsed = progress >= 1;

    // When blob finishes docking, reveal intro section
    useEffect(() => {
        if (collapsed) {
            setIntroVisible(true);

            // heading in first
            setIntroTitleVisible(true);

            // body text a bit after
            const t = setTimeout(() => {
                setIntroBodyVisible(true);
            }, 250); // tweak delay to taste

            return () => clearTimeout(t);
        } else {
            // reset if user scrolls back to top
            setIntroVisible(false);
            setIntroTitleVisible(false);
            setIntroBodyVisible(false);
        }
    }, [collapsed]);


    // Compute transform for the hero blob canvas
    // 0 -> centered full-screen, 1 -> shrunk and nudged toward top-left
    const scale = 1 - progress * 0.7; // from 1 to 0.3
    const translateX = -progress * (window.innerWidth / 2 - 48);
    const translateY = -progress * (window.innerHeight / 2 - 48);

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

            {/* Hero blob wrapper with scroll-based transform */}
            {!collapsed && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 1000,

                        /* Prevent transform from collapsing layout calculations */
                        transformOrigin: "center",
                        transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                        willChange: "transform",

                        /* This is CRITICAL */
                        pointerEvents: "none",
                        isolation: "isolate",
                    }}
                >
                    <BlobHeroCanvas active={true} color={blobColor} />
                </Box>
            )}

            {/* Docked logo blob in the upper-left once transition completes */}
            <BlobLogo collapsed={collapsed} />

            {/* Pure hero "space" with just arrow, no overlapping text */}
            <Box
                sx={{
                    minHeight: "100vh",
                    position: "relative",
                }}
            >
                {showArrow && !collapsed && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "1vh", // adjust y-position here
                            left: "50%",
                            zIndex: 5000,
                            pointerEvents: "none",
                            opacity: arrowVisible ? 1 : 0, // fade in AND out
                            transition: "opacity 1.2s ease-out, transform 1.4s ease-out",
                            transform: arrowLift
                                ? "translate(-50%, -150vh)" // arrow flies upward out of viewport
                                : "translate(-50%, 0)", // normal resting position

                        }}
                    >
                        <ThinArrow />
                    </Box>
                )}
            </Box>

            {/* INTRO SECTION */}
            <Box
                id="intro-section"
                sx={{
                    position: "relative",
                    minHeight: "200vh",
                }}
            >
                <Box
                    sx={{
                        position: "sticky",
                        top: "32vh", // where the intro sits while pinned
                        pt: 4,
                        pb: 10,
                        opacity: introVisible ? 1 : 0,
                        transform: introVisible ? "translateY(0)" : "translateY(64px)",
                        transition: "opacity 0.9s ease-out, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    {/* Main content – appears after scroll (no overlap with blob) */}
                    <Container
                        maxWidth="md"
                        sx={{
                            display: "flex",
                            alignContent: "center",
                        }}
                    >
                        <Stack spacing={2} sx={{ mb: 6 }}>
                            {/* Heading - first in */}
                            <Typography
                                variant="h2"
                                sx={{
                                    transform: introTitleVisible ? "translateY(0)" : "translateY(64px)",
                                    opacity: introTitleVisible ? 1 : 0,
                                    transition: "opacity 0.9s ease-out, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            >
                                I design to make a difference,
                            </Typography>

                            {/* Body copy - staggered in after heading */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                    maxWidth: 560,
                                    transform: introBodyVisible ? "translateY(0)" : "translateY(32px)",
                                    opacity: introBodyVisible ? 0.96 : 0,
                                    transition: "opacity 0.8s ease-out 0.05s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.05s",
                                }}
                            >
                                crafting experiences that save lives, welcome every user, earn
                                trust in technology, and bring delight to complexity.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                    maxWidth: 560,
                                    transform: introBodyVisible ? "translateY(0)" : "translateY(32px)",
                                    opacity: introBodyVisible ? 0.96 : 0,
                                    transition: "opacity 0.8s ease-out 0.12s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s",
                                }}
                            >
                                I am a UX/UI Designer with a tactile heart. Rooted in BFA
                                Industrial Design, MA Design Engineering and hands always reaching
                                for clay.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                    maxWidth: 560,
                                    transform: introBodyVisible ? "translateY(0)" : "translateY(32px)",
                                    opacity: introBodyVisible ? 0.96 : 0,
                                    transition: "opacity 0.8s ease-out 0.18s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s",
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


                    {/* Client logo strip – moves with the intro, still pinned */}
                    <Box sx={{ pt: 6 }}>
                        <ClientLogoStrip />
                    </Box>
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
