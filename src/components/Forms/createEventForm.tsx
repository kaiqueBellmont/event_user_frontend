import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, useMediaQuery } from "@mui/material";
import moment from "moment";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

type createEventModalOpen = {
  createEventModalOpen?: boolean;
  setCreateEventModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateEventForm({
  createEventModalOpen,
  setCreateEventModalOpen,
}: createEventModalOpen) {
  const [response, setResponse] = React.useState<any>(null);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      description: data.get("description"),
      localization: data.get("localization"),
      capacity: data.get("capacity"),
      startDate: data.get("start-date"),
      startTime: data.get("start-time"),
      endDate: data.get("end-date"),
      endTime: data.get("end-time"),
    });

    try {
      const userData = localStorage.getItem("user");

      if (!userData) {
        throw new Error("User data not found in local storage");
      }
      const user = JSON.parse(userData!);
      const token = user?.jwt;

      if (!token) {
        throw new Error("Token not found in local storage");
      }

      const formatDateString = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      const formData = new FormData();
      formData.append("title", data.get("title") || "");
      formData.append("description", data.get("description") || "");
      formData.append("location", data.get("localization") || "");
      formData.append("capacity", String(data.get("capacity") || ""));
      formData.append("start_date", moment().format("YYYY-MM-DD"));
      formData.append("end_date", moment().format("YYYY-MM-DD"));
      formData.append("start_time", data.get("start-time") || "");
      formData.append("end_time", data.get("end-time") || "");

      const res = await fetch("http://localhost:8000/events/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const json = await res.json();
      setResponse(json);
      console.log(json);

      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
                Criar Evento
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
                      autoFocus
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
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="localization"
                      required
                      fullWidth
                      id="localization"
                      label="Local"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="capacity"
                      required
                      fullWidth
                      id="capacity"
                      label="capacidade (de pessoas)"
                      autoFocus
                      type="number"
                    />
                  </Grid>

                  <Grid item xs={dateFiledsWidth}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Data inicial"
                        name="start-date"
                        format="DD/MM/YYYY"
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
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={dateFiledsWidth}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Data Final"
                        name="end-date"
                        format="DD/MM/YYYY"
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
                    onClick={() => setCreateEventModalOpen(false)}
                    color={"error"}
                    sx={{ padding: "0.5rem 1rem", marginRight: "1rem" }}
                    variant="extended"
                    size="small"
                  >
                    <DoDisturbOnIcon sx={{ color: "success" }} />
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
                    <AddIcon />
                    Criar
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
