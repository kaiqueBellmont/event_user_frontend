// src/pages/Home.tsx
import React from "react";
import AppBar from "../components/AppBar";
import { GlobalStyle } from "../GlobalStyle";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const Home: React.FC = () => {
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
      <Footer />
    </Box>
  );
};

export default Home;
