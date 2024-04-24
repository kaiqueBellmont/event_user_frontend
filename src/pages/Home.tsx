// src/pages/Home.tsx
import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { GlobalStyle } from "../GlobalStyle";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import { Bounce, toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home: React.FC = () => {
  const customId = "custom-id-yes";

  useEffect(() => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      toastId: customId,
    });
  }, []);

  return (
    <HelmetProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Helmet>
          <title>Home</title>
        </Helmet>
        <GlobalStyle />
        <AppBar />
        <Footer />
      </Box>
    </HelmetProvider>
  );
};

export default Home;
