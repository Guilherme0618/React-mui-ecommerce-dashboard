export type Category = "Todos" | "Cursos" | "Ferramentas" | "Produtos";

export type Product = {
  id: number;
  image: string;
  price: string;
  description: string;
  category: Exclude<Category, "Todos">;
};
