import { Avatar, Box, Button, TextField } from "@mui/material";

type HomeHeaderProps = {
  onOpenAddDialog: () => void;
};

function HomeHeader({ onOpenAddDialog }: HomeHeaderProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#cfc7c7",
        borderRadius: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <TextField
        placeholder="Pesquisa"
        size="small"
        sx={{
          width: {
            xs: "100%",
            sm: 320,
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexShrink: 0,
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={onOpenAddDialog}
          sx={{
            textTransform: "none",
            backgroundColor: "secondary.main",
          }}
        >
          Add
        </Button>

        <Avatar
          sx={{
            width: 34,
            height: 34,
            bgcolor: "#f2f2f2",
            color: "#200F3B",
          }}
        />
      </Box>
    </Box>
  );
}

export default HomeHeader;
