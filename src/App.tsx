// App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router/index";
import { Toaster } from "react-hot-toast";
import { CustomToaster } from "./components/CustomToaster";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CustomToaster>
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{ className: "react-hot-toast" }}
        />
      </CustomToaster>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
