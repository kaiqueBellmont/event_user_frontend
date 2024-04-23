// src/pages/Home.tsx
import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { GlobalStyle } from "../GlobalStyle";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import toast from "react-hot-toast";
const Home: React.FC = () => {
  useEffect(() => {
    toast.success("Welcome to the Home page!");
  }, []);

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
