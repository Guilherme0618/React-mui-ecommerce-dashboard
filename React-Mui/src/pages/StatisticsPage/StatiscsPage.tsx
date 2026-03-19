import { Box } from "@mui/material";
import AppSidebar from "../../components/AppSidebar";
import LogPanel from "../../components/LogPanel";

function StatisticsPage() {
  return (
    <Box
      sx={{
        display: "grid",
        minHeight: "100vh",
        gap: 1,
        p: 1,
        backgroundColor: "#d8d0d0",
        gridTemplateColumns: {
          xs: "1fr",
          md: "200px 1fr",
        },
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateRows: "1fr auto",
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 1,
            color: "white",
            p: 2,
          }}
        >
          <AppSidebar />
        </Box>

        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 1,
            color: "white",
            p: 2,
          }}
        >
          <LogPanel />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#d3d3d3",
          borderRadius: 1,
          border: "1px solid #9a9a9a",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          overflowY: "auto",
          height: 920,
        }}
      ></Box>
    </Box>
  );
}

export default StatisticsPage;
