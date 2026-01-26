import React from "react";
import { GridLayout, GridItem } from "../GridLayout";

export function FourByFourLayout({
  left,
  right,
  leftCols  = { xs: "1 / 13", md: "2 / 7", lg: "3/7" },
  rightCols = { xs: "1 / 13", md: "7 / 12", lg: "7/11" },
  leftOrder,
  rightOrder,
  gapX,
  gapY,
  px = { xs: 3, md: 0 },
  py = { xs: 3, md: 4 },
  pt,
  pb,
  maxWidth,
  alignItems,
  sx,
}) {
  return (
    <GridLayout
      gapX={gapX}
      gapY={gapY}
      px={px}
      py={py}
      pt={pt}
      pb={pb}
      maxWidth={maxWidth}
      sx={sx}
      alignItems={alignItems}
    >
      {/* Left content */}
      <GridItem
        cols={leftCols}
        order={leftOrder}
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%", height: "100%" }}
      >
        {left}
      </GridItem>

      {/* Right content */}
      <GridItem
        cols={rightCols}
        order={rightOrder}
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%", height: "100%" }}
      >
        {right}
      </GridItem>
    </GridLayout>
  );
}