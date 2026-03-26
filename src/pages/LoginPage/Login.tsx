import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
  Alert,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import { useState } from "react";
import fundoImg from "../../assets/images/fundoImg.png";
import logoImg from "../../assets/images/logoImg.png";
import { loginWithEmail } from "../../services/authService";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequestError("");
    setLoading(true);

    if (!email.trim() || !password.trim()) {
      setRequestError("Preencha e-mail e senha.");
      setLoading(false);
      return;
    }

    try {
      await loginWithEmail(email, password);

      navigate("/home", {
        state: {
          showSnackbar: true,
          message: "Login efetuado com sucesso!",
        },
      });
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        setRequestError("E-mail ou senha inválidos.");
      } else if (error.code === "auth/too-many-requests") {
        setRequestError("Muitas tentativas. Tente novamente mais tarde.");
      } else {
        console.error("Firebase error:", error.code, error.message);

        setRequestError("Não foi possível entrar agora.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "tertiary.main",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        minHeight: "100vh",
        gap: 2,
        p: 2,
      }}
    >
      {/* Formulario login */}
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: { xs: 3, sm: 4, md: 6 },
          boxShadow: 3,
          borderRadius: 2,
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleLogin}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h4"
              sx={{ display: "flex", justifyContent: "center", mb: 2 }}
            >
              Log in
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "text.secondary", mb: 2 }}
            >
              Bem-vindo! Por favor, entre utilizando sua conta NEWSHOP.
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
                textAlign: "center",
              }}
            >
              Novo em NEWSHOP?
              <Link
                component={RouterLink}
                to="/register"
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
                Registrar-se Gratuitamente Aqui
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
              <Typography variant="h6">E-mail</Typography>

              <TextField
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                type="email"
                placeholder="Digite seu e-mail"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>

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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
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
                Esqueceu sua senha?
                <AirlineStopsIcon sx={{ fontSize: "1rem", ml: 0.5 }} />
              </Link>
            </Box>

            {requestError && (
              <Alert severity="error" sx={{ width: "100%", maxWidth: 700 }}>
                {requestError}
              </Alert>
            )}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
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
              }}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Box>
        </form>
      </Box>
      {/* img Direita */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          color: "white",
          backgroundColor: "primary.main",
          backgroundImage: `url(${fundoImg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "top left",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          borderRadius: 2,
          p: 4,
        }}
      >
        <Box
          component="img"
          src={logoImg}
          sx={{ width: "100%", maxWidth: 400 }}
        />
        <Typography variant="h3">Bem-vindo</Typography>
      </Box>
    </Box>
  );
}

export default Login;
