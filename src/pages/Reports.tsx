// src/pages/Home.tsx
import React from "react";
import AppBar from "../components/AppBar";
import { GlobalStyle } from "../GlobalStyle";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";

const Reports: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        justifyContent: "space-between",
      }}
    >
      <GlobalStyle />
      <AppBar />
      <Box>
        <Typography textAlign="center" variant="h1">
          {" "}
          Reports Page
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Reports;
