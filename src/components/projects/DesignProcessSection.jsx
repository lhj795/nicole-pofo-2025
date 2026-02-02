import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { GridLayout, GridItem } from "../GridLayout"; // adjust path if needed

export function ProcessTrack({
    steps,
    foreground = "#000",
    activityBg = "rgba(255,255,255,0.1)",
    sx,
}) {

    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-flex",
                flexGrow: 1,
                border: `1px solid ${foreground}`,
                p: 1.5,
                gap: 1,
                ...sx,
            }}
        >
            {steps.map((step) => (
                <Box
                    key={step}
                    sx={{
                        backgroundColor: activityBg,
                        px: 2,
                        py: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 1,
                        minWidth: 120,
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: foreground,
                            opacity: 0.75,
                            textAlign: "center",
                        }}
                    >
                        {step}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

// Main reusable section
export function DesignProcessSection({
    id,
    bgColor,
    foreground,
    // diagram is a React node where you compose ProcessTrack rows
    diagram,
    // bottom row content
    phases = [], // [{ title, body }],
    descColor,
    titleColor,
}) {
    return (
        <Box
            id={id}
            sx={{ py: { xs: 6, md: 12 } }}
        >

            {/* DESIGN PROCESS */}
            <GridLayout py={0}>
                <GridItem
                    cols={{ xs: "1 / 13", md: "2 / 12", lg: '3/11' }}
                    sx={{width: "100%",}}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: titleColor,
                            textTransform: "uppercase",
                            fontWeight: { xs: 400, md: 200 },
                            textBoxEdge: "cap alphabetic",
                            textBoxTrim: "trim-both",
                            width: "100%",
                        }}
                    >
                        Design Process
                    </Typography>
                </GridItem>
            </GridLayout>

            {/* Color Container */}
            <Box
                sx={{
                    bgcolor: bgColor,
                    color: "common.white",
                    py: 6,
                    minHeight: "36vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <GridLayout py={0}>
                    <GridItem 
                    cols={{ xs: "1 / 13", md: "2 / 12", lg: '3/11' }}s>

                        {/* Diagram / ProcessTrack */}
                        {diagram && (
                            <Box
                                sx={{
                                    mb: 2.5,
                                    width: "100%",
                                    display: { xs: "none", md: "block" },
                                }}
                            >
                                {diagram}
                            </Box>
                        )}

                        {/* Bottom text columns */}
                        {phases.length > 0 && (
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={3}
                            >
                                {phases.map((phase) => (
                                    <Box key={phase.title} sx={{ flex: 1, }}>
                                        <Typography
                                            variant="body1Bold"
                                            sx={{ color: foreground }}
                                        >
                                            {phase.title}
                                        </Typography>
                                        <Typography component="div" variant="body1">
                                            {phase.body.split("\n").map((line, i) => (
                                                <Typography
                                                    key={i}
                                                    variant="body1"
                                                    sx={{ 
                                                        display: "block",
                                                        color: descColor, 
                                                        pt: 0.75 }}   // spacing between breaks
                                                >
                                                    {line}
                                                </Typography>
                                            ))}
                                        </Typography>


                                    </Box>
                                ))}
                            </Stack>
                        )}
                    </GridItem>
                </GridLayout>
            </Box>
        </Box >
    );
}
