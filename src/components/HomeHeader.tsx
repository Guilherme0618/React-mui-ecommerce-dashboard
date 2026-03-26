import { Box, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserAvatarMenu from "./UserAvatarMenu";
import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../services/authService";

type HomeHeaderProps = {
  onOpenAddDialog: () => void;
};

function HomeHeader({ onOpenAddDialog }: HomeHeaderProps) {
  const navigate = useNavigate();

  function handleEditProfile() {
    navigate("/profile");
  }

  /*async function handleLogout() {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  } */

  return (
    <Box
      sx={{
        backgroundColor: "#cfc7c7",
        borderRadius: 2,
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      {/* pesquisa */}
      <TextField
        placeholder="Pesquisar produtos..."
        size="small"
        fullWidth
        sx={{
          maxWidth: { xs: "100%", sm: 320 },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* add / UserProfile */}
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
          onClick={onOpenAddDialog}
          sx={{
            textTransform: "none",
            backgroundColor: "secondary.main",
            borderRadius: 2,
            px: 2,
          }}
        >
          Add
        </Button>

        <UserAvatarMenu
          userName="Guilherme"
          userEmail="guilherme@email.com"
          onEditProfile={handleEditProfile}
          onLogout={/*handleLogout*/ () => navigate("/login")}
        />
      </Box>
    </Box>
  );
}

export default HomeHeader;
