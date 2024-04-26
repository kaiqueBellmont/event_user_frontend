// App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./GlobalStyle";
import { Route, Navigate } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
