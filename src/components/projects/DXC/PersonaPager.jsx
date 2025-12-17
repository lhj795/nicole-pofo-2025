import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { GridLayout, GridItem } from "../../GridLayout";

export default function DXCPersonaPager({
  children, // the centered "cage" content (your card)
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}) {
  
  return (
    <GridLayout>

      {/* Btn L */}
      <GridItem
        cols={{ xs: "1/3", md: "1/2", lg: "1/2" }}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", md: "grid" },
        }}
        order={{ xs: 2, md: 1, lg: 1 }}
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
        cols={{ xs: "1/13", md: "2/12", lg: "2/12" }}
        order={{ xs: 1, md: 2, lg: 2 }}
      >
        {children}
      </GridItem>

      {/* Btn r */}
      <GridItem
        cols={{ xs: "12/13", md: "12/13", lg: "12/13" }}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", md: "grid" },
        }}
        order={3}
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
