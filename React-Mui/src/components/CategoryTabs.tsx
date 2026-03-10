import { Box, Button } from "@mui/material";
import type { Category } from "../types/product";

type CategoryTabsProps = {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
};

function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  const categories: Category[] = ["Todos", "Cursos", "Ferramentas", "Produtos"];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          size="small"
          variant="contained"
          onClick={() => onSelectCategory(category)}
          sx={{
            textTransform: "none",
            backgroundColor:
              selectedCategory === category ? "primary.main" : "secondary.main",
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}

export default CategoryTabs;
