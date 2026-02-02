import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GridLayout, GridItem } from "../../GridLayout";

function PersonaProgressRow({ label, value, thumbColor, trackColor, textColor }) {
    return (
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ width: "100%", color: textColor }}
        >
            <Typography variant="body2" sx={{ width: 72 }}>
                {label}
            </Typography>
            <Box
                sx={{
                    flex: 1,
                    height: 6,
                    borderRadius: 999,
                    bgcolor: trackColor,
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        width: `${value}%`,
                        height: "100%",
                        bgcolor: thumbColor,
                    }}
                />
            </Box>
        </Stack>
    );
}

function PersonaNuanceItem({ text, iconSrc, textColor }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "flex-start" }}>
            <Box
                component="img"
                src={iconSrc}
                alt=""
                aria-hidden="true"
                sx={{ width: 30, height: 30, flexShrink: 0, filter: "drop-shadow(0 0 0 transparent)" }}
            />
            <Typography variant="body1" sx={{ color: textColor }}>
                {text}
            </Typography>
        </Box>
    );
}

export default function PersonaOverview({ persona }) {
    const overview = persona?.overview ?? {};
    const theme = useTheme();
    const mode = theme.palette.mode;
    const c = persona?.colors?.[mode] ?? persona?.colors?.light ?? {};
    const {
        description,
        roleBars = [],
        responsibilities = [],
        roleNuances = [],
        nuanceIconSize = 160,
        company,
    } = overview;
    const {
        name,
        textColor = "#000",
        nuanceIconSrc,
        avatarSrc,
    } = persona ?? {};
    const personaBg = c.personaBg ?? persona?.personaBg;
    const panelBg = c.panelBg ?? persona?.panelBg;
    const accent = c.accent ?? persona?.accent;

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                bgcolor: persona?.cardBg,
                borderRadius: "12px",
                color: persona?.textColor,
                border: `1px solid ${personaBg}`,
            }}
        >
            <GridLayout px={{ xs: 3, md: 4 }} py={{ xs: 3, md: 4 }} pr={{ md: 4, lg: 0 }} sx={{ height: "100%" }}>
                {/* Column 1 */}
                <GridItem cols={{ md: "1/13", lg: "1/5" }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >

                    {/* Top content */}
                    <Box>
                        {/* Profile img */}
                        <Box
                            sx={{
                                bgcolor: personaBg,
                                borderRadius: "8px",
                                pt: 4,
                                mb: 4,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={avatarSrc}
                                alt={name}
                                sx={{
                                    height: { xs: 200, lg: 240 },
                                    width: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                        {/* Text */}
                        <Typography variant="subtitle1" sx={{ mb: 1, color: textColor, opacity: 0.5 }}>
                            {company}
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                color: accent,
                                mb: 2,
                                textTransform: "none",
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, color: textColor }}>
                            {description}
                        </Typography>
                    </Box>

                    {/* Role bars */}
                    <Stack spacing={0.75}>
                        {roleBars.map((bar) => (
                            <PersonaProgressRow
                                key={bar.label}
                                label={bar.label}
                                value={bar.value}
                                trackColor={personaBg}
                                thumbColor={accent}
                                textColor={textColor}
                            />
                        ))}
                    </Stack>
                </GridItem>

                {/* Column 2 */}
                <GridItem cols={{ xs: "1/13", md: "1/13", lg: "5/13" }} sx={{ height: "100%", width: "100%", display: "flex", gap: 1.5 }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2,
                        width: "100%",
                    }}
                    >
                        <Box
                            sx={{
                                bgcolor: panelBg,
                                borderRadius: roleNuances && roleNuances.length > 0
                                    ? "8px"
                                    : { xs: "8px", md: "8px", lg: "8px 0 0 8px" },
                                p: 2.5,
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            <Box sx={{ mb: 3, color: textColor }}>
                                <Typography variant="h6Roman">
                                    Key responsibilities and tasks
                                </Typography>
                            </Box>

                            <Stack spacing={2} sx={{ maxWidth: 400 }}>
                                {responsibilities.map((item) => (
                                    <Box key={item.title} sx={{ color: accent }}>
                                        <Box sx={{ height: 30, display: "flex", alignItems: "center" }}>
                                            <Typography variant="body1Bold">
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" sx={{ pt: .5 }}>
                                            {item.body}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>


                        {/* Column 3 (optional) */}
                        {roleNuances && roleNuances.length > 0 && (

                            <Box
                                sx={{
                                    bgcolor: panelBg,
                                    borderRadius: { xs: "8px", md: "8px", lg: "8px 0 0 8px" },
                                    p: 2.5,
                                    width: { xs: "100%", md: "80%" },
                                }}
                            >
                                <Box sx={{ mb: 3, color: textColor }}>
                                    <Typography variant="h6Roman">
                                        Role nuances
                                    </Typography>
                                </Box>

                                <Stack spacing={2}>
                                    {roleNuances.map((text, i) => (
                                        <PersonaNuanceItem
                                            key={i}
                                            text={text}
                                            iconSrc={nuanceIconSrc}
                                            textColor={accent}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </Box>
                </GridItem>

                {/* Large icon */}
                <Box
                    component="img"
                    src={nuanceIconSrc}
                    alt={name}
                    sx={{
                        width: "24vh",
                        minWidth: 160,
                        maxWidth: 300,
                        maxHeight: nuanceIconSize,
                        height: "auto",
                        objectFit: "contain",
                        position: "absolute",
                        right: 60,
                        bottom: -40,
                    }}
                />
            </GridLayout>
        </Box>
    );
}

