import { Box, Typography } from "@mui/material";
import { GridLayout, GridItem } from "../../GridLayout";
import SentimentVeryDissatisfied from "@mui/icons-material/SentimentVeryDissatisfied";

function RichText({ segments = [], variant = "body2", sx }) {
    return (
        <Typography variant={variant} component="p" sx={sx}>
            {segments.map((seg, i) => (
                <Box
                    key={i}
                    component="span"
                    sx={{ fontWeight: seg.bold ? 600 : 400 }}
                >
                    {seg.content}
                </Box>
            ))}
        </Typography>
    );
}

export default function PersonaPainPoint({ persona }) {
    const pain = persona?.pain ?? {};
    const header = pain.header ?? {};
    const painPoint = pain.painPoint ?? {};

    return (
        <Box
            sx={{
                bgcolor: persona?.cardBg,
                border: `1px solid ${persona?.personaBg}`,
                borderRadius: "12px",
                color: persona?.textColor,
            }}
        >
            <GridLayout
                px={{ xs: 3, md: 4 }} 
                py={{ xs: 3, md: 4 }}
                gapY={3}
            >
                {/* Header */}
                <GridItem cols={"1/13"} sx={{ pb: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: { xs: 2, md: 4 },
                        }}
                    >
                        {/* Left */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0, color: persona?.textColor }}>
                            <Typography variant="h6Roman">
                                {header.first}
                                <Typography variant="h6Roman" sx={{ color: "#EC5165" }}>
                                    {header.red}
                                </Typography>
                                {header.last}
                            </Typography>
                        </Box>

                        {/* Right */}
                        <Box
                            sx={{
                                minWidth: "40%",
                                height: "-webkit-fill-available",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                alignItems: "center",
                                p: { xs: 0, md: 2 },
                                bgcolor: { xs: persona?.cardBg, md: "rgba(255, 79, 102, 0.15)" },
                                borderRadius: "8px",
                                color: persona?.textColor,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontStyle: "italic",
                                    color: persona?.textColor,
                                    opacity: 0.7,
                                }}
                            >
                                "{header.quote}"
                            </Typography>
                        </Box>
                    </Box>
                </GridItem>

                {/* content */}
                <GridItem cols={"1/13"}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "stretch",
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        {painPoint.map((p, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 1,
                                    gap: 0,
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Pink pain card */}
                                <Box
                                    sx={{
                                        bgcolor: "rgba(255, 79, 102, 0.15)",
                                        borderRadius: { xs: "0px", md: "8px" },
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0.75,
                                        color: persona?.textColor,
                                        flex: 1,
                                    }}
                                >
                                    <SentimentVeryDissatisfied
                                        sx={{ color: "#EC5165", height: 28, width: 28 }}
                                    />

                                    <RichText segments={p.title} variant="body1Bold" />

                                    <RichText
                                        segments={p.desc}
                                        variant="body1"
                                        sx={{ opacity: 0.9 }}
                                    />
                                </Box>

                                {/* Help me action */}
                                <Box
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0.75,
                                        flexGrow: 1,
                                        bgcolor: { xs: persona?.personaBg, md: persona?.cardBg, },
                                    }}
                                >
                                    <Typography variant="body1Bold">Help me</Typography>

                                    <RichText segments={p.action} variant="body1" />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </GridItem>

            </GridLayout>
        </Box>
    );
}
