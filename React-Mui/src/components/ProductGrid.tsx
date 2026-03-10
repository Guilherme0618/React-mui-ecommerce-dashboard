import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

type ProductGridProps = {
  products: Product[];
};

function ProductGrid({ products }: ProductGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        },
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </Box>
  );
}

export default ProductGrid;
