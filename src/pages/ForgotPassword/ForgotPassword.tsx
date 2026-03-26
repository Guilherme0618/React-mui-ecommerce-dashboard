import { useState } from "react";
import { Box, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import { forgotPassword } from "../../services/authService";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [requestError, setRequestError] = useState("");

  function validateEmail(value: string): string {
    if (!value.trim()) {
      return "O e-mail é obrigatório.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      return "Digite um e-mail válido.";
    }

    return "";
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccessMessage("");
    setRequestError("");

    const validationMessage = validateEmail(email);

    if (validationMessage) {
      setEmailError(validationMessage);
      return;
    }

    setEmailError("");
    setLoading(true);

    try {
      await forgotPassword(email);

      setSuccessMessage(
        "Se existir uma conta vinculada a este e-mail, enviaremos as instruções para redefinição de senha.",
      );
      setEmail("");
    } catch (error: any) {
      console.error("Firebase error:", error.code, error.message);

      setRequestError(
        "Não foi possível processar sua solicitação agora. Tente novamente em instantes.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: "tertiary.main",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 520,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: { xs: 3, sm: 4 },
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                textAlign: "center",
              }}
            >
              Esqueceu sua senha?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                mb: 2,
                maxWidth: 420,
                mx: "auto",
              }}
            >
              Informe seu e-mail para receber as instruções de redefinição de
              senha da sua conta NEWSHOP.
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
              Lembrou sua senha?
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
                Voltar para o login
                <AirlineStopsIcon sx={{ fontSize: "1rem" }} />
              </Link>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="h6">E-mail</Typography>

              <TextField
                fullWidth
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                  if (requestError) setRequestError("");
                }}
                error={Boolean(emailError)}
                helperText={emailError}
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
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {successMessage && (
                <Alert severity="success" sx={{ borderRadius: 2 }}>
                  {successMessage}
                </Alert>
              )}

              {requestError && (
                <Alert severity="error" sx={{ borderRadius: 2 }}>
                  {requestError}
                </Alert>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                borderRadius: "15px",
                fontSize: "1.1rem",
                width: "100%",
                py: 1.5,
              }}
            >
              {loading ? "Enviando..." : "Resetar Senha"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default ForgetPassword;
