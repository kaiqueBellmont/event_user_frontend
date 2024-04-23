import { Routes as RoutesDOM, Route } from "react-router-dom";
import Home from "../pages/Home";

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<Home />} />
    </RoutesDOM>
  );
};
