import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import NavigationIcon from "@mui/icons-material/Navigation";

type createUserModalOpen = {
  createUserModalOpen?: boolean;
  setCreateUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateUserButtons(props: createUserModalOpen) {
  const { createUserModalOpen, setCreateUserModalOpen } = props;
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: " flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: 2,
      }}
    >
      <Fab
        onClick={() => setCreateUserModalOpen(false)}
        color={"error"}
        sx={{ padding: "0.5rem 1rem", marginRight: "1rem" }}
        variant="extended"
        size="small"
      >
        <DoDisturbOnIcon sx={{ color: "success" }} />
        Cancelar
      </Fab>
      <Fab
        color="primary"
        sx={{
          mr: 2,
          padding: "0.5rem 1rem",
          marginRight: "1rem",
        }}
        variant="extended"
        size="small"
      >
        <AddIcon />
        Criar
      </Fab>
    </Box>
  );
}
