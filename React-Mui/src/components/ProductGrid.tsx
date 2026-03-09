import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  image: string;
  price: string;
  description: string;
  category: string;
};

const products: Product[] = [
  {
    id: 1,
    image: "https://image-placeholder.com/images/actual-size/1920x1080.png",
    price: "R$ 199,90",
    description: "Curso completo de React com foco em projetos reais.",
    category: "Cursos",
  },
  {
    id: 2,
    image: "https://image-placeholder.com/images/actual-size/1920x1080.png",
    price: "R$ 89,90",
    description: "Ferramenta para organização de tarefas e produtividade.",
    category: "Ferramentas",
  },
  {
    id: 3,
    image: "https://image-placeholder.com/images/actual-size/1920x1080.png",
    price: "R$ 49,90",
    description: "Produto digital com acesso imediato e suporte incluso.",
    category: "Protudos",
  },
  {
    id: 4,
    image: "https://image-placeholder.com/images/actual-size/1920x1080.png",
    price: "R$ 129,90",
    description: "Pacote profissional com materiais extras para estudo.",
    category: "Cursos",
  },
  {
    id: 5,
    image: "https://image-placeholder.com/images/actual-size/1920x1080.png",
    price: "R$ 299,90",
    description: "Mentoria especializada com acompanhamento individual.",
    category: "Cursos",
  },
  {
    id: 6,
    image: "https://image-placeholder.com/images/actual-size/1920x1080.png",
    price: "R$ 79,90",
    description: "Guia prático para acelerar seu desenvolvimento.",
    category: "Cursos",
  },
];

function ProductGrid() {
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
