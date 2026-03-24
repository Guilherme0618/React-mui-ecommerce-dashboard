import { Box, Button, CircularProgress } from "@mui/material";
import type { Category } from "../types/product";
import { useState } from "react";

type CategoryTabsProps = {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
};

function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  const categories: Category[] = ["Todos", "Cursos", "Ferramentas", "Produtos"];

  const [loadingCategory, setLoadingCategory] = useState<Category | null>(null);

  function handleSelectCategory(category: Category) {
    setLoadingCategory(category);

    setTimeout(() => {
      onSelectCategory(category);
      setLoadingCategory(null);
    }, 800);
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {categories.map((category) => {
        const isLoading = loadingCategory === category;

        return (
          <Button
            key={category}
            size="small"
            variant="contained"
            onClick={() => handleSelectCategory(category)}
            disabled={loadingCategory !== null}
            sx={{
              textTransform: "none",
              minWidth: 130,
              backgroundColor:
                selectedCategory === category
                  ? "primary.main"
                  : "secondary.main",
            }}
          >
            {isLoading ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              category
            )}
          </Button>
        );
      })}
    </Box>
  );
}

export default CategoryTabs;
