import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function ProjectCard({
    title,
    description,
    logoSrc,
    imageSrc,
    to,
    bgColor = "#f0f0f0",
    descriptionColor = "rgba(0,0,0,0.5)",   // DEFAULT VALUE
}) {

    const resetCursorMode = () =>
        window.dispatchEvent(new CustomEvent("cursor-mode", { detail: "default" }));

    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Link
            to={to}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={resetCursorMode}
        >
            <Box
                onMouseEnter={() =>
                    window.dispatchEvent(
                        new CustomEvent("cursor-mode", {
                            detail: { mode: "caseStudy", label: "View case study" },
                        })
                    )
                }
                onMouseLeave={() =>
                    resetCursorMode()
                }
                sx={{

                    position: "relative",
                    width: "100%",
                    display: "block",
                    overflow: "hidden",
                    minHeight: 300,
                    height: "fit-content",
                    cursor: "pointer",

                    // Hover behavior on DESKTOP:
                    "&:hover .ProjectCard-overlayBg": {
                        opacity: { md: 1 },      // background appears instantly
                    },
                    "&:hover .ProjectCard-logo": {
                        opacity: { md: 1 },
                        transform: { md: "translateY(0)" },
                    },
                    "&:hover .ProjectCard-title": {
                        opacity: { md: 1 },
                        transform: { md: "translateY(0)" },
                    },
                    "&:hover .ProjectCard-description": {
                        opacity: { md: 1 },
                        transform: { md: "translateY(0)" },
                    },

                }}
            >
                {/* IMAGE LAYER */}
                {imageSrc && (
                    <Box
                        component="img"
                        src={imageSrc}
                        alt={title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            bgcolor: bgColor,
                            borderRadius: 0.75,
                        }}
                    />
                )}

                {/* OVERLAY */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" },
                        inset: 0,
                        display: "flex",
                        alignItems: "flex-end",
                        py: { xs: 2, md: 3 },
                        px: { xs: 0, md: 3 },
                        pointerEvents: "none",   // card itself handles hover/click
                    }}
                >
                    {/* Blend background layer */}
                    <Box
                        className="ProjectCard-overlayBg"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: 0.75,
                            border: { xs: "none", md: "1px solid white" },
                            backgroundColor: { xs: "none", md: "#979797" },
                            backdropFilter: { xs: "none", md: "blur(8px)" },
                            mixBlendMode: isDark ? "multiply" : "screen",
                            opacity: { xs: 1, md: 0 },     // visible by default on mobile, hidden on desktop
                            transition: "opacity 0.35s ease-out",
                            zIndex: 0,
                        }}
                    />

                    {/* Content layer */}
                    <Stack
                        spacing={1}
                        sx={{
                            alignItems: "flex-start",
                            width: "100%",
                            position: "relative",
                            zIndex: 1,
                            pointerEvents: "auto",
                        }}
                    >

                        {logoSrc && (
                            <Box
                                component="img"
                                src={logoSrc}
                                alt={`${title} logo`}
                                className="ProjectCard-logo"
                                sx={{
                                    maxWidth: 120,
                                    height: 36,
                                    objectFit: "contain",
                                    display: "block",
                                    opacity: { xs: 1, md: 0 },           // hidden on desktop
                                    transform: {
                                        xs: "translateY(0)",
                                        md: "translateY(10px)",           // subtle downward offset
                                    },
                                    transition: {
                                        md: "opacity 0.3s ease-out 0s, transform 0.3s ease-out 0s",
                                    },
                                }}
                            />
                        )}

                        {/* Title: dissolves + moves up first on desktop */}
                        <Typography
                            className="ProjectCard-title"
                            variant="h6Roman"
                            sx={{
                                color: "text.primary",
                                width: "100%",
                                opacity: { xs: 1, md: 0 },
                                transform: {
                                    xs: "translateY(0)",
                                    md: "translateY(8px)",
                                },
                                transition: {
                                    md: "opacity 0.35s ease-out 0s, transform 0.35s ease-out 0s",
                                },
                            }}
                        >
                            {title}
                        </Typography>

                        {/* Description: staggered after title */}
                        <Typography
                            className="ProjectCard-description"
                            variant="body1"
                            sx={{
                                color: descriptionColor,
                                // maxWidth: 360,
                                width: "100%",
                                opacity: { xs: 1, md: 0 },
                                transform: {
                                    xs: "translateY(0)",
                                    md: "translateY(10px)",
                                },
                                transition: {
                                    md: "opacity 0.4s ease-out 0.1s, transform 0.4s ease-out 0.1s",
                                },
                            }}
                        >
                            {description}
                        </Typography>

                    </Stack>
                </Box>
            </Box>
        </Link>
    );
}
