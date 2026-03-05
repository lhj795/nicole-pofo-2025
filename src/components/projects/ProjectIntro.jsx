import React from "react";
import { Typography } from "@mui/material";
import { GridLayout, GridItem } from "../GridLayout";
import { useLocalization } from "../../il8n/LocalizationProvider";

export function ProjectIntro({
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
  leftCols = { xs: "1 / 13", md: "2 / 7", lg: "3/7" },
  rightCols = { xs: "1 / 13", md: "7 / 12", lg: "7/11" },
}) {

  const { t } = useLocalization();

  const resolvedLeftTitle = leftTitle ?? t("projectsIntro.leftTitle");
  const resolvedRightTitle = rightTitle ?? t("projectsIntro.rightTitle");

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
          {resolvedLeftTitle}
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
          {resolvedRightTitle}
        </Typography>
        <Typography variant="body1">{rightBody}</Typography>
      </GridItem>
    </GridLayout>
  );
}
