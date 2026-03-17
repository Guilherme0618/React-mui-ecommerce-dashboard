import { Box, Button, TextField } from "@mui/material";
import UserAvatarMenu from "./UserAvatarMenu";
import { useNavigate } from "react-router-dom";

function HomeHeader() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    console.log("Editar perfil");
    navigate("");
  };

  const handleLogout = () => {
    console.log("Logout");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#cfc7c7",
        borderRadius: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <TextField
        placeholder="Pesquisa"
        size="small"
        sx={{
          width: {
            xs: "100%",
            sm: 320,
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexShrink: 0,
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            textTransform: "none",
            backgroundColor: "secondary.main",
          }}
        >
          Add
        </Button>

        <UserAvatarMenu
          userName="Guilherme"
          userEmail="guilherme@email.com"
          onEditProfile={handleEditProfile}
          onLogout={handleLogout}
        />
      </Box>
    </Box>
  );
}

export default HomeHeader;
