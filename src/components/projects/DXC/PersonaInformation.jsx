import { Box, Typography } from "@mui/material";
import { GridLayout, GridItem } from "../../GridLayout";
import Info from "@mui/icons-material/Info";
import AutoAwesome from "@mui/icons-material/AutoAwesome";

export default function PersonaInformation({ persona }) {
    const info = persona?.information;
    const displayName = info?.title?.nameOverride || persona?.name;
    const quote = persona?.information?.quote;

    return (
        <Box
            sx={{
                bgcolor: persona?.cardBg,
                border: `1px solid ${persona?.personaBg}`,
                borderRadius: "12px", 
                color: persona?.textColor,
            }}
        >
            <GridLayout px={{ xs: 3, md: 4 }} py={{ xs: 3, md: 4 }} gapX={2} gapY={2}>
                {/* Left column */}
                <GridItem cols={{ xs: "1/13", md: "1/4" }} sx={{ height: "100%" }}>
                    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 8, pr: 1 }}>
                        <Typography variant="h3">
                            Information and insights OASIS could play a role for{" "}
                            <Box component="span" sx={{ color: persona?.accent }}>
                                {displayName}
                            </Box>
                        </Typography>
                        <Typography variant="body1" sx={{ fontStyle: "italic", opacity: 0.7 }}>
                            “{quote}”
                        </Typography>
                    </Box>
                </GridItem>

                {/* Content */}
                <GridItem
                    cols={{ xs: "1/13", md: "4/13" }}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, height: "fit-content" }}>
                        {/* Title */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: persona?.accent }}>
                            <Info />
                            <Typography variant="h6Bold">
                                Information to rely on
                            </Typography>
                        </Box>
                        {/* Info list */}
                        <Box
                            sx={{
                                bgcolor: persona?.panelBg,
                                borderRadius: "8px",
                                px: 2,
                                py: 0.5,
                                height: "100%",
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                {(info?.relyOn?.items || []).map((it, idx, arr) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            py: 1.5,
                                            borderBottom:
                                                idx === arr.length - 1
                                                    ? "none"
                                                    : `1px solid ${persona?.personaBg}`,
                                        }}
                                    >
                                        <Typography variant="body1Bold">{it.title}</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.7, }}>
                                            {it.desc}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, color: persona?.accent }}>
                            <AutoAwesome />
                            <Typography variant="h6Bold">
                                Insights they want
                            </Typography>
                        </Box>

                        {(info?.insights?.items || []).map((text, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    bgcolor: persona?.panelBg,
                                    borderRadius: "8px",
                                    p: 2,
                                    borderLeft: `4px solid ${persona?.accent}`,
                                    width: "100%",
                                }}
                            >
                                <Typography variant="body1">{text}</Typography>
                            </Box>
                        ))}
                    </Box>
                </GridItem>
            </GridLayout>
        </Box>
    );
}
