import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tertiary.main",
        minHeight: "100vh",
        width: "100%",
        gap: 3,
        px: 2,
        py: 3,
        flexDirection: {
          xs: "column",
          lg: "row",
        },
      }}
    >
      {/* Lado esquerdo - Registro */}
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: { xs: 3, sm: 4, md: 6 },
          boxShadow: 3,
          borderRadius: 2,
          width: "100%",
          maxWidth: 850,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            Register
          </Typography>

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              mb: 2,
              color: "text.secondary",
            }}
          >
            Bem-vindo! Por favor, registre-se para criar sua conta.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
              color: "primary.main",
              fontFamily: "Poppins, Arial",
            }}
          >
            Já tem uma conta?
            <Link
              component={RouterLink}
              to="/login"
              underline="none"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Log-in NEWSHOP
              <AirlineStopsIcon sx={{ fontSize: "1rem" }} />
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Username */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 700,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant="h6">Username</Typography>
            <TextField
              fullWidth
              placeholder="Username"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          {/* Password */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 700,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant="h6">Password</Typography>

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={() => navigate("/login")}
          sx={{
            borderRadius: "15px",
            mt: 5,
            fontSize: "1.1rem",
            width: {
              xs: "100%",
              sm: 300,
              md: 500,
            },
            py: 1.5,
            alignSelf: "center",
          }}
        >
          Registrar
        </Button>
      </Box>

      {/* OR - aparece só no desktop */}
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "50%",
          height: 70,
          width: 70,
          boxShadow: 3,
          fontWeight: "bold",
          flexShrink: 0,
        }}
      >
        <Typography>OR</Typography>
      </Box>

      {/* Lado direito - Contas demo */}
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: { xs: 3, sm: 4 },
          boxShadow: 3,
          borderRadius: 2,
          width: "100%",
          maxWidth: 360,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          Contas de Demonstração
        </Typography>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mb: 1,
          }}
        >
          Use uma conta pronta para testar as funcionalidades do sistema.
        </Typography>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            py: 1.2,
          }}
        >
          Edgar Demo
        </Button>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            py: 1.2,
          }}
        >
          Heitor Demo
        </Button>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            py: 1.2,
          }}
        >
          Jonas Demo
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterPage;
