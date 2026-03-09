import { Box, Button } from "@mui/material";

function CategoryTabs() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Button
        size="small"
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "secondary.main",
        }}
      >
        Cursos
      </Button>

      <Button
        size="small"
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "secondary.main",
        }}
      >
        Ferramentas
      </Button>

      <Button
        size="small"
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "secondary.main",
        }}
      >
        Produtos
      </Button>
    </Box>
  );
}

export default CategoryTabs;
