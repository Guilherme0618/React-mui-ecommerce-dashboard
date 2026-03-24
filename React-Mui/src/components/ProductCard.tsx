import { Box, Typography } from "@mui/material";

type ProductCardProps = {
  image: string;
  price: string;
  description: string;
};

function ProductCard({ image, price, description }: ProductCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#efefef",
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: 340,
        boxShadow: 1,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={description}
        sx={{
          width: "100%",
          height: 240,
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
          }}
        >
          {price}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductCard;
