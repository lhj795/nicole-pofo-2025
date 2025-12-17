import React from "react";
import { Box, Typography } from "@mui/material";
import { GridLayout, GridItem } from "../GridLayout";

export function ProjectHero({
  bgColor,
  foreground,
  bgImg,
  // title + subtitle
  title,
  titleProps,
  subtitle,
  subtitleProps,
  // layout for hero section
  titleCols = { xs: "1 / 13", md: "2 / 7", lg: "3/7" },
  imgCols = { xs: "1 / 13", md: "7 / 12", lg: "7/13" },
  swapOnMobile = false, // if true, media first on xs
  // hero visual JSX (image/video/etc.)
  media,
  imgAlign,
  // meta row
  metaItems = [], // [{ label, value, cols }]
}) {
  const titleOrder = swapOnMobile ? { xs: 2, md: 2, lg: 1 } : undefined;
  const mediaOrder = swapOnMobile ? { xs: 1, md: 1, lg: 2 } : undefined;

  return (
    <Box
      sx={{
        bgcolor: bgColor,
        color: foreground,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        height: { xs: "fit-content", lg: "64vh" },
        minWidth: "100%",
        ...(bgImg && {
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
      }}
    >
      {/* HERO ROW: title + media */}
      <GridLayout
       alignItems="center"
        sx={{
          display: "flex",
          flexGrow: "1",
          justifyContent: "flex-start",
          minWidth: "100%",
        }}
      >
        {/* Media */}
        {media && (
          <GridItem
            cols={imgCols}
            order={mediaOrder}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignSelf: imgAlign,
            }}
          >
            {media}
          </GridItem>
        )}

        {/* Title block */}
        <GridItem
          cols={titleCols}
          order={titleOrder}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: { xs: 3, md: 0 },
            width: "100%",
          }}
        >
          {title && (
            <Typography variant="h2" {...titleProps}>
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography
              variant="h4Bold"
              sx={{ mt: 2 }}
              {...subtitleProps}
            >
              {subtitle}
            </Typography>
          )}
        </GridItem>
      </GridLayout>

      {/* Project / Role / Tools */}
      {metaItems.length > 0 && (
        <GridLayout py={3}>
          {metaItems.map((item) => (
            <GridItem
              key={item.label}
              cols={item.cols}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 0.5,
                width: "100%"
              }}
            >
              <Typography variant="body1Bold">
                {item.label}
              </Typography>
              <Typography variant="body1">{item.value}</Typography>
            </GridItem>
          ))}
        </GridLayout>
      )}
    </Box>
  );
}
