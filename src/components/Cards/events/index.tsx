import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import EditEventModal from "../../modals/editEventModal";
import { IconButton, useMediaQuery } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { eventType } from "../../../types/eventType";
import CustomChip from "../../Chip";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function EventCard({
  id,
  title,
  description,
  startDate,
  endDate,
  localization,
  capacity,
  startTime,
  endTime,
  image,
  isActive,
  updatedAt,
  deletedAt,
}: eventType) {
  const [editEventModalOpen, setEditEventModalOpen] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };

  function getEventStatus() {
    if (isActive) {
      return "active";
    } else if (deletedAt) {
      return "cancel";
    } else if (updatedAt) {
      return "update";
    } else {
      return "active";
    }
  }
  const type = getEventStatus();

  const toggleModal = () => {
    console.log("toggleModal");

    setEditEventModalOpen(!editEventModalOpen);
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        "& :hover": {
          cursor: "pointer",
        },
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/astronaut.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Titulo do evento
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Descrição do evento
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleModal}
                color="inherit"
              >
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <CustomChip type={type} />
          </Grid>
        </Grid>
      </Grid>
      <EditEventModal
        editEventModalOpen={editEventModalOpen}
        toggleModal={toggleModal}
        event={{
          id,
          title,
          description,
          startDate,
          endDate,
          localization,
          startTime,
          endTime,
          capacity,
          image,
        }}
      />
    </Paper>
  );
}
