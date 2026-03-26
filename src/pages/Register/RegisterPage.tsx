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
import { registerWithEmail } from "../../services/authService";

function RegisterPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestError, setRequestError] = useState("");

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequestError("");
    setLoading(true);

    if (!email.trim() || !password.trim()) {
      setRequestError("Preencha e-mail e senha.");
      setLoading(false);
      return;
    }

    try {
      await registerWithEmail(email, password);

      navigate("/login", {
        state: {
          showSnackbar: true,
          message: "Conta criada com sucesso!",
        },
      });
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setRequestError("Este e-mail já está em uso.");
      } else if (error.code === "auth/invalid-email") {
        setRequestError("E-mail inválido.");
      } else if (error.code === "auth/weak-password") {
        setRequestError("A senha deve ter pelo menos 6 caracteres.");
      } else {
        console.error("Firebase error:", error.code, error.message);

        setRequestError("Não foi possível criar a conta.");
      }
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleRegister}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h4"
              sx={{ display: "flex", justifyContent: "center", mb: 2 }}
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
              {loading ? "Registrando..." : "Registrar"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default RegisterPage;
