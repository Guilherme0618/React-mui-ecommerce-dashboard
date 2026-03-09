import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LogPanel() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box sx={{ fontWeight: 500 }}>Logs</Box>

      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{
          backgroundColor: "#ffffff",
          color: "primary.main",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#f3f3f3",
          },
        }}
      >
        Visualizar Log
      </Button>
    </Box>
  );
}

export default LogPanel;
