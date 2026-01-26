import { useState } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { GridLayout, GridItem } from "../../GridLayout";
import { Box, Typography } from "@mui/material";

export default function DXCPersonaPager({
  children, // the centered "cage" content (your card)
  onPrev,
  onNext,
  disablePrev,
  disableNext,
  persona,
  footerLeft,
  footerRight,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pages = persona?.pages || [];
  const totalPages = pages.length;
  const currentPage = pages[activeIndex];

  return (
    <GridLayout py={3}>

      {/* Btn L */}
      <GridItem
        cols={{ xs: "1/2", md: "1/2", lg: "2/3" }}
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        <IconButton
          onClick={onPrev}
          disabled={disablePrev}
          aria-label="Previous"
          sx={{
            width: 44,
            height: 44,
            bgcolor: "rgba(0,0,0,0.06)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </GridItem>

      {/* Center stage */}
      <GridItem
        cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}
        sx={{
          minHeight: { xs: "auto", md: 700 },
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              minHeight: { md: 720 },
              display: "flex",
              alignItems: "stretch",
              bgcolor: persona?.cardBg,
              borderRadius: "16px",
            }}
          >
            {children}
          </Box>

        {/* FOOTER */}
        <Box
          sx={{
            mt: 1.5,
            px: 0.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {footerLeft}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {footerRight}
          </Typography>
        </Box>

        </Box>
      </GridItem>

      {/* Btn r */}
      <GridItem
        cols={{ xs: "12/13", md: "12/13", lg: "11/12" }}
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        <IconButton
          onClick={onNext}
          disabled={disableNext}
          aria-label="Next"
          sx={{
            width: 44,
            height: 44,
            bgcolor: "rgba(0,0,0,0.06)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </GridItem>

      <GridItem
        cols={"1/13"}
        order={{ xs: 1, md: 2, lg: 2 }}
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={onPrev}
          disabled={disablePrev}
          aria-label="Previous"
          sx={{
            width: 44,
            height: 44,
            bgcolor: "rgba(0,0,0,0.06)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={onNext}
          disabled={disableNext}
          aria-label="Next"
          sx={{
            width: 44,
            height: 44,
            bgcolor: "rgba(0,0,0,0.06)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </GridItem>
    </GridLayout>
  );
}
