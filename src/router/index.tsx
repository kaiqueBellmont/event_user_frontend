import { Routes as RoutesDOM, Route } from "react-router-dom";
import Home from "../pages/Home";
import Event from "../pages/Event";
import Users from "../pages/Users";
import Reports from "../pages/Reports";
import SignInSide from "../pages/SignInSide";
import SignUp from "../pages/SignUp";

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/users" element={<Users />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/login" element={<SignInSide />} />
      <Route path="/register" element={<SignUp />} />
    </RoutesDOM>
  );
};
