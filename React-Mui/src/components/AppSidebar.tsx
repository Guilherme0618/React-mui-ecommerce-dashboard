import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 2,
      }}
    >
      <Button
        onClick={() => navigate("/home")}
        sx={{
          color: "white",
          justifyContent: "center",
          borderRadius: 2,
          transition: "all 0.25s ease",
          "&:hover": {
            backgroundColor: "#5c4b77",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            transform: "translateX(4px)",
          },
        }}
      >
        Home
      </Button>

      <Box
        sx={{
          mt: 35,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Button
          onClick={() => navigate("/login")}
          sx={{
            color: "white",
            justifyContent: "center",
            borderRadius: 2,
            transition: "all 0.25s ease",
            "&:hover": {
              backgroundColor: "#5c4b77",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              transform: "translateX(4px)",
            },
          }}
        >
          Estatísticas
        </Button>

        <Button
          onClick={() => navigate("/login")}
          sx={{
            color: "white",
            justifyContent: "center",
            borderRadius: 2,
            transition: "all 0.25s ease",
            "&:hover": {
              backgroundColor: "#5c4b77",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              transform: "translateX(4px)",
            },
          }}
        >
          Área Cliente
        </Button>

        <Button
          onClick={() => navigate("/login")}
          sx={{
            color: "white",
            justifyContent: "center",
            borderRadius: 2,
            transition: "all 0.25s ease",
            "&:hover": {
              backgroundColor: "#5c4b77",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              transform: "translateX(4px)",
            },
          }}
        >
          Vendas
        </Button>
      </Box>
    </Box>
  );
}

export default AppSidebar;
