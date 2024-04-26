import { Routes as RoutesDOM, Route } from "react-router-dom";
import Home from "../pages/Home";
import Event from "../pages/Event";
import Users from "../pages/Users";
import Reports from "../pages/Reports";
import SignInSide from "../pages/SignInSide";
import SignUp from "../pages/SignUp";
import React, { useEffect, useState } from "react";

export const Routes = () => {
  interface User {
    isLoggedIn: boolean;
    // Other user data as needed (e.g., username, token)
  }

  const AuthContext = React.createContext<User | null>(null);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = async (credentials: {
    username: string;
    password: string;
  }) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        setUser({ isLoggedIn: true, ...data.user }); // Extract relevant user data from response
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user data in local storage
      } else {
        // Handle login errors (e.g., display error message)
        console.error("Login failed:", await response.text());
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={user}>
      <RoutesDOM>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} />
      </RoutesDOM>
    </AuthContext.Provider>
  );
};
