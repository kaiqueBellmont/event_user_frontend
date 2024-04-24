// src/pages/Home.tsx
import React from "react";
import AppBar from "../components/AppBar";
import { GlobalStyle } from "../GlobalStyle";
import Footer from "../components/Footer";
import { Box, Container, Typography } from "@mui/material";
import RecipeReviewCard from "../components/Card";
import { Helmet } from "react-helmet";

const Event: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        justifyContent: "space-between",
      }}
    >
      <Helmet>
        <title>Eventos</title>
      </Helmet>
      <GlobalStyle />
      <AppBar />
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </Container>
      <Footer />
    </Box>
  );
};

export default Event;
