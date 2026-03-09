import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import fundoImg from "../../assets/images/fundoImg.png";
import logoImg from "../../assets/images/logoImg.png";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "tertiary.main",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        gap: 4,
      }}
    >
      {/* Lado esquerdo */}
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          gap: 2,
          p: 6,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              pt: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "50px",
            }}
          >
            Log in
          </Typography>

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "50px",
              color: "text.secondary",
            }}
          >
            Bem Vindo! Por favor, Entre Utilizando seu Login da sua conta
            NEWSHOP
          </Typography>

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 1,
              height: "100px",
              color: "primary.main",

              fontFamily: "Poppins, Arial",
            }}
          >
            Novo em NEWSHOP?{" "}
            <Link
              component={RouterLink}
              to="/register"
              underline="none"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Registrar-se Gratuitamente Aqui{" "}
              <AirlineStopsIcon sx={{ fontSize: "1.0rem" }} />
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
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: 550,
                md: 700,
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant="h6">Username</Typography>
            <span style={{ color: "red", fontSize: "0.8rem" }}></span>

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
          <Box></Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: 550,
                md: 700,
              },
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
            <Link
              component={RouterLink}
              to="/forgot-password"
              underline="none"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Esqueceu sua senha?{" "}
              <AirlineStopsIcon sx={{ fontSize: "1.0rem" }} />
            </Link>
          </Box>
        </Box>
        <Button
          variant="contained"
          onClick={() => navigate("/home")}
          sx={{
            borderRadius: "15px",
            mt: 10,
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
          Entrar
        </Button>
      </Box>

      {/* Lado direito */}
      <Box
        sx={{
          color: "white",
          backgroundColor: "primary.main",
          backgroundImage: `url(${fundoImg})`,
          backgroundRepeat: "repeat", // repete corretamente
          backgroundSize: "auto", // mantém tamanho real
          backgroundPosition: "top left", // melhor para textura
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src={logoImg}
          sx={{
            maxWidth: 400,
          }}
        ></Box>
        <Typography variant="h3">Bem-vindo</Typography>
      </Box>
    </Box>
  );
}

export default Login;
