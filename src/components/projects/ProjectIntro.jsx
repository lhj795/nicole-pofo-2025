import React from "react";
import { Typography } from "@mui/material";
import { GridLayout, GridItem } from "../GridLayout";

export function ProjectIntro({
  leftTitle = "Abstract",
  leftBody,
  rightTitle = "Involvement",
  rightBody,
  leftCols = { xs: "1 / 13", md: "2 / 7", lg: "3/7" },
  rightCols = { xs: "1 / 13", md: "7 / 12", lg: "7/11" },
}) {
  return (
    <GridLayout py={3}>
      {/* Left block */}
      <GridItem
        cols={leftCols}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography variant="body1Bold">
          {leftTitle}
        </Typography>
        <Typography variant="body1">{leftBody}</Typography>
      </GridItem>

      {/* Right block */}
      <GridItem
        cols={rightCols}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography variant="body1Bold">
          {rightTitle}
        </Typography>
        <Typography variant="body1">{rightBody}</Typography>
      </GridItem>
    </GridLayout>
  );
}
