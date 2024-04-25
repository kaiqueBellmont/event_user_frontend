import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, useMediaQuery } from "@mui/material";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { eventType } from "../../types/eventType";
import { start } from "repl";

const defaultTheme = createTheme();

type editEventModalOpenType = {
  editEventModalOpen: boolean;
  togleModal: () => void;
  event: eventType;
};

export default function EditEventForm({
  event,
  togleModal,
  editEventModalOpen,
}: editEventModalOpenType) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      description: data.get("description"),
      localization: data.get("localization"),
      lotation: data.get("lotation"),
      capacity: data.get("capacity"),
      startDate: data.get("start-date"),
      startTime: data.get("start-time"),
      endDate: data.get("end-date"),
      endTime: data.get("end-time"),
    });
  };

  console.log(dayjs(event.startTime));

  const [formData, setFormData] = React.useState({
    title: event.title || "",
    description: event.description || "",
    localization: event.localization || "",
    capacity: event.capacity || "",
    startDate: event.startDate || "",
    startTime: dayjs(`${event.startDate}T${event.startTime}`),
    endDate: event.endDate || "",
    endTime: dayjs(`${event.endDate}T${event.endTime}`),
  });

  React.useEffect(() => {
    setFormData({
      title: event.title || "",
      description: event.description || "",
      localization: event.localization || "",
      capacity: event.capacity || "",
      startDate: event.startDate || "",
      startTime: dayjs(`${event.startDate}T${event.startTime}`),
      endDate: event.endDate || "",
      endTime: dayjs(`${event.endDate}T${event.endTime}`),
    });
  }, [event]);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const dateFiledsWidth = isSmallScreen ? 16 : 3;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        component="main"
        sx={{ height: "auto", width: "100%", maxWidth: "100%" }}
      >
        <CssBaseline />
        <Grid
          sx={{
            borderRadius: 8,
          }}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <CalendarMonthIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Editar Evento
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="title"
                      required
                      fullWidth
                      id="title"
                      label="Título"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="description"
                      required
                      fullWidth
                      id="description"
                      label="Descrição"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="localization"
                      required
                      fullWidth
                      id="localization"
                      label="Local"
                      value={formData.localization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          localization: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="capacity"
                      required
                      fullWidth
                      id="capacity"
                      label="capacidade (de pessoas)"
                      type="number"
                      value={formData.capacity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          capacity: e.target.value,
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={dateFiledsWidth}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Data inicial"
                        name="start-date"
                        format="DD/MM/YYYY"
                        value={dayjs(formData.startDate)}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid
                    item
                    xs={dateFiledsWidth}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileTimePicker
                        name="start-time"
                        label="Hora inicial"
                        ampm={false}
                        format="HH:mm"
                        defaultValue={formData.startTime}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={dateFiledsWidth}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Data Final"
                        name="end-date"
                        format="DD/MM/YYYY"
                        value={dayjs(formData.endDate)}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid
                    item
                    xs={dateFiledsWidth}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileTimePicker
                        name="end-time"
                        label="Hora Final"
                        ampm={false}
                        format="HH:mm"
                        defaultValue={formData.endTime}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    maxWidth: "100%",
                    display: " flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Fab
                    type="button"
                    onClick={togleModal}
                    color={"error"}
                    sx={{ padding: "0.5rem 1rem", marginRight: "1rem" }}
                    variant="extended"
                    size="small"
                  >
                    Cancelar
                  </Fab>
                  <Fab
                    type="submit"
                    color="primary"
                    sx={{
                      mr: 2,
                      padding: "0.5rem 1rem",
                      marginRight: "1rem",
                    }}
                    variant="extended"
                    size="small"
                  >
                    Salvar
                  </Fab>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
