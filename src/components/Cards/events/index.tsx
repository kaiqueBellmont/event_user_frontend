import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import EditEventModal from "../../modals/editEventModal";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { eventType } from "../../../types/eventType";
import CustomChip from "../../Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import CelebrationIcon from "@mui/icons-material/Celebration";
import dayjs from "dayjs";
import Tooltip from "@mui/material/Tooltip";

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
  lotation,
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

  const formatDate = (date: string, time: string) => {
    return dayjs(`${date} ${time}`).format("DD/MM/YYYY HH:mm"); // Format date as desired
  };

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
            <Img alt="complex" src="astronaut.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {description}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid xs={12}>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <span style={{ fontWeight: "bold" }}>Local:</span>{" "}
                  {localization}
                </Typography>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <span style={{ fontWeight: "bold" }}>Inicio:</span>{" "}
                  {formatDate(startDate!, startTime!)}
                </Typography>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <span style={{ fontWeight: "bold" }}>Fim:</span>{" "}
                  {formatDate(endDate!, endTime!)}
                </Typography>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <span style={{ fontWeight: "bold" }}>Capacidade:</span>{" "}
                  {capacity}
                </Typography>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <span style={{ fontWeight: "bold" }}>Confirmados:</span>{" "}
                  {lotation}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomChip type={type} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title={"Deletar Evento"}>
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => {
                    console.log("delete");
                  }}
                  color="inherit"
                >
                  <DeleteIcon
                    sx={{
                      color: "red",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Editar Evento"}>
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleModal}
                  color="inherit"
                >
                  <EditIcon
                    sx={{
                      color: "darkblue",
                    }}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title={"Se inscrever no Evento"}>
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => {
                    console.log("delete");
                  }}
                  color="inherit"
                >
                  <CelebrationIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
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
