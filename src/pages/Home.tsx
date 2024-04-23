// src/pages/Home.tsx
import React from "react";
import AppBar from "../components/AppBar";
import { GlobalStyle } from "../GlobalStyle";

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <h1>Bem-vindo à nossa página inicial!</h1>
      <p>Este é o lugar onde você pode começar.</p>
    </>
  );
};

export default Home;
