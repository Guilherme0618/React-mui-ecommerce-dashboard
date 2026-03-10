import { Box } from "@mui/material";
import AppSidebar from "../../components/AppSidebar";
import HomeHeader from "../../components/HomeHeader";
import CategoryTabs from "../../components/CategoryTabs";
import ProductGrid from "../../components/ProductGrid";
import LogPanel from "../../components/LogPanel";
import { useMemo, useState } from "react";
import { mockProducts } from "../../data/products";
import type { Category } from "../../types/product";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") {
      return mockProducts;
    }

    return mockProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);
  return (
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
  );
}

export default Home;
