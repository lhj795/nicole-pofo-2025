import { Box } from "@mui/material";

// Layout wrapper: defines the grid
export function GridLayout({
  children,
  columns = 12,
  gapX = { xs: 2, md: 3 },
  gapY = { xs: 2, md: 3 },
  maxWidth,
  px = { xs: 3, md: 0 },
  py = 0,
  pt,
  pb,
  pr,
  pl,
  bgImg,
  bgColor,
  alignItems = "flex-start",
  sx,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: bgColor,
        ...(bgImg && {
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
        ...sx,
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          flexDirection: { xs: "column", md: "initial" },
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          alignItems: alignItems,
          columnGap: gapX,
          rowGap: gapY,
          maxWidth,
          mx: "auto",
          px: px,
          py: py,
          pt: pt,
          pb: pb,
          pr: pr,
          pl: pl,
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export function GridItem({
  cols,   // e.g. { xs: "1 / 13", md: "2 / 6" }
  order,  // e.g. { xs: 2, md: 1 }
  sx,
  children,
}) {
  return (
    <Box
      sx={{
        gridColumn: cols,
        order,        // allows responsive order: { xs: 2, md: 1 }
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
