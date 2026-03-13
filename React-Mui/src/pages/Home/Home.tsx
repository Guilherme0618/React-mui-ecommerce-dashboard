import { Box, Snackbar, Alert } from "@mui/material";
import AppSidebar from "../../components/AppSidebar";
import HomeHeader from "../../components/HomeHeader";
import CategoryTabs from "../../components/CategoryTabs";
import ProductGrid from "../../components/ProductGrid";
import LogPanel from "../../components/LogPanel";
import { useMemo, useState, useEffect } from "react";
import { mockProducts } from "../../data/products";
import type { Category } from "../../types/product";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") {
      return mockProducts;
    }

    return mockProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);

  useEffect(() => {
    if (location.state?.showSnackbar) {
      setOpenSnackbar(true);

      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          minHeight: "100vh",
          gap: 1,
          p: 1,
          backgroundColor: "#d8d0d0",
          gridTemplateColumns: {
            xs: "1fr",
            md: "200px 1fr",
          },
        }}
      >
        {/* Coluna esquerda */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateRows: "1fr auto",
            gap: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: 1,
              color: "white",
              p: 2,
            }}
          >
            <AppSidebar />
          </Box>

          <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: 1,
              color: "white",
              p: 2,
            }}
          >
            <LogPanel />
          </Box>
        </Box>

        {/* Coluna direita */}
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateRows: "70px 1fr",
          }}
        >
          <HomeHeader />

          <Box
            sx={{
              backgroundColor: "#d3d3d3",
              borderRadius: 1,
              border: "1px solid #9a9a9a",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              overflowY: "auto",
              height: 850,
            }}
          >
            <CategoryTabs
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <ProductGrid products={filteredProducts} />
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {location.state?.message || "Login efetuado com sucesso!"}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Home;
