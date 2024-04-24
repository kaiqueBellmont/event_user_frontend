import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FloatingActionButtons from "../Buttons/createModalsButtons";
import CreateUserButtons from "../Buttons/createModalsButtons";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

type createUserModalOpen = {
  createUserModalOpen: boolean;
  setCreateUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateUserModal({
  createUserModalOpen,
  setCreateUserModalOpen,
}: createUserModalOpen) {
  return (
    <Modal
      open={createUserModalOpen}
      onClose={() => setCreateUserModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <CreateUserButtons setCreateUserModalOpen={setCreateUserModalOpen} />
      </Box>
    </Modal>
  );
}
