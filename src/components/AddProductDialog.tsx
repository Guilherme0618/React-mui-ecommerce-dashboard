import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { Product } from "../types/product";

type ProductCategory = Product["category"];

type AddProductDialogProps = {
  open: boolean;
  onClose: () => void;
  onAddProduct: (product: Product) => void;
};

type FormErrors = {
  image: string;
  price: string;
  description: string;
  category: string;
};

function AddProductDialog({
  open,
  onClose,
  onAddProduct,
}: AddProductDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<ProductCategory>("Produtos");

  const [errors, setErrors] = useState<FormErrors>({
    image: "",
    price: "",
    description: "",
    category: "",
  });

  function resetForm() {
    setImageFile(null);
    setImagePreview("");
    setPrice("");
    setDescription("");
    setCategory("Produtos");
    setErrors({
      image: "",
      price: "",
      description: "",
      category: "",
    });
  }

  function handleClose() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    resetForm();
    onClose();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    const previewUrl = URL.createObjectURL(file);

    setImageFile(file);
    setImagePreview(previewUrl);

    setErrors((prev) => ({
      ...prev,
      image: "",
    }));
  }

  function formatPrice(value: string) {
    const onlyNumbers = value.replace(/\D/g, "");

    if (!onlyNumbers) return "";

    const numberValue = Number(onlyNumbers) / 100;

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numberValue);
  }

  function validateForm() {
    const newErrors: FormErrors = {
      image: "",
      price: "",
      description: "",
      category: "",
    };

    if (!imageFile || !imagePreview) {
      newErrors.image = "Adicione uma imagem para o item.";
    }

    if (!price.trim()) {
      newErrors.price = "Informe o preço do item.";
    }

    if (!description.trim()) {
      newErrors.description = "Informe a descrição do item.";
    }

    if (!category) {
      newErrors.category = "Selecione uma categoria.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    const newProduct: Product = {
      id: Date.now(),
      image: imagePreview,
      price,
      description: description.trim(),
      category,
    };

    onAddProduct(newProduct);
    resetForm();
    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle
          sx={{
            fontWeight: "bold",
          }}
        >
          Adicionar item
        </DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pt: 2,
          }}
        >
          <TextField
            select
            label="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory)}
            error={Boolean(errors.category)}
            helperText={errors.category}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          >
            <MenuItem value="Produtos">Produto</MenuItem>
            <MenuItem value="Ferramentas">Ferramenta</MenuItem>
            <MenuItem value="Cursos">Curso</MenuItem>
          </TextField>

          <TextField
            label="Preço"
            placeholder="R$ 0,00"
            value={price}
            onChange={(e) => setPrice(formatPrice(e.target.value))}
            error={Boolean(errors.price)}
            helperText={errors.price}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <TextField
            label="Descrição"
            placeholder="Descreva o que será vendido"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={Boolean(errors.description)}
            helperText={errors.description}
            multiline
            minRows={4}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <Box>
            <Button
              variant="outlined"
              component="label"
              sx={{
                textTransform: "none",
                borderRadius: 2,
              }}
              fullWidth
            >
              Selecionar imagem
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange}
              />
            </Button>

            {errors.image && (
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {errors.image}
              </Typography>
            )}
          </Box>

          {imagePreview && (
            <Box
              component="img"
              src={imagePreview}
              alt="Pré-visualização"
              sx={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 2,
                border: "1px solid #d0d0d0",
              }}
            />
          )}
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose} sx={{ textTransform: "none" }}>
            Cancelar
          </Button>

          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Adicionar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddProductDialog;
