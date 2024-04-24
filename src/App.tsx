// App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./GlobalStyle";
import { Helmet } from "react-helmet";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <link
          rel="icon"
          type="image/webp"
          href="public/Logo-Freelaw-Branca.webp"
        />
      </Helmet>
      <ToastContainer />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
